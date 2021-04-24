import { h } from 'preact'
import SelectSurface from './SelectSurface'
import Menu from './Menu'

// TODO: Make sure this tool works even when React or Preact is already used on a website.

const App = () => {
  return (
    <div>
      {/* TODO: Add <SelectSizeIndicator/> */}
      {/* TODO: Add <RefocusRequest/> */}
      {/* TODO: Add <CandidateHighlight/> */}
      {/* TODO: Add <Tooltips/> */}
      <Menu />
      <SelectSurface />
    </div>
  )
}

export default App
