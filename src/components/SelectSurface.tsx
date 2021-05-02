import { FunctionComponent, h } from 'preact'
import { useContext, useCallback } from 'preact/hooks'
import styled from 'styled-components'
import { SharedState } from '../contexts/SharedState'
import { selectSurface } from '../utilities/images'

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
  const [_state, dispatch] = useContext(SharedState)
  const selectSurfaceRef = useCallback((selectSurfaceElement) => {
    dispatch({ type: 'setSelectSurfaceElement', payload: selectSurfaceElement })
  }, [])

  return <StyledSelectSurface ref={selectSurfaceRef} zIndex={props.zIndex} />
}

export default SelectSurface
