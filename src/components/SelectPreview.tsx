import { FunctionComponent, h } from 'preact'
import { useContext, useEffect, useMemo, useRef, useState } from 'preact/hooks'
import styled, { css } from 'styled-components'
import { selectedIcon, selectPreview, selectPreviewBorder } from '../utilities/images'
import { SharedState } from '../contexts/SharedState'

const borderWidth = 10

const isLargeSelection = (rectangle): boolean => {
  return rectangle.width > 2000 || rectangle.height > 2000
}

const StyledSelectPreview = styled.div<{
  zIndex: number
}>`
  position: fixed;
  background: url('${selectPreview}');
  background-size: 37px 37px;
  background-attachment: fixed;
  z-index: ${({ zIndex }) => zIndex};
  border-width: 1px;
  border-style: solid;
  border-image-source: url('${selectPreviewBorder}');
  border-image-slice: ${borderWidth * 2};
  border-image-width: ${borderWidth}px;
  border-image-repeat: stretch;
  border-image-outset: 0;
  pointer-events: none;
`

const StyledSelectedIcon = styled.div<{ visible: boolean }>`
  width: 100%;
  height: 100%;
  background: url('${selectedIcon}') no-repeat center;
  ${({ visible }) =>
    visible
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `};
`

const SelectPreview: FunctionComponent<any> = (props) => {
  const [state, _dispatch] = useContext(SharedState)
  const selectPreviewRef = useRef<HTMLDivElement>(null)
  const hoveredElementRectangle = useMemo(
    () => (state.hoveredElement === null ? null : state.hoveredElement.getBoundingClientRect()),
    [state.hoveredElement]
  )

  useEffect(() => {
    selectPreviewRef.current.style.opacity = '0'
    selectPreviewRef.current.style.transition = 'none'

    if (hoveredElementRectangle !== null) {
      selectPreviewRef.current.style.transform = isLargeSelection(hoveredElementRectangle) ? 'scale(1)' : 'scale(1.1)'

      selectPreviewRef.current.offsetHeight

      selectPreviewRef.current.style.transition = '200ms opacity, 200ms transform'
      selectPreviewRef.current.style.transform = 'scale(1)'
      selectPreviewRef.current.style.opacity = '1'

      selectPreviewRef.current.style.left = `${hoveredElementRectangle.x}px`
      selectPreviewRef.current.style.top = `${hoveredElementRectangle.y}px`
      selectPreviewRef.current.style.width = `${hoveredElementRectangle.width}px`
      selectPreviewRef.current.style.height = `${hoveredElementRectangle.height}px`
    }
  }, [hoveredElementRectangle])

  return (
    <StyledSelectPreview zIndex={props.zIndex} ref={selectPreviewRef}>
      <StyledSelectedIcon visible={state.selectPreviewSelected} />
    </StyledSelectPreview>
  )
}

export default SelectPreview
