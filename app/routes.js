const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err) // eslint-disable-line no-console
}

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default)
}

export default function createRoutes (store) {
  return [
    {
      path: '/:year/:name/:hash/:photo',
      name: 'photo',
      getComponent (nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Photo')
        ])

        const renderRoute = loadModule(cb)

        importModules.then(([component]) => {
          renderRoute(component)
        })

        importModules.catch(errorLoading)
      }
    }, {
      path: '/:year/:name/:hash',
      name: 'photolist',
      getComponent (nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/PhotoList')
        ])

        const renderRoute = loadModule(cb)

        importModules.then(([component]) => {
          renderRoute(component)
        })

        importModules.catch(errorLoading)
      }
    }, {
      path: '/',
      name: 'homepage',
      getComponent (nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage')
        ])

        const renderRoute = loadModule(cb)

        importModules.then(([component]) => {
          renderRoute(component)
        })

        importModules.catch(errorLoading)
      }
    }, {
      path: '*',
      name: 'notfound',
      getComponent (nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading)
      }
    }
  ]
}
