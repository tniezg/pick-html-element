import { CreateTooltipsReturn } from '../types'
import maxZIndex from '../utilities/maxZIndex'

export const createTooltips = (options): CreateTooltipsReturn => {
  const tooltip = document.createElement('div')
  const { alternativeControls } = options

  tooltip.style.position = 'fixed'
  tooltip.style.top = '0'
  tooltip.style.maxWidth = '100%'
  tooltip.style.background = 'rgba(255, 255, 255, 0.8)'
  tooltip.style.padding = '20px 30px'
  tooltip.style.whiteSpace = 'pre'
  tooltip.style.transition = '300ms transform ease-in-out, 300ms opacity ease-in-out'
  tooltip.style.opacity = '1'

  const shadowColor = 'rgba(255,255,255,0.2)'
  tooltip.style.textShadow = [
    `-1px -1px 0 ${shadowColor}`,
    `1px -1px 0 ${shadowColor}`,
    `-1px 1px 0 ${shadowColor}`,
    `1px 1px 0 ${shadowColor}`
  ].join(',')
  tooltip.style.fontWeight = '800'

  if (alternativeControls) {
    tooltip.textContent = [
      'To select a bigger element, press Shift + p or +.',
      'To select a smaller element, press Shift + o or -.',
      'To cancel, press Shift + x or Escape.',
      'To confirm, press Shift + s, Enter or click.'
    ].join('\n')
  } else {
    tooltip.textContent = [
      'To select a bigger element, press Shift + p.',
      'To select a smaller element, press Shift + o.',
      'To cancel, press Shift + x.',
      'To confirm, press Shift + s or click.'
    ].join('\n')
  }
  tooltip.style.zIndex = `${maxZIndex}`
  tooltip.style.pointerEvents = 'none'

  // FIXME: Code written at 2AM ahead.
  const blueprints = {
    hide: function () {
      tooltip.style.transform = 'translateX(-5%)'
      tooltip.style.opacity = '0'
      this.hide = function () {
        // no-op
      }
      this.show = blueprints.show.bind(this)
    },
    show: function () {
      tooltip.style.transform = 'translateX(0%)'
      tooltip.style.opacity = '1'
      this.show = function () {
        // no-op
      }
      this.hide = blueprints.hide.bind(this)
    }
  }

  return {
    hits: (viewportX, viewportY) => {
      const boundingRect = tooltip.getBoundingClientRect()
      const tooltipMargin = 50

      return boundingRect.width + tooltipMargin >= viewportX && boundingRect.height + tooltipMargin >= viewportY
    },
    hide: function () {
      blueprints.hide.bind(this)()
    },
    show: function () {
      blueprints.show.bind(this)()
    },
    append: (parent) => {
      parent.appendChild(tooltip)
      tooltip.offsetHeight // force reflow
    },
    remove: (): void => {
      tooltip.remove()
    }
  }
}
