import { FunctionComponent, h } from 'preact'
import { useContext } from 'preact/hooks'
import styled, { css } from 'styled-components'
import { selectedIcon, selectPreview, selectPreviewBorder } from '../utilities/images'
import { SharedState } from '../contexts/SharedState'

const StyledSelectPreview = styled.div<{
  zIndex: number
  rectangle: { x: number; y: number; width: number; height: number }
}>`
  position: fixed;
  top: 300px;
  left: 300px;
  width: 300px;
  height: 300px;
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

  return (
    <StyledSelectPreview zIndex={props.zIndex} rectangle={state.selectPreviewRectangle}>
      <StyledSelectedIcon visible={state.selectPreviewSelected} />
    </StyledSelectPreview>
  )
}

export default SelectPreview
