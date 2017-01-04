import controller from './calendar.controller';
import templateUrl from './calendar.html';

function routeConf($stateProvider) {
  'ngInject';

  $stateProvider.state({
    name: 'calendar',
    url: '/calendar',
    templateUrl,
    controller,
    controllerAs: 'vm'
  });

}

export default routeConf;
