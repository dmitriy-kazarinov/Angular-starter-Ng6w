import angular from 'angular';
import AppFooterComponent from './app-footer.component';

const AppFooterModule = angular
  .module('common.appFooter', [])
  .component('appFooter', AppFooterComponent);

export default AppFooterModule;
