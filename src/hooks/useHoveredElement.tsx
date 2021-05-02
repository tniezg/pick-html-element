import { useCallback, useContext, useEffect } from 'preact/hooks'
import getCssSelector from 'css-selector-generator'
import { debounce } from 'debounce'
import { ThemeContext } from 'styled-components'

const useHoveredElement = (
  rectangle: { viewportX: number; viewportY: number; width: number; height: number } = null,
  ignoredElements: Element[]
) => {
  const theme = useContext(ThemeContext)

  const findElementFromRectangle = (rectangle, ignoredElements) => {
    const elements = document.elementsFromPoint(rectangle.viewportX, rectangle.viewportY)

    const bestElementToRectangleFit =
      elements.find((candidateElement) => {
        const candidateElementRectangle = candidateElement.getBoundingClientRect()

        // Only check right and bottom edges. Left and top edges are already checked by elementsFromPoint earlier.
        return (
          !ignoredElements.includes(candidateElement) &&
          candidateElementRectangle.x + candidateElementRectangle.width >= rectangle.viewportX + rectangle.width &&
          candidateElementRectangle.y + candidateElementRectangle.height >= rectangle.viewportY + rectangle.height
        )
      }) || document.body

    return bestElementToRectangleFit
  }

  const updatePickElement = (rectangle, ignoredElements) => {
    // updatePickElement and ignoredElements are never recreated due to using `debounce`.
    // So, provide them as arguments to the function instead.

    //   const pageX = event.pageX
    //   const pageY = event.pageY

    if (rectangle === null) {
      // TODO: Handle null.
      return
    }

    // const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
    // const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    // TODO: Remove below
    // const pageX = 0
    // const pageY = 0
    // const viewportX = rectangle.viewportX
    // const viewportY = rectangle.viewportY

    const element = findElementFromRectangle(rectangle, ignoredElements)
  }

  const debouncedUpdatePickElement = useCallback(debounce(updatePickElement, theme.selectionUpdateDelay), [])

  useEffect(() => void debouncedUpdatePickElement(rectangle, ignoredElements), [rectangle, ignoredElements])
}

export default useHoveredElement
