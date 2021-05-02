declare const useHoveredElement: (rectangle: {
    viewportX: number;
    viewportY: number;
    width: number;
    height: number;
}, ignoredElements: Element[]) => any;
export default useHoveredElement;
