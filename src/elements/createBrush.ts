import { CreateBrushReturn } from '../types'
import { hexToRgbA } from '../utilities/hexToRgba'
import maxZIndex from '../utilities/maxZIndex'

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
