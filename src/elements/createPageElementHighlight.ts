import { CreatePageElementHighlightReturn } from '../types'
import { hexToRgbA } from '../utilities/hexToRgba'
import maxZIndex from '../utilities/maxZIndex'

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
