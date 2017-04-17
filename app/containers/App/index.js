import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import {
  loadPhotoList
} from '../App/actions'

import {
  selectLoading,
  selectPhotoList
} from 'containers/App/selectors'

import Header from 'components/Header'
import Loading from 'containers/Loading'

import { Container, Contents } from './styles'

export class App extends React.Component {

  componentWillMount () {
    if (this.props.loading || !this.props.photoList.length) {
      const year = this.props.params.year
      const name = this.props.params.name
      const hash = this.props.params.hash

      this.props.loadPhotoList(year, name, hash)
    }
  }

  componentWillReceiveProps (props) {
    const newRoute = this.props.params.year !== props.params.year ||
      this.props.params.name !== props.params.name ||
      this.props.params.hash !== props.params.hash

    if (newRoute) {
      this.props.loadPhotoList(props.params.year, props.params.name, props.params.hash)
    }
  }

  render () {
    let contents

    if (this.props.loading) {
      contents = (
        <Loading />
      )
    } else {
      contents = this.props.children
    }

    contents = this.props.children

    let back
    if (this.props.params.photo) {
      back = [
        this.props.params.year,
        this.props.params.name,
        this.props.params.hash
      ].join('/')
    }

    return (
      <Container>
        <Header back={back} />
        <Contents>
          {contents}
        </Contents>
      </Container>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadPhotoList: (year, name, hash) => {
      dispatch(loadPhotoList(year, name, hash))
    },
    dispatch
  }
}

export default connect(createSelector(
  selectLoading(),
  selectPhotoList(),
  (loading, photoList) => ({
    loading, photoList
  })
), mapDispatchToProps)(App)
