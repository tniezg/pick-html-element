import { CreateBrushReturn, CreateGlassReturn, CreatePageElementHighlightReturn, CreateTooltipsReturn } from './types'
import { hexToRgbA } from './utilities/hexToRgba'

const maxZIndex = 2147483647

export const createBrush = (options): CreateBrushReturn => {
  const brush = document.createElement('div')
  let radius = 0
  const { color } = options

  brush.style.borderRadius = '50%'
  brush.style.background = hexToRgbA(color, 0.8)
  brush.style.position = 'absolute'
  brush.style.transform = 'translate(-50%,-50%)'
  brush.style.pointerEvents = 'none'
  brush.style.opacity = '0'
  brush.style.border = '1px solid rgba(255,255,255,0.4)'
  brush.style.transition = 'opacity 500ms'
  brush.style.zIndex = `${maxZIndex - 1}`
  brush.style.transition = '200ms width, 200ms height, 200ms opacity'

  return {
    append: (parent) => {
      parent.appendChild(brush)
      brush.offsetHeight // force reflow
    },
    remove: (): void => {
      brush.remove()
    },
    setRadius: (localRadius) => {
      const diameter = localRadius * 2

      brush.style.width = `${diameter}px`
      brush.style.height = `${diameter}px`

      radius = localRadius
    },
    setPosition: (x, y) => {
      brush.style.left = `${x}px`
      brush.style.top = `${y}px`
    },
    getRadius: () => {
      return radius
    },
    show: (): void => {
      brush.style.opacity = '1'
    },
    hide: (): void => {
      brush.style.opacity = '0'
    }
  }
}

export const createGlass = (): CreateGlassReturn => {
  const glass = document.createElement('div')

  glass.style.width = '100%'
  glass.style.height = '100%'
  glass.style.position = 'fixed'
  glass.style.background = 'rgba(0, 0, 0, 0.1)'
  glass.style.top = '0'
  glass.style.left = '0'
  glass.style.pointerEvents = 'none'
  glass.style.zIndex = `${maxZIndex - 3}`
  glass.style.display = 'flex'
  glass.style.justifyContent = 'center'
  glass.style.alignItems = 'center'

  const focusRequest = document.createElement('div')

  focusRequest.textContent = 'Click on this window to start selecting an element.'
  focusRequest.style.fontSize = '2rem'
  focusRequest.style.padding = '10px 30px'
  focusRequest.style.background = 'rgba(255, 255, 255, 0.8)'
  focusRequest.style.borderRadius = '4px'
  focusRequest.style.opacity = '0'
  focusRequest.style.transition = 'opacity 1s'

  glass.appendChild(focusRequest)

  return {
    append: (parent) => {
      parent.appendChild(glass)
      // Force reflow with glass.offsetHeight.
      // Reflow is important to prevent focusRequest from showing up after focus
      // switches from the extension's popup to page content.
      glass.offsetHeight
    },
    remove: (): void => {
      glass.remove()
    },
    showFocusRequest: (): void => {
      focusRequest.style.opacity = '1'
    },
    hideFocusRequest: (): void => {
      focusRequest.style.opacity = '0'
    }
  }
}

export const createPageElementHighlight = (options): CreatePageElementHighlightReturn => {
  const pageElementHighlight = document.createElement('div')
  const { color } = options

  pageElementHighlight.style.position = 'absolute'
  pageElementHighlight.style.pointerEvents = 'none'
  pageElementHighlight.style.background = hexToRgbA(color, 0.6)
  pageElementHighlight.style.boxSizing = 'border-box'
  pageElementHighlight.style.zIndex = `${maxZIndex - 2}`
  pageElementHighlight.style.opacity = '0'
  pageElementHighlight.style.transition = 'top 1s, left 1s, width 1s, height 1s, opacity 1s'

  return {
    append: (parent) => {
      parent.appendChild(pageElementHighlight)
      pageElementHighlight.offsetHeight // force reflow
    },
    remove: (): void => {
      pageElementHighlight.remove()
    },
    setDimensions: (width, height) => {
      pageElementHighlight.style.width = `${width}px`
      pageElementHighlight.style.height = `${height}px`
    },
    setPosition: (x, y) => {
      pageElementHighlight.style.left = `${x}px`
      pageElementHighlight.style.top = `${y}px`
    },
    show: (): void => {
      pageElementHighlight.style.opacity = '1'
    },
    hide: (): void => {
      pageElementHighlight.style.opacity = '0'
    },
    removePosition: () => {
      pageElementHighlight.style.removeProperty('left')
      pageElementHighlight.style.removeProperty('top')
    },
    removeDimensions: () => {
      pageElementHighlight.style.removeProperty('width')
      pageElementHighlight.style.removeProperty('height')
    }
  }
}

export const createTooltips = (options): CreateTooltipsReturn => {
  const tooltip = document.createElement('div')
  const { alternativeControls } = options

  tooltip.style.position = 'fixed'
  tooltip.style.top = '0'
  tooltip.style.width = '100%'
  tooltip.style.background = 'rgba(0, 0, 0, 0.2)'
  tooltip.style.padding = '10px'
  tooltip.style.left = '0'
  tooltip.style.webkitTextStroke = '1px rgba(255, 255, 255, 0.1)'
  tooltip.style.fontWeight = '800'

  if (alternativeControls) {
    tooltip.textContent = `
      To select a bigger element, press Shift + p or +.
      To select a smaller element, press Shift + o or -.
      To cancel, press Shift + x or Escape.
      To confirm, press Shift + s or Enter.
    `
  } else {
    tooltip.textContent = `
      To select a bigger element, press Shift + p.
      To select a smaller element, press Shift + o.
      To cancel, press Shift + x.
      To confirm, press Shift + s.
    `
  }
  tooltip.style.zIndex = `${maxZIndex}`
  tooltip.style.pointerEvents = 'none'

  return {
    append: (parent) => {
      parent.appendChild(tooltip)
      tooltip.offsetHeight // force reflow
    },
    remove: (): void => {
      tooltip.remove()
    }
  }
}
