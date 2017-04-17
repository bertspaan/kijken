/* global __CONFIG__ */

function getContainerSize () {
  let devicePixelRatio = window.devicePixelRatio
  if (!devicePixelRatio) {
    devicePixelRatio = 1
  }
  return [
    window.innerWidth * devicePixelRatio,
    window.innerHeight * devicePixelRatio
  ]
}

export function getSize (sizes) {
  const containerSize = getContainerSize()

  let size = sizes[sizes.length - 1]
  const maxResize = 1.1

  const cW = containerSize[0]
  const cH = containerSize[1]
  for (let index = 0; index < sizes.length; index++) {
    const sW = sizes[index][0]
    const sH = sizes[index][1]

    if (sW * maxResize >= cW && sH * maxResize >= cH) {
      size = sizes[index]
      break
    }
  }

  return size
}

export function getPhotoUrl (year, name, hash, size, filename) {
  const baseUrl = __CONFIG__.s3.baseUrl
  const url = `${baseUrl}${year}/${name}/${hash}/sizes/${size.join('x')}/${filename}`
  return url
}

