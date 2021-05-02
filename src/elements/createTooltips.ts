export const createTooltips = () => {
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

  return {
    hits: (viewportX, viewportY) => {
      const boundingRect = tooltip.getBoundingClientRect()
      const tooltipMargin = 50

      return boundingRect.width + tooltipMargin >= viewportX && boundingRect.height + tooltipMargin >= viewportY
    }
  }
}
