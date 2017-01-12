import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import AppRouter from './app.router';
import PagesModule from './pages/pages.module';
import ComponentsModule from './components/components.module';
import CommonModule from './common/common.module';

const dependencies = [
  uiRouter,
  PagesModule.name,
  ComponentsModule.name,
  CommonModule.name
];

angular.module('app', dependencies)
  .config(AppRouter)
  .component('app', AppComponent);
