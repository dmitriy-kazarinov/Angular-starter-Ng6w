import angular from 'angular';
import AppHeaderModule from './app-header/app-header.module';
import AppFooterModule from './app-footer/app-footer.module';

const dependencies = [
  AppHeaderModule.name,
  AppFooterModule.name
];

const CommonModule = angular
  .module('common', dependencies);

export default CommonModule;
