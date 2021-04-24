import { h } from 'preact'
import styled from 'styled-components'
import { selectSurface } from '../utilities/images'
import maxZIndex from '../utilities/maxZIndex'

const StyledSelectSurface = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('${selectSurface}');
  background-size: 37px;
  z-index: ${maxZIndex - 1};
`

const SelectSurface = () => {
  return <StyledSelectSurface />
}

export default SelectSurface
