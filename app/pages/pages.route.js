function routeConf($stateProvider) {
  'ngInject';

  $stateProvider.state({
    name: 'pages',
    abstract: true,
    views: {
      'pages@': {
        pages: 'pages'
      }
    }
  });
}

export default routeConf;
