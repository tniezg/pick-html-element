import { useCallback, useContext, useEffect, useState } from 'preact/hooks'
import getCssSelector from 'css-selector-generator'
import { debounce } from 'debounce'
import { ThemeContext } from 'styled-components'

const useHoveredElement = (
  rectangle: { viewportX: number; viewportY: number; width: number; height: number } = null,
  ignoredElements: Element[]
) => {
  const theme = useContext(ThemeContext)
  const [hoveredElement, setHoveredElement] = useState(null)

  const findElementFromRectangle = (rectangle, ignoredElements) => {
    const elements = document.elementsFromPoint(rectangle.viewportX, rectangle.viewportY)

    const bestElementToRectangleFit = elements.reduce(
      (
        {
          element: bestElementToRectangleFitCandidate,
          area: bestElementToRectangleFitCandidateArea
        }: { element: Element; area: number | null },
        candidateElement
      ) => {
        const candidateElementRectangle = candidateElement.getBoundingClientRect()
        // elementsFromPoint sometimes returns inaccurate results.
        // Make sure rectangle fully overlaps candidateElement.

        if (
          !(
            !ignoredElements.includes(candidateElement) &&
            candidateElementRectangle.x <= rectangle.viewportX &&
            candidateElementRectangle.y <= rectangle.viewportY &&
            candidateElementRectangle.x + candidateElementRectangle.width >= rectangle.viewportX + rectangle.width &&
            candidateElementRectangle.y + candidateElementRectangle.height >= rectangle.viewportY + rectangle.height
          )
        ) {
          return { element: bestElementToRectangleFitCandidate, area: bestElementToRectangleFitCandidateArea }
        }

        // The order of elements returned by elementsFromPoint may not be the best.
        // To find the best element, calculate the area of all elements returned by
        // elementsFromPoint which also cover the rectangle.

        const candidateElementArea = candidateElementRectangle.width * candidateElementRectangle.height

        if (
          bestElementToRectangleFitCandidateArea === null ||
          bestElementToRectangleFitCandidateArea > candidateElementArea
        ) {
          return { element: candidateElement, area: candidateElementArea }
        }

        return { element: bestElementToRectangleFitCandidate, area: bestElementToRectangleFitCandidateArea }
      },
      { element: document.body, area: null }
    ).element

    return bestElementToRectangleFit
  }

  const updatePickElement = (rectangle, ignoredElements) => {
    // updatePickElement and ignoredElements are never recreated due to using `debounce`.
    // So, provide them as arguments to the function instead.

    if (rectangle === null) {
      setHoveredElement(null)
      return
    }

    setHoveredElement(findElementFromRectangle(rectangle, ignoredElements))
  }

  const debouncedUpdatePickElement = useCallback(debounce(updatePickElement, theme.selectionUpdateDelay), [])

  useEffect(() => void debouncedUpdatePickElement(rectangle, ignoredElements), [rectangle, ignoredElements])

  return hoveredElement
}

export default useHoveredElement
