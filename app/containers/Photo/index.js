import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { findDOMNode } from 'react-dom'

import { createSelector } from 'reselect'

import { getSize, getPhotoUrl } from 'utils/utils'

import {
  selectSizes,
  selectPhotoMap
} from 'containers/App/selectors'

import Download from 'components/Download'

import { Loading, PhotoContainer, StyledPhoto } from './styles'

export class Photo extends React.Component {

  setLoading () {
    const node = findDOMNode(this.refs.photo)
    node.src = ''
  }

  getPreviousPhoto (photo) {
    const currentPhoto = this.props.photoMap[photo]
    if (currentPhoto) {
      return currentPhoto.previous
    }
  }

  getNextPhoto (photo) {
    const currentPhoto = this.props.photoMap[photo]
    if (currentPhoto) {
      return currentPhoto.next
    }
  }

  previousPhoto () {
    const previousPhoto = this.getPreviousPhoto(this.props.params.photo)
    if (!previousPhoto) {
      return
    }

    this.setLoading()

    const year = this.props.params.year
    const name = this.props.params.name
    const hash = this.props.params.hash
    this.props.changeRoute(`${year}/${name}/${hash}/${previousPhoto}`)
  }

  nextPhoto () {
    const nextPhoto = this.getNextPhoto(this.props.params.photo)
    if (!nextPhoto) {
      return
    }

    this.setLoading()

    const year = this.props.params.year
    const name = this.props.params.name
    const hash = this.props.params.hash
    this.props.changeRoute(`${year}/${name}/${hash}/${nextPhoto}`)
  }

  back () {
    const year = this.props.params.year
    const name = this.props.params.name
    const hash = this.props.params.hash
    this.props.changeRoute(`${year}/${name}/${hash}`)
  }

  componentDidMount () {
    this.boundKeyDown = this.keyDown.bind(this)
    window.addEventListener('keydown', this.boundKeyDown)
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.boundKeyDown)
  }

  render () {
    if (this.props.loading || !this.props.sizes.length) {
      return (
        <div>Loading</div>
      )
    }

    const year = this.props.params.year
    const name = this.props.params.name
    const hash = this.props.params.hash
    const photo = this.props.params.photo

    const size = getSize(this.props.sizes)

    const photoUrl = getPhotoUrl(year, name, hash, photo, size)

    const previousPhoto = this.getPreviousPhoto(photo)
    const previousPhotoUrl = previousPhoto && getPhotoUrl(year, name, hash, previousPhoto, size)

    const nextPhoto = this.getNextPhoto(this.props.params.photo)
    const nextPhotoUrl = nextPhoto && getPhotoUrl(year, name, hash, nextPhoto, size)

    return (
      <PhotoContainer>
        <Loading />
        <StyledPhoto hidden src={previousPhotoUrl} />
        <StyledPhoto ref='photo' src={photoUrl} />
        <StyledPhoto hidden src={nextPhotoUrl} />
        <Download year={year} name={name} hash={hash} photo={photo} sizes={this.props.sizes} />
      </PhotoContainer>
    )
  }

  keyDown (event) {
    if (event.keyCode === 37) {
      this.previousPhoto()
    } else if (event.keyCode === 39) {
      this.nextPhoto()
    } else if (event.keyCode === 27) {
      this.back()
    }
  }
}

function mapDispatchToProps (dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url))
  }
}

export default connect(createSelector(
  selectSizes(),
  selectPhotoMap(),
  (sizes, photoMap) => ({
    sizes, photoMap
  })
), mapDispatchToProps)(Photo)
