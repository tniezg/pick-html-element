export interface CreateElementReturn {
  append: (parent: HTMLElement) => void
  remove: () => void
}

export interface CreateBrushReturn extends CreateElementReturn {
  setRadius: (radius: number) => void
  setPosition: (x: number, y: number) => void
  getRadius: () => number
  show: () => void
  hide: () => void
}

export interface CreateGlassReturn extends CreateElementReturn {
  showFocusRequest: () => void
  hideFocusRequest: () => void
}

export interface CreatePageElementHighlightReturn extends CreateElementReturn {
  setDimensions: (width: number, height: number) => void
  setPosition: (x: number, y: number) => void
  show: () => void
  hide: () => void
  removeDimensions: () => void
  removePosition: () => void
}

export interface CreateTooltipsReturn extends CreateElementReturn {}

export interface ElementSelectorChangeCallback {
  (elementSelector: string): unknown
}

export interface HandleBrushDecrease {
  brushRadiusMultiplier: number
  brush: CreateBrushReturn
  baseBrushRadius: number
  lastMouseEvent: MouseEvent
  pageElementHighlight: CreatePageElementHighlightReturn
  elementSelectorChangeCallback: ElementSelectorChangeCallback
}

export interface HandleBrushDecreaseResponse {
  brushRadiusMultiplier?: number
}

export interface HandleBrushIncrease {
  brushRadiusMultiplier: number
  brush: CreateBrushReturn
  baseBrushRadius: number
  lastMouseEvent: MouseEvent
  pageElementHighlight: CreatePageElementHighlightReturn
  elementSelectorChangeCallback: ElementSelectorChangeCallback
}

export interface HandleBrushIncreaseResponse {
  brushRadiusMultiplier?: number
}

export interface State {
  brush: CreateBrushReturn
  glass: CreateGlassReturn
  pageElementHighlight: CreatePageElementHighlightReturn
  tooltips: CreateTooltipsReturn
  baseBrushRadius: number
  brushRadiusMultiplier: number
  lastMouseEvent: MouseEvent | null
  elementSelector: string | null
}

export interface InitOptions {
  hijackEvents: boolean
  tint: string
}

// Export random thing to ensure Webpack rebuilds when this file changes (it contains only interfaces).
export const dummy = {}
