import { FunctionComponent, h } from 'preact'
import { useContext, useEffect, useMemo, useState } from 'preact/hooks'
import styled, { css, keyframes } from 'styled-components'
import { ActionType } from '../interfaces'
import { brushMagnifyingGlass } from '../utilities/images'
import stopEvent from '../utilities/stopEvent'
import { SharedState } from '../contexts/SharedState'
import useHoveredElement from '../hooks/useHoveredElement'

const getBrushRadiusFromMultiplier = (baseBrushRadius: number, radiusMultiplier: number): number =>
  Math.round(baseBrushRadius * (1 / Math.pow(radiusMultiplier, 2)))

const baseBrushRadius = 50
const initialBrushRadiusMultiplier = 1
const initialRadius = getBrushRadiusFromMultiplier(baseBrushRadius, initialBrushRadiusMultiplier)

const brushRadiusMultiplierStep = 0.2

const pulseWidth = 8

const recognizeKeyboardEvent = (event: KeyboardEvent): ActionType => {
  const keyMapping = {
    '=': ActionType.BrushIncrease,
    '+': ActionType.BrushIncrease,
    '-': ActionType.BrushDecrease,
    '_': ActionType.BrushDecrease
  }

  return keyMapping[event.key]
}

const pulsate = keyframes`
  0% {
    opacity: 0;
    transform: scale(1);
  }

  15% {
    opacity: 0.5;
  }

  30% {
    opacity: 0;
    transform: scale(1.2);
  }

  100% {
    opacity: 0;
    transform: scale(1.2);
  }
`

const StyledBrush = styled.div<{ radius: number; visible: boolean; zIndex: number }>`
  background: #000 url('${brushMagnifyingGlass}') center no-repeat;
  background-size: ${(props) => Math.min(props.radius * 2 * 0.4, 47)}px;
  opacity: ${({ visible }) => (visible ? 0.5 : 0)};
  border-radius: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  transition: 200ms width, 200ms height, 200ms background-size, 200ms opacity;
  pointer-events: none;
  z-index: ${({ zIndex }) => zIndex};
  ${({ radius }) => css`
    width: ${radius * 2}px;
    height: ${radius * 2}px;
  `}

  &:before {
    content: '';
    position: relative;
    display: block;
    box-sizing: content-box;
    left: -${pulseWidth}px;
    top: -${pulseWidth}px;
    border-radius: 50%;
    border: ${pulseWidth}px solid #000;
    opacity: 1;
    animation: 2s ${pulsate} ease-out infinite;
    width: 100%;
    height: 100%;
  }
`

const Brush: FunctionComponent<any> = (props) => {
  const [brushRadiusMultiplier, setBrushRadiusMultiplier] = useState(initialBrushRadiusMultiplier)
  const [radius, setRadius] = useState(initialRadius)
  const [position, setPosition] = useState(null)
  const [rectangle, setRectangle] = useState(null)
  const [state, dispatch] = useContext(SharedState)
  const visible = state.brushVisible && position !== null
  const style = position === null ? null : { left: `${position.viewportX}px`, top: `${position.viewportY}px` }

  const increaseRadius = () => {
    const newBrushRadiusMultiplier = brushRadiusMultiplier - brushRadiusMultiplierStep

    if (newBrushRadiusMultiplier > 0.001) {
      const newBrushRadius = getBrushRadiusFromMultiplier(baseBrushRadius, newBrushRadiusMultiplier)

      setBrushRadiusMultiplier(newBrushRadiusMultiplier)
      setRadius(newBrushRadius)
    }
  }

  const decreaseRadius = () => {
    const newBrushRadiusMultiplier = brushRadiusMultiplier + brushRadiusMultiplierStep

    if (newBrushRadiusMultiplier < 3) {
      const newBrushRadius = getBrushRadiusFromMultiplier(baseBrushRadius, newBrushRadiusMultiplier)

      setBrushRadiusMultiplier(newBrushRadiusMultiplier)
      setRadius(newBrushRadius)
    }
  }

  const onKeydown = (event: KeyboardEvent) => {
    const actionType = recognizeKeyboardEvent(event)

    if (actionType === ActionType.BrushIncrease) {
      increaseRadius()
      stopEvent(event)
    } else if (actionType === ActionType.BrushDecrease) {
      decreaseRadius()
      stopEvent(event)
    }
  }

  const onMouseMove = (event: MouseEvent) => {
    const viewportX = event.clientX
    const viewportY = event.clientY

    setPosition({ viewportX, viewportY })
    stopEvent(event)
  }

  useEffect(() => {
    window.addEventListener('keydown', onKeydown, true)
    window.addEventListener('mousemove', onMouseMove, true)

    return () => {
      window.removeEventListener('keydown', onKeydown, true)
      window.removeEventListener('mousemove', onMouseMove, true)
    }
  }, [brushRadiusMultiplier])

  useEffect(() => {
    if (position !== null) {
      setRectangle({
        viewportX: position.viewportX - radius,
        viewportY: position.viewportY - radius,
        width: radius * 2,
        height: radius * 2
      })
    } else {
      setRectangle(null)
    }
  }, [position, radius])

  const hoveredElementIgnoredElements = useMemo(() => {
    return state.selectSurfaceElement === null ? [] : [state.selectSurfaceElement]
  }, [state.selectSurfaceElement])

  const hoveredElement = useHoveredElement(rectangle, hoveredElementIgnoredElements)

  useEffect(() => void dispatch({ type: 'setHoveredElement', payload: hoveredElement }), [hoveredElement])

  return <StyledBrush radius={radius} visible={visible} style={style} zIndex={props.zIndex} />
}

export default Brush
