import getCssSelector from 'css-selector-generator'
import { debounce } from 'debounce'
import pick from 'lodash/pick'
import values from 'lodash/values'
import { createBrush, createGlass, createPageElementHighlight, createTooltips } from './createElements'
import {
  dummy,
  CreateBrushReturn,
  CreatePageElementHighlightReturn,
  ElementSelectorChangeCallback,
  HandleBrushDecrease,
  HandleBrushDecreaseResponse,
  HandleBrushIncrease,
  HandleBrushIncreaseResponse,
  InitOptions,
  State
} from './types'

// Import non-TypeScript value from './types' to ensure the files gets reloaded.
// More info: https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/issues/36.
dummy

const scriptKey = 'pickHtmlElementScript'
const scriptOptionsKey = 'pickHtmlElementScriptOptions'
const elementSelectEventName = 'pickHtmlElementScriptElementSelect'

const getSelector = (element): string => {
  return getCssSelector(element, {
    // selectors: ['class', 'tag'],
    selectors: ['id', 'class', 'attribute', 'nthchild', 'nthoftype'],
    combineWithinSelector: true,
    combineBetweenSelectors: true
    // includeTag: true
  })
}

const findElementFromBrush = (
  viewportX: number,
  viewportY: number,
  pageX: number,
  pageY: number,
  scrollLeft: number,
  scrollTop: number,
  brushRadius: number
): Element => {
  const elements = document.elementsFromPoint(viewportX, viewportY)
  const brushX = pageX
  const brushY = pageY

  const element =
    elements.find((element) => {
      const elementRectangle = element.getBoundingClientRect()

      return (
        brushX - brushRadius >= elementRectangle.x + scrollLeft &&
        brushX + brushRadius <= elementRectangle.x + scrollLeft + elementRectangle.width &&
        brushY - brushRadius >= elementRectangle.y + scrollTop &&
        brushY + brushRadius <= elementRectangle.y + scrollTop + elementRectangle.height
      )
    }) || document.body

  return element
}

const highlightElement = (
  element: Element,
  scrollLeft: number,
  scrollTop: number,
  pageElementHighlight: CreatePageElementHighlightReturn
): void => {
  const elementBoundingRect = element.getBoundingClientRect()

  pageElementHighlight.setPosition(elementBoundingRect.left + scrollLeft, elementBoundingRect.top + scrollTop)
  pageElementHighlight.setDimensions(elementBoundingRect.width, elementBoundingRect.height)
}

const updatePickElement = (
  event: MouseEvent,
  brushRadius: number,
  pageElementHighlight: CreatePageElementHighlightReturn,
  elementSelectorChangeCallback: ElementSelectorChangeCallback
): void => {
  const pageX = event.pageX
  const pageY = event.pageY

  const viewportX = event.clientX
  const viewportY = event.clientY

  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  const element = findElementFromBrush(viewportX, viewportY, pageX, pageY, scrollLeft, scrollTop, brushRadius)

  const elementSelector = getSelector(element)

  const elementFromSelector = document.querySelector(elementSelector)

  highlightElement(elementFromSelector, scrollLeft, scrollTop, pageElementHighlight)

  elementSelectorChangeCallback(elementSelector)
}

const debouncedUpdatePickElement = debounce(updatePickElement, 200)

const getBrushRadiusFromMultiplier = (baseBrushRadius: number, radiusMultiplier: number): number =>
  baseBrushRadius * (1 / Math.pow(radiusMultiplier, 2))

const handleBrushDecrease = (options: HandleBrushDecrease): HandleBrushDecreaseResponse => {
  const newBrushRadiusMultiplier = options.brushRadiusMultiplier + 0.2

  if (newBrushRadiusMultiplier < 3) {
    const newBrushRadius = getBrushRadiusFromMultiplier(options.baseBrushRadius, newBrushRadiusMultiplier)

    options.brush.setRadius(newBrushRadius)

    const brushRadiusMultiplier = newBrushRadiusMultiplier

    if (options.lastMouseEvent) {
      updatePickElement(
        options.lastMouseEvent,
        options.brush.getRadius(),
        options.pageElementHighlight,
        options.elementSelectorChangeCallback
      )
    }

    return {
      brushRadiusMultiplier
    }
  }

  return {}
}

