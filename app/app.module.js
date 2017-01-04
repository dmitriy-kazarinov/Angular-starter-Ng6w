import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import AppRouter from './app.router';
import PagesModule from './pages/pages.module';
import ComponentsModule from './components/components.module';

angular.module('app', [
    uiRouter,
    PagesModule.name,
    ComponentsModule.name
  ])
  .config(AppRouter)
  .component('app', AppComponent);
