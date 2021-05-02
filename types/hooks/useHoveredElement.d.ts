declare const useHoveredElement: (rectangle: {
    viewportX: number;
    viewportY: number;
    width: number;
    height: number;
}, ignoredElements: Element[]) => void;
export default useHoveredElement;
