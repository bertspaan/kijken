import {
  LOAD_PHOTO_LIST,
  LOAD_PHOTO_LIST_SUCCESS,
  LOAD_PHOTO_LIST_ERROR
} from './constants'

export function loadPhotoList (year, name, hash) {
  return {
    type: LOAD_PHOTO_LIST,
    year,
    name,
    hash
  }
}

export function photoListLoaded (photoList) {
  return {
    type: LOAD_PHOTO_LIST_SUCCESS,
    photoList
  }
}

export function photoListLoadingError (error) {
  return {
    type: LOAD_PHOTO_LIST_ERROR,
    error
  }
}

