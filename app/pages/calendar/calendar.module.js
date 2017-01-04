import angular from 'angular';
import routeConf from './calendar.route';

const CalendarModule = angular
  .module('pages.calendar', [])
  .config(routeConf);

export default CalendarModule;
