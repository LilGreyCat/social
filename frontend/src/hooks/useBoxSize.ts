import { useCallback, useEffect, useRef, useState } from "react";

export type BoxSize = { width: number; height: number };

export function useBoxSize(threshold = 8) {
    const [size, setSize] = useState<BoxSize>({ width: 0, height: 0 });
    const nodeRef = useRef<HTMLElement | null>(null);
    const frameRef = useRef<number | null>(null);
    const lastRef = useRef<BoxSize>({ width: 0, height: 0 });

    const measure = useCallback((el: HTMLElement) => {
        const rect = el.getBoundingClientRect();
        const next = { width: Math.round(rect.width), height: Math.round(rect.height) };
        const dx = Math.abs(next.width - lastRef.current.width);
        const dy = Math.abs(next.height - lastRef.current.height);
        if (dx + dy >= threshold) {
            lastRef.current = next;
            setSize(next);
        }
    }, [threshold]);

    const ref = useCallback((node: HTMLElement | null) => {
        nodeRef.current = node || null;
        if (!node) return;
        measure(node);
        const ro = new ResizeObserver(() => {
            if (frameRef.current != null) return;
            frameRef.current = requestAnimationFrame(() => {
                frameRef.current = null;
                if (nodeRef.current) measure(nodeRef.current);
            });
        });
        ro.observe(node);
        (ref as any)._ro = ro; // keep for cleanup
    }, [measure]);

    useEffect(() => {
        return () => {
            if ((ref as any)._ro) (ref as any)._ro.disconnect();
            if (frameRef.current != null) cancelAnimationFrame(frameRef.current);
        };
    }, [ref]);

    return { ref, ...size };
}