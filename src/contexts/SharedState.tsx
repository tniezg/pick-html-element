import { createContext, FunctionComponent, h } from 'preact'
import { useReducer } from 'preact/hooks'

const SharedState = createContext(null)

const initialState = {
  brushVisible: true,
  selectPreviewSelected: false,
  selectSurfaceElement: null,
  hoveredElement: null
}

const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'setBrushVisible':
      return { ...state, brushVisible: payload }
    case 'setSelectSurfaceElement':
      return { ...state, selectSurfaceElement: payload }
    case 'setHoveredElement':
      return { ...state, hoveredElement: payload }
    default:
      throw new Error(`Reducer action type not recognized ${type}.`)
  }
}

const SharedStateProvider: FunctionComponent<any> = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <SharedState.Provider value={[state, dispatch]}>{props.children}</SharedState.Provider>
}

export { SharedState, SharedStateProvider }
