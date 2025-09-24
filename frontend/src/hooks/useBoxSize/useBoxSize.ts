"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { type BoxSize } from "./boxSize.utils";
import {
  measureNode,
  createResizeObserver,
  cleanupObserver,
} from "./boxSize.utils";

const DEFAULT_SIZE: BoxSize = { width: 0, height: 0 };

/**
 * A hook that measures the size of a given node and returns a BoxSize object with the width and height rounded to the nearest integer.
 * The size is updated every time the node is resized and the update is debounced with a given delay.
 *
 * @param {number} [delay=1000] - The delay in milliseconds.
 * @returns {{ ref: (node: HTMLElement | null) => void, ...BoxSize }} - An object containing a ref function and the current size of the node.
 */
export const useBoxSize = (delay = 1000) => {
  const [size, setSize] = useState<BoxSize>(DEFAULT_SIZE);
  const [node, setNode] = useState<HTMLElement | null>(null);
  const observerRef = useRef<ResizeObserver | null>(null);
  const timerRef = useRef<number | null>(null);

  const schedule = useCallback(
    (next: BoxSize) => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setSize(next), delay);
    },
    [delay],
  );

  useEffect(() => {
    if (!node) return undefined;

    setSize(measureNode(node));
    const observer = createResizeObserver(schedule);
    observer.observe(node);
    observerRef.current = observer;

    return () => {
      cleanupObserver(observerRef);
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [node, schedule]);

  const ref = useCallback((next: HTMLElement | null) => setNode(next), []);

  return { ref, ...size };
};
