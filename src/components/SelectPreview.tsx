import { FunctionComponent, h } from 'preact'
import { useContext } from 'preact/hooks'
import styled, { css } from 'styled-components'
import { selectedIcon, selectPreview, selectPreviewBorder } from '../utilities/images'
import { SharedState } from '../contexts/SharedState'

const StyledSelectPreview = styled.div<{
  zIndex: number
  style: any
}>`
  position: fixed;
  background: url('${selectPreview}');
  background-size: 37px 37px;
  background-attachment: fixed;
  z-index: ${({ zIndex }) => zIndex};
  border-width: 1px;
  border-style: solid;
  border-image-source: url('${selectPreviewBorder}');
  border-image-slice: 20;
  border-image-width: 10px;
  border-image-repeat: stretch;
  border-image-outset: 10px;
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
  const hoveredElementRectangle = state.hoveredElement === null ? null : state.hoveredElement.getBoundingClientRect()
  const selectPreviewStyle =
    hoveredElementRectangle === null
      ? null
      : {
          left: `${hoveredElementRectangle.x}px`,
          top: `${hoveredElementRectangle.y}px`,
          width: `${hoveredElementRectangle.width}px`,
          height: `${hoveredElementRectangle.height}px`
        }

  return (
    <StyledSelectPreview zIndex={props.zIndex} style={selectPreviewStyle}>
      <StyledSelectedIcon visible={state.selectPreviewSelected} />
    </StyledSelectPreview>
  )
}

export default SelectPreview
