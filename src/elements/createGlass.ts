// import { CreateGlassReturn } from '../types'

// export const createGlass = (): CreateGlassReturn => {
//   const glass = document.createElement('div')

//   return {
//     append: (parent) => {
//       parent.appendChild(glass)
//       // Force reflow with glass.offsetHeight.
//       // Reflow is important to prevent focusRequest from showing up after focus
//       // switches from the extension's popup to page content.
//       glass.offsetHeight
//     },
//     remove: (): void => {
//       glass.remove()
//     }
//   }
// }
