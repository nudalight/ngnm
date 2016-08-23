import angular from 'angular';

angular
    .module('ngnm')
    .classy.controller({

        name: 'selectController',
        inject: ['$scope'],

        data: {
          formFields: [
                  {
                          type: 'select',
                          key: 'firstName',
                          templateOptions: {
                                  label: 'First Name'
                          }
                  }

          ]
        },

        init: function(){

        },

        methods: {

        }

    });