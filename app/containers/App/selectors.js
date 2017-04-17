import { createSelector } from 'reselect'

const selectGlobal = () => (state) => state.get('global')

const selectLoading = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('loading')
)

const selectError = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('error')
)

const selectConfig = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('config').toJS()
)

const selectPhotoList = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.getIn(['photoList', 'photos']).toJS()
)

const selectPhotoMap = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('photoMap').toJS()
)

const selectSizes = () => createSelector(
  selectGlobal(),
  (globalState) => {
    const sizes = globalState.getIn(['photoList', 'sizes']).toJS()
    const fixSize = (size) => size.map((num) => `${num}`.trim()).map((str) => parseInt(str))
    return sizes.map(fixSize)
  }
)

const selectLocationState = () => {
  let prevRoutingState
  let prevRoutingStateJS

  return (state) => {
    const routingState = state.get('route') // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState
      prevRoutingStateJS = routingState.toJS()
    }

    return prevRoutingStateJS
  }
}

export {
  selectGlobal,
  selectConfig,
  selectSizes,
  selectPhotoList,
  selectPhotoMap,
  selectLoading,
  selectError,
  selectLocationState
}
