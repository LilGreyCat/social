"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { type BoxSize } from "./boxSize.utils";
import { measureNode, createResizeObserver, cleanupObserver } from "./boxSize.utils";

/**
 * A hook that measures the size of a node and returns the size
 * in a BoxSize object with the width and height rounded to the nearest integer.
 * The size is updated every time the node is resized.
 * The hook also cleans up the ResizeObserver when the component is unmounted.
 * @param {number} [delay=1000] - The delay in milliseconds before updating the size after the node is resized.
 * @returns {{ ref: React.RefObject<HTMLElement | null>, width: number, height: number }}
 */
export const useBoxSize = (delay = 1000) => {
  const [size, setSize] = useState<BoxSize>({ width: 0, height: 0 });
  const observerRef = useRef<ResizeObserver | null>(null);
  const timerRef = useRef<number | null>(null);

  const schedule = (next: BoxSize) => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setSize(next), delay);
  };

  const ref = useCallback((node: HTMLElement | null) => {
    cleanupObserver(observerRef);
    if (!node) return;

    setSize(measureNode(node));

    observerRef.current = createResizeObserver(schedule);
    observerRef.current.observe(node);
  }, [delay]);

  useEffect(() => () => {
    cleanupObserver(observerRef);
    if (timerRef.current) window.clearTimeout(timerRef.current);
  }, []);

  return { ref, ...size };
}
