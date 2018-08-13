const CourseRoute = { 

  path: '/child',
  getChildRoute(location,callback) { 
    require.ensure([],function (require) {
      callback(null, [
        require('../components/example/children.js')
      ])
    })
  },
  getIndexRoute(location, callback) { 
    require.ensuer([],function (require) {
      callback(null, [
        '../app.js'
      ])
    })
  },
  getComponents(location, callback) { 
    require.ensuer([],function (require) {
      callback(null,require('../components/example/index.js'))
    })
  }
}

export default CourseRoute;