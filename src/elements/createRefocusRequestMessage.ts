import { CreateRefocusRequestMessageReturn } from '../types'
import maxZIndex from '../utilities/maxZIndex'

export const createRefocusRequestMessage = (): CreateRefocusRequestMessageReturn => {
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
