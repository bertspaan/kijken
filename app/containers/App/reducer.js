import {
  LOAD_PHOTO_LIST,
  LOAD_PHOTO_LIST_SUCCESS,
  LOAD_PHOTO_LIST_ERROR
} from './constants'

import { fromJS } from 'immutable'

const initialState = fromJS({
  photoList: fromJS({
    photos: {},
    sizes: []
  }),
  photoMap: fromJS({}),
  loading: true,
  error: null,
  config: fromJS({})
})

function appReducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_PHOTO_LIST:
      return state
        .set('loading', true)
        .set('photoList', fromJS({
          photos: {},
          sizes: []
        }))
    case LOAD_PHOTO_LIST_SUCCESS:
      const photos = action.photoList.photos
      let photoMap = {}
      photos.forEach((photo, index) => {
        photoMap[photo] = {
          index,
          previous: index > 0 ? photos[index - 1] : undefined,
          next: index < photos.length - 1 ? photos[index + 1] : undefined
        }
      })
      return state
        .set('loading', false)
        .set('photoList', fromJS(action.photoList))
        .set('photoMap', fromJS(photoMap))
    case LOAD_PHOTO_LIST_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error)
    default:
      return state
  }
}

export default appReducer