const handleBrushRadiusIncrease = (options: HandleBrushIncrease): HandleBrushIncreaseResponse => {
  const newBrushRadiusMultiplier = options.brushRadiusMultiplier - 0.2

  if (newBrushRadiusMultiplier > 0.001) {
    const newBrushRadius = getBrushRadiusFromMultiplier(options.baseBrushRadius, newBrushRadiusMultiplier)

    options.brush.setRadius(newBrushRadius)

    const brushRadiusMultiplier = newBrushRadiusMultiplier

    if (options.lastMouseEvent) {
      updatePickElement(
        options.lastMouseEvent,
        options.brush.getRadius(),
        options.pageElementHighlight,
        options.elementSelectorChangeCallback
      )
    }

    return {
      brushRadiusMultiplier
    }
  }

  return {}
}

const appendAllTo = (instances, parent) => {
  instances.forEach((instance) => {
    instance.append(parent)
  })
}

const removeAll = (instances) => {
  instances.forEach((instance) => {
    instance.remove()
  })
}

const updateBrushPosition = (brush: CreateBrushReturn, x: number, y: number): void => {
  brush.setPosition(x, y)
}

const createState = (): State => {
  return {
    brush: createBrush(),
    glass: createGlass(),
    pageElementHighlight: createPageElementHighlight(),
    tooltips: createTooltips(),
    baseBrushRadius: 50,
    brushRadiusMultiplier: 1,
    lastMouseEvent: null,
    elementSelector: null
  }
}

const createOnMouseMoveListener = (state: State, updateStateElementSelector) => (event: MouseEvent): void => {
  state.lastMouseEvent = event
  updateBrushPosition(state.brush, event.pageX, event.pageY)
  debouncedUpdatePickElement(event, state.brush.getRadius(), state.pageElementHighlight, updateStateElementSelector)
}

const createOnMouseMoveOnceListener = (state: State, listeners) => (): void => {
  document.addEventListener('scroll', listeners.onScrollOnce, { once: true })
  state.brush.show()
  // Call removeDimensions and removePosition to not animate dimensions and position when the highlight becomes
  // visible again(ex.after scrolling the page).
  state.pageElementHighlight.removeDimensions()
  state.pageElementHighlight.removePosition()
  state.pageElementHighlight.show()
}

const createOnScrollOnceListener = (state: State, listeners) => (): void => {
  document.addEventListener('mousemove', listeners.onMouseMoveOnce, { once: true })

  state.elementSelector = null
  state.brush.hide()
  state.pageElementHighlight.hide()
}

const createOnBlurListener = (state: State, listeners) => (): void => {
  document.removeEventListener('mousemove', listeners.onMouseMoveOnce)
  document.removeEventListener('mousemove', listeners.onMouseMove)
  document.removeEventListener('keydown', listeners.onKeyDown)
  document.removeEventListener('scroll', listeners.onScrollOnce)

  state.elementSelector = null
  state.brush.hide()
  state.pageElementHighlight.hide()
  state.glass.showFocusRequest()
}

const createOnFocusListener = (state: State, listeners) => (): void => {
  document.addEventListener('mousemove', listeners.onMouseMoveOnce, { once: true })
  document.addEventListener('mousemove', listeners.onMouseMove)
  document.addEventListener('keydown', listeners.onKeyDown)

  state.glass.hideFocusRequest()
}

const hijackEvent = (event) => {
  event.preventDefault()
  event.stopImmediatePropagation()
  event.stopPropagation()
}

