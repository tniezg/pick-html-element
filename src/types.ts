export interface CreateRefocusRequestMessageReturn {
  showFocusRequest: () => void
  hideFocusRequest: () => void
}

export interface CreatePageElementHighlightReturn {
  setDimensions: (width: number, height: number) => void
  setPosition: (x: number, y: number) => void
  removeDimensions: () => void
  removePosition: () => void
}

export interface ElementSelectorChangeCallback {
  (elementSelector: string, element: Element): unknown
}

export interface HandleBrushIncrease {
  brushRadiusMultiplier: number
  baseBrushRadius: number
  lastMouseEvent: MouseEvent
  elementSelectorChangeCallback: ElementSelectorChangeCallback
}

export interface HandleBrushIncreaseResponse {
  brushRadiusMultiplier?: number
}

export interface State {
  baseBrushRadius: number
  brushRadiusMultiplier: number
  lastMouseEvent: MouseEvent | null
  elementSelector: string | null
  element: Element | null
}
