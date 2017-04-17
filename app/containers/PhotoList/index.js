import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { createSelector } from 'reselect'

import { getPhotoUrl } from 'utils/utils'

import {
  selectLoading,
  selectPhotoList,
  selectSizes
} from 'containers/App/selectors'

import { StyledPhotoList, StyledPhoto } from './styles'

export class PhotoList extends React.Component {

  render () {
    if (this.props.loading || !this.props.photoList.length) {
      return (
        <div>Loading</div>
      )
    }

    const smallestSize = this.props.sizes[0]

    const year = this.props.params.year
    const name = this.props.params.name
    const hash = this.props.params.hash

    return (
      <StyledPhotoList>
        {this.props.photoList.map((photo, index) => (
          <StyledPhoto key={index}>
            <Link to={`${year}/${name}/${hash}/${photo}`}>
              <img src={getPhotoUrl(year, name, hash, smallestSize, photo)} />
            </Link>
          </StyledPhoto>
        ))}
      </StyledPhotoList>
    )
  }
}

export default connect(createSelector(
  selectLoading(),
  selectPhotoList(),
  selectSizes(),
  (loading, photoList, sizes) => ({
    loading, photoList, sizes
  })
))(PhotoList)
