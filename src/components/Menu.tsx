import { FunctionComponent, h } from 'preact'
import tinycolor from 'tinycolor2'
import PropTypes from 'prop-types'
import { useContext, useState } from 'preact/hooks'
import styled, { css } from 'styled-components'
import { expandIcon, menuBorder, shrinkIcon } from '../utilities/images'
import { mix, withFullWidthBlock } from '../utilities/styledComponentsMixins'
import { Context } from './App'

const expandedMenuWidth = 186
const shrunkMenuWidth = 80
const buttonHeight = 30
const buttonBottomMargin = 12
const darkenHover = (sourceColor: string): string => tinycolor(sourceColor).darken(10).toString()
const darkenFocus = (sourceColor: string): string => tinycolor(sourceColor).darken(20).toString()
const resizeButtonColor = '#e3e3e3'

const StyledMenu = styled.div<any>`
  position: fixed;
  top: 30px;
  left: 30px;
  width: ${expandedMenuWidth}px;
  background: #fff;
  border-width: 1px;
  border-style: solid;
  border-image-source: url('${menuBorder}');
  border-image-slice: 32;
  border-image-width: 16px;
  border-image-repeat: stretch;
  border-image-outset: 16px;
  z-index: ${({ zIndex }) => zIndex};
  overflow: hidden;
  box-sizing: content-box;
  ${({ expanded }) =>
    expanded
      ? css`
          transition: 200ms height 200ms, 200ms width 0ms;
          height: 240px;
          width: ${expandedMenuWidth}px;
        `
      : css`
          transition: 200ms height 0ms, 200ms width 200ms;
          height: ${buttonHeight}px;
          width: ${shrunkMenuWidth}px;
        `};
`

StyledMenu.propTypes = {
  expanded: PropTypes.bool.isRequired
}

const StyledContent = styled.div<{ expanded: boolean }>`
  transition: 400ms opacity;
  box-sizing: border-box;
  padding: 6px 14px;
  overflow: hidden;
  width: ${expandedMenuWidth}px;
  ${({ expanded }) =>
    expanded
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `};
`

StyledContent.propTypes = {
  expanded: PropTypes.bool.isRequired
}

const StyledHeading = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.2;
  margin-bottom: 14px;
  font-family: Arial;
`

const StyledButton = styled.button`
  border-radius: 4px;
  background: #e8e8e8;
  box-sizing: border-box;
  padding: 0 15px;
  margin: 0;
  height: ${buttonHeight}px;
  border: 1px solid transparent;
  text-align: left;
  font-size: 15px;
  font-family: Arial;
  line-height: 1.5;
  transition: 400ms all;

  &:focus {
    outline: none;
  }
`

const StyledPrimaryButton = styled(StyledButton)`
  color: #fff;
  background: ${(props) => props.theme.primaryColor};

  &:hover {
    background: ${(props) => darkenHover(props.theme.primaryColor)};
  }

  &:focus {
    background: ${(props) => darkenFocus(props.theme.primaryColor)};
  }
`

const StyledSecondaryButton = styled(StyledButton)`
  color: #3c3c3c;
  border-color: ${(props) => props.theme.primaryColor};

  &:hover {
    border-color: ${(props) => darkenHover(props.theme.primaryColor)};
  }

  &:focus {
    border-color: ${(props) => darkenFocus(props.theme.primaryColor)};
  }
`

const StyledResizeButton = styled.button<{ expanded: boolean }>`
  height: ${buttonHeight}px;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid ${resizeButtonColor};
  margin: 0;
  padding: 0;
  background: #fff url('${({ expanded }) => (expanded ? shrinkIcon : expandIcon)}') center no-repeat;
  transition: 400ms border-color;

  &:hover {
    border-color: ${darkenHover(resizeButtonColor)};
  }

  &:focus {
    outline: none;
    border-color: ${darkenFocus(resizeButtonColor)};
  }
`

StyledResizeButton.propTypes = {
  expanded: PropTypes.bool.isRequired
}

const StyledMenuSecondaryButton = mix(
  StyledSecondaryButton,
  withFullWidthBlock,
  css`
    margin-bottom: ${buttonBottomMargin}px;
  `
)
const StyledMenuPrimaryButton = mix(
  StyledPrimaryButton,
  withFullWidthBlock,
  css`
    margin-bottom: ${buttonBottomMargin}px;
  `
)

const StyledMenuResizeButton = mix(
  StyledResizeButton,
  withFullWidthBlock,
  css`
    position: absolute;
    bottom: 0;
  `
)

const Menu: FunctionComponent<any> = (props) => {
  const [expanded, setExpanded] = useState(true)
  const [_state, dispatch] = useContext(Context)

  const onMouseEnter = (_event: MouseEvent) => void dispatch({ type: 'setBrushVisible', payload: false })
  const onMouseLeave = (_event: MouseEvent) => void dispatch({ type: 'setBrushVisible', payload: true })

  return (
    <StyledMenu expanded={expanded} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} zIndex={props.zIndex}>
      <StyledContent expanded={expanded}>
        <StyledHeading role="heading" aria-level={6}>
          You're selecting elements on the website
        </StyledHeading>
        <StyledMenuPrimaryButton type="button">Confirm</StyledMenuPrimaryButton>
        <StyledMenuSecondaryButton type="button">Deselect</StyledMenuSecondaryButton>
        <StyledMenuSecondaryButton type="button">Cancel</StyledMenuSecondaryButton>
      </StyledContent>
      <StyledMenuResizeButton
        expanded={expanded}
        onClick={() => setExpanded(!expanded)}
        type="button"
        aria-label="shrink or expand"
      ></StyledMenuResizeButton>
    </StyledMenu>
  )
}

export default Menu
