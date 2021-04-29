const stopEvent = (event: Event) => {
  event.preventDefault()
  event.stopImmediatePropagation()
  event.stopPropagation()
}

export default stopEvent
