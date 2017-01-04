function AppRouter (
  $stateProvider,
  $urlRouterProvider,
  $locationProvider
) {
  'ngInject';

  // TODO: create backend side for it
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('/', {
    url: '/',
    template: '<h3>Home page!</h3>'
  })
  .state('hello', {
    url: '/hello',
    template: '<h3>Hello page!</h3>'
  })
  .state('about', {
    url: '/about',
    template: '<h3>About page!</h3>'
  });

}

export default AppRouter;
