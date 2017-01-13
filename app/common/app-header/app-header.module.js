import angular from 'angular';
import AppHeaderComponent from './app-header.component';

const AppHeaderModule = angular
  .module('common.appHeader', [])
  .component('appHeader', AppHeaderComponent);

export default AppHeaderModule;
