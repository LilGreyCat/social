export type BoxSize = { width: number; height: number };

/**
 * Rounds the width and height of a DOMRectReadOnly or an object with width and height properties to the nearest integer.
 * @param {{ width, height }} obj - The object to round the size of.
 * @returns {{ width: number, height: number }} - The rounded size.
 */
const roundSize = ({
    width, height
}: DOMRectReadOnly | { width: number; height: number },
) => (
    { width: Math.round(width), height: Math.round(height) }
);

/**
 * Measures the size of a DOM node and returns a BoxSize with the width and height rounded to the nearest integer.
 * @param {HTMLElement} node - The node to measure the size of.
 * @returns {BoxSize} - The measured size of the node.
 */
const measureNode = (node: HTMLElement): BoxSize => (
    roundSize(node.getBoundingClientRect())
);

/**
 * Creates a ResizeObserver that will call the provided onSize function when the size of the observed node changes.
 * The onSize function will be provided with a BoxSize object containing the width and height of the node, rounded to the nearest integer.
 * @param {function(BoxSize): void} onSize - The function to call when the size of the node changes.
 * @returns {ResizeObserver} - The created ResizeObserver.
 */
const createResizeObserver = (
    onSize: (size: BoxSize) => void,
): ResizeObserver => {
    return new ResizeObserver(([entry]) => {
        if (!entry) return;
        const { width, height } = entry.contentRect;
        onSize(roundSize({ width, height }));
    });
};

/**
 * Cleans up a ResizeObserver by disconnecting it and setting its reference to null.
 * @param {React.RefObject<ResizeObserver | null>} ref - The reference to the ResizeObserver to clean up.
 */
const cleanupObserver = (
    ref: React.RefObject<ResizeObserver | null>,
) => {
    ref.current?.disconnect();
    ref.current = null;
};

export { roundSize, measureNode, createResizeObserver, cleanupObserver };
