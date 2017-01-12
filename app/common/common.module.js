import angular from 'angular';
import HeaderModule from './header/header.module';
// import FooterModule from './footer/footer.module';

const dependencies = [
  HeaderModule.name
  // FooterModule.name
];

const CommonModule = angular
  .module('common', dependencies);

export default CommonModule;