const createOnKeyDownListener = (state: State, updateStateElementSelector, options) => (event: KeyboardEvent): void => {
  const { hijackEvents } = options

  if (event.key === '-' || event.key === '_') {
    // Use _ as alias for -.
    const response = handleBrushDecrease({
      ...pick(state, ['baseBrushRadius', 'brush', 'lastMouseEvent', 'pageElementHighlight', 'brushRadiusMultiplier']),
      elementSelectorChangeCallback: updateStateElementSelector
    })

    Object.assign(state, response)

    if (hijackEvents) {
      hijackEvent(event)
    }
  } else if (event.key === '+' || event.key === '=') {
    // Use = as alias for +.
    const response = handleBrushRadiusIncrease({
      ...pick(state, ['baseBrushRadius', 'brush', 'lastMouseEvent', 'pageElementHighlight', 'brushRadiusMultiplier']),
      elementSelectorChangeCallback: updateStateElementSelector
    })

    Object.assign(state, response)

    if (hijackEvents) {
      hijackEvent(event)
    }
  } else if (event.key === 'Escape') {
    window[scriptKey].destroy()

    if (hijackEvents) {
      hijackEvent(event)
    }
  } else if (event.key === 'Enter' || event.key === 'S') {
    if (state.elementSelector === null) {
      console.warn('No element selected.')
    } else {
      console.info('Element picked.')

      const selectEvent = new CustomEvent(elementSelectEventName, {
        detail: { elementSelector: state.elementSelector }
      })

      window.dispatchEvent(selectEvent)
    }

    if (hijackEvents) {
      hijackEvent(event)
    }
  }
}

const init = (customOptions: InitOptions) => {
  const state = createState()
  const defaultOptions: InitOptions = {
    hijackEvents: true,
    alternativeControls: true,
    tint: '#f57542'
  }
  const options: InitOptions = {
    ...customOptions,
    ...defaultOptions
  }

  const updateStateElementSelector = (elementSelector: string): void => {
    state.elementSelector = elementSelector
  }

  const listeners: any = {}

  // Extend the listeners object to allow listeners to call each other.
  Object.assign(listeners, {
    onMouseMove: createOnMouseMoveListener(state, updateStateElementSelector),
    onMouseMoveOnce: createOnMouseMoveOnceListener(state, listeners),
    onScrollOnce: createOnScrollOnceListener(state, listeners),
    onBlur: createOnBlurListener(state, listeners),
    onFocus: createOnFocusListener(state, listeners),
    onKeyDown: createOnKeyDownListener(state, updateStateElementSelector, { hijackEvents: options.hijackEvents })
  })

  appendAllTo(values(pick(state, ['glass', 'brush', 'pageElementHighlight', 'tooltips'])), document.body)

  state.brush.setRadius(state.baseBrushRadius)

  if (document.hasFocus()) {
    document.addEventListener('mousemove', listeners.onMouseMoveOnce, { once: true })
    document.addEventListener('mousemove', listeners.onMouseMove)
    document.addEventListener('keydown', listeners.onKeyDown)
  } else {
    state.glass.showFocusRequest()
  }

  window.addEventListener('blur', listeners.onBlur)
  window.addEventListener('focus', listeners.onFocus)

  return {
    destroy: (): void => {
      document.removeEventListener('mousemove', listeners.onMouseMoveOnce)
      document.removeEventListener('mousemove', listeners.onMouseMove)
      document.removeEventListener('keydown', listeners.onKeyDown)
      document.removeEventListener('scroll', listeners.onScrollOnce)
      window.removeEventListener('blur', listeners.onBlur)
      window.removeEventListener('focus', listeners.onFocus)

      removeAll(values(pick(state, ['glass', 'brush', 'pageElementHighlight', 'tooltips'])))
    }
  }
}

window[scriptKey] = (() => {
  let instance = null

  return {
    init: (): void => {
      if (instance) {
        instance.destroy()
      }

      const options = window[scriptOptionsKey]
      instance = init(options)
    },
    destroy: (): void => {
      if (instance) {
        instance.destroy()
        instance = null
      }
    }
  }
})()
