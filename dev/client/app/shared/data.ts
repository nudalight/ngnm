import angular from 'angular';

angular
  .module('ngnm')
  .factory('dataFactory', dataFactory)
;

dataFactory
  .$inject = []
;

function dataFactory(){
  return {
    key: value
  }
}