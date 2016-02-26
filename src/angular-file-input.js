/**
 * angular-file-input - v1.0.0 - 2016-02-22
 * Copyright (c) 2016 Quentin Lampin
 * Apache License, Version 2.0
 *
 * Minimalist file input wrapper for AngularJS 1.x
 *
 */
(function(){
    'use strict';
    angular
        .module('angular-file-input', [])
        .directive('ngFile', ['$timeout', function($timeout){
            return {
                restrict: 'A',
                scope: {
                    model: '=?ngFile'
                },
                controller: function () {
                    this.set = undefined;
                    this.reset = undefined;
                },
                link: function(scope, element, attributes, controller) {
                    var input,
                        multiple,
                        onDOMChange,
                        onCtrlChange;

                    input = element[0];
                    multiple = angular.isDefined(attributes.multiple);

                    controller.set = multiple ? function(files) { scope.model = files }
                                              : function(files) { scope.model = files[0] };

                    controller.reset = function () { input.value = null };

                    onDOMChange = function(event){ $timeout( function () { controller.set(event.target.files); } ) };
                    onCtrlChange = function(watched) { if (!watched) { controller.reset() } };

                    element.bind('change', onDOMChange);
                    scope.$watch('model', onCtrlChange, false);

                    controller.set( input.files );
                }
            }
        }]);
})();