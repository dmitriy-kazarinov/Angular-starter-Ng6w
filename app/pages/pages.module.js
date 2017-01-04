import angular from 'angular';
import routeConf from './pages.route';
import CalendarModule from './calendar/calendar.module';

const dependencies = [
  CalendarModule.name
];

const PagessModule = angular
  .module('pages', dependencies)
  .config(routeConf);

export default PagessModule;
