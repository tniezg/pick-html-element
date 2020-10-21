// Source: https://stackoverflow.com/questions/21646738/convert-hex-to-rgba

const hexToRgbA = (hex: string, alpha: number): string => {
  let c

  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')

    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }

    c = '0x' + c.join('')

    return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + `,${alpha})`
  }

  throw new Error('Bad Hex')
}

export { hexToRgbA }
