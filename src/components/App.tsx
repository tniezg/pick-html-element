import { createContext, FunctionComponent, h } from 'preact'
import { ThemeProvider } from 'styled-components'
import defaultTheme from '../utilities/defaultTheme'
import SelectSurface from './SelectSurface'
import Menu from './Menu'
import Brush from './Brush'
import { useReducer } from 'preact/hooks'

// TODO: Make sure this tool works even when React or Preact is already used on a website.

export const Context = createContext(null)

const initialState = {
  brushVisible: true
}

const reducer = (_state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'setBrushVisible':
      return { brushVisible: payload }
    default:
      throw new Error(`Reducer action type not recognized ${type}.`)
  }
}

const App: FunctionComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ThemeProvider theme={defaultTheme}>
      <Context.Provider value={[state, dispatch]}>
        <div>
          {/* TODO: Add <RefocusRequest/> */}
          {/* TODO: Add <CandidateHighlight/> */}
          {/* TODO: Add <Tooltips/> */}
          <Brush />
          <Menu />
          <SelectSurface />
        </div>
      </Context.Provider>
    </ThemeProvider>
  )
}

export default App
