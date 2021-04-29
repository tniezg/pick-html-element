import { FunctionComponent, h } from 'preact'
import { useContext, useEffect, useState } from 'preact/hooks'
import styled, { css, keyframes } from 'styled-components'
import { brushMagnifyingGlass } from '../utilities/images'
import maxZIndex from '../utilities/maxZIndex'
import stopEvent from '../utilities/stopEvent'
import { Context } from './App'

const getBrushRadiusFromMultiplier = (baseBrushRadius: number, radiusMultiplier: number): number =>
  Math.round(baseBrushRadius * (1 / Math.pow(radiusMultiplier, 2)))

const baseBrushRadius = 50
const initialBrushRadiusMultiplier = 1
const initialRadius = getBrushRadiusFromMultiplier(baseBrushRadius, initialBrushRadiusMultiplier)

const brushRadiusMultiplierStep = 0.2

// TODO: move to interfaces folder
export enum ActionType {
  BrushIncrease,
  BrushDecrease
}

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
    left: -2px;
    top: -2px;
    border-width: 2px;
    opacity: 1;
  }

  30% {
    left: -20px;
    top: -20px;
    border-width: 20px;
    opacity: 0;
  }

  100% {
    left: -20px;
    top: -20px;
    border-width: 20px;
    opacity: 0;
  }
`

const StyledBrush = styled.div<{ radius: number; visible: boolean }>`
  background: #000 url('${brushMagnifyingGlass}') center no-repeat;
  background-size: ${(props) => Math.min(props.radius * 2 * 0.4, 47)}px;
  opacity: ${({ visible }) => (visible ? 0.5 : 0)};
  border-radius: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  transition: 200ms width, 200ms height, 200ms background-size, 200ms opacity;
  pointer-events: none;
  z-index: ${maxZIndex};
  ${({ radius }) => css`
    width: ${radius * 2}px;
    height: ${radius * 2}px;
  `}

  &:before {
    content: '';
    position: relative;
    display: block;
    box-sizing: content-box;
    left: 0;
    top: 0;
    border-radius: 50%;
    border: 0px solid ${({ theme }) => theme.primaryColor};
    animation: 2s ${pulsate} ease-out infinite;
    transition: 200ms width, 200ms height;
    ${({ radius }) => css`
      width: ${radius * 2}px;
      height: ${radius * 2}px;
    `}
  }
`

// TODO: Hide Brush when cursor is over Menu. Use singleton state to track mouseover Menu.

const Brush: FunctionComponent = () => {
  const [brushRadiusMultiplier, setBrushRadiusMultiplier] = useState(initialBrushRadiusMultiplier)
  const [radius, setRadius] = useState(initialRadius)
  const [position, setPosition] = useState(null)
  const [state, dispatch] = useContext(Context)
  const visible = state.brushVisible && position !== null
  const style = position === null ? null : { left: `${position.x}px`, top: `${position.y}px` }

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
    const x = event.clientX
    const y = event.clientY

    setPosition({ x, y })
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

  return <StyledBrush radius={radius} visible={visible} style={style} />
}

export default Brush
