import { h } from 'preact'
import styled from 'styled-components'
import maxZIndex from '../utilities/maxZIndex'

const StyledSelectSurface = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(100, 100, 100, 0.4);
  z-index: ${maxZIndex - 1};
`
// TODO: Add small plus pattern to the background

const SelectSurface = () => {
  return <StyledSelectSurface>Click on this surface to select an element on the page</StyledSelectSurface>
}

export default SelectSurface
