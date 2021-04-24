import styled, { css } from 'styled-components'

const mix = (styledComponent, ...mixins) => styled(styledComponent)`
  ${mixins}
`

const withFullWidthBlock = css`
  display: block;
  width: 100%;
`

export { mix, withFullWidthBlock }
