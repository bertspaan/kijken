import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import {
  LOAD_PHOTO_LIST
} from 'containers/App/constants'

import {
  photoListLoaded,
  photoListLoadingError
} from 'containers/App/actions'

import request from 'utils/request'

const baseUrl = 'http://s3.bertspaan.nl.s3.amazonaws.com/photos/'
const filename = 'photos.json'

function* loadPhotoList (action) {
  const url = `${baseUrl}${action.year}/${action.name}/${action.hash}/${filename}`

  try {
    const data = yield call(request, url)
    yield put(photoListLoaded(data))
  } catch (err) {
    yield put(photoListLoadingError(action.file, err))
  }
}

function* loadPhotoListSaga () {
  yield * takeEvery(LOAD_PHOTO_LIST, loadPhotoList)
}

export default [
  loadPhotoListSaga
]
