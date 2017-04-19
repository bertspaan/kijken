import React from 'react'

import { Container } from './styles'

import { getPhotoUrl } from 'utils/utils'

export default function Download (props) {
  const year = props.year
  const name = props.name
  const hash = props.hash
  const photo = props.photo

  const originalUrl = getPhotoUrl(year, name, hash, photo)
  const largeUrl = getPhotoUrl(year, name, hash, photo, props.sizes[props.sizes.length - 1])
  const normalUrl = getPhotoUrl(year, name, hash, photo, props.sizes[props.sizes.length - 2])

  return (
    <Container>
      <span>Download ⟶</span>
      <ol>
        <li><a href={originalUrl}>Origineel</a></li>
        <li><a href={largeUrl}>Groot</a></li>
        <li><a href={normalUrl}>Normaal</a></li>
      </ol>
    </Container>
  )
}
