import angular from 'angular';
import DateModule from './date/date.module';

const dependencies = [
  DateModule.name
];

const ComponentsModule = angular
  .module('components', dependencies);

export default ComponentsModule;
