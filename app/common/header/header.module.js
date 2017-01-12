import angular from 'angular';
import HeaderComponent from './header.component';

const HeaderModule = angular
  .module('common.header', [])
  .component('header', HeaderComponent);

export default HeaderModule;
