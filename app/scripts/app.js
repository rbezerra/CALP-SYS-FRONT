'use strict';

/**
 * @ngdoc overview
 * @name calpApp
 * @description
 * # calpApp
 *
 * Main module of the application.
 */
angular
  .module('calpApp', [
    'calpApp.routes',
    'calpApp.controllers',
    'calpApp.directives',
    'calpApp.filters',
    'calpApp.services'
  ])

  .run(function() {
    console.log('Aplicação Iniciada'); //debug
  });
