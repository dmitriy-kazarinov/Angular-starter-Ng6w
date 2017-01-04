import angular from 'angular';
import DateComponent from './date.component';

const DateModule = angular
  .module('components.date', [])
  .component('date', DateComponent);

export default DateModule;
