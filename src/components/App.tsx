import { FunctionComponent, h } from 'preact'
import { ThemeProvider } from 'styled-components'
import SelectSurface from './SelectSurface'
import Menu from './Menu'
import Brush from './Brush'
import SelectPreview from './SelectPreview'
import maxZIndex from '../utilities/maxZIndex'
import { SharedStateProvider } from '../contexts/SharedState'

// TODO: Make sure this tool works even when React or Preact is already used on a website.

const App: FunctionComponent<any> = (props) => {
  let zIndex = maxZIndex

  return (
    <ThemeProvider theme={props.theme}>
      <SharedStateProvider>
        <div>
          {/* TODO: Add <RefocusRequest/> */}
          {/* TODO: Add <Tooltips/> */}
          <Brush zIndex={zIndex} />
          <Menu zIndex={zIndex - 1} />
          <SelectPreview zIndex={zIndex - 2} />
          <SelectSurface zIndex={zIndex - 3} />
        </div>
      </SharedStateProvider>
    </ThemeProvider>
  )
}

export default App
