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

export interface CreateTooltipsReturn extends CreateElementReturn {
  show: () => void
  hide: () => void
  hits: (viewportX: number, viewportY: number) => boolean
}

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
  hijackEvents: boolean // Attept to stop keyboard shortcuts used by the tool to trigger regular page events.
  alternativeControls: boolean // Add another set of keyboard shortcuts for performing the same actions by the tool.
  tint: string
}

// Export random thing to ensure Webpack rebuilds when this file changes (it contains only interfaces).
export const dummy = {}
