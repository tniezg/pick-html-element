import { FunctionComponent, h } from 'preact'
import styled from 'styled-components'
import { selectSurface } from '../utilities/images'
import maxZIndex from '../utilities/maxZIndex'

const StyledSelectSurface = styled.div<{ zIndex: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('${selectSurface}');
  background-size: 37px 37px;
  z-index: ${({ zIndex }) => zIndex};
  cursor: none;
`

const SelectSurface: FunctionComponent<any> = (props) => {
  return <StyledSelectSurface zIndex={props.zIndex} />
}

export default SelectSurface
