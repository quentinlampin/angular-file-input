/**
 * angular-file-input - v1.0.0 - 2016-02-22
 * Copyright (c) 2016 Quentin Lampin
 * Apache License, Version 2.0
 *
 * Test-suite for angular-file-input
 *
 */
'use strict';

var $compile,
    $rootScope,
    $controller,
    $timeout,
    $scope;

var expect = chai.expect;



beforeEach( module('angular-file-input') );
beforeEach( inject( function( _$compile_, _$rootScope_, _$controller_, _$timeout_ ) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $controller = _$controller_;
    $timeout = _$timeout_;
    $scope = $rootScope.$new();
}));

describe('when `multiple` attribute is *not* provided', function () {
    it('sets scope property `model` to input element `files` first item', function () {
        var angularElement,
            directiveScope,
            HTMLElement;

        $scope.boundFile = 'not a file';
        angularElement = $compile('<input type="file" ng-file="boundFile">')($scope);
        HTMLElement = angularElement[0];
        directiveScope = angularElement.isolateScope();
        expect(directiveScope.model).to.be.equal(HTMLElement.files[0]);
    });
    describe('on `change` event', function() {
        it('calls controller `set` method', function() {
            var angularElement,
                directiveController,
                spy;

            angularElement = $compile('<input type="file" ng-file="boundFile">')($scope);
            directiveController = angularElement.controller('ngFile');
            spy =  sinon.spy(directiveController, 'set');
            angularElement.triggerHandler('change');
            $timeout.flush();
            expect(spy.called).to.be.true;
        });
        it('sets scope property to input element `files` first item', function() {
            var angularElement,
                directiveScope,
                HTMLElement;

            angularElement = $compile('<input type="file" ng-file="boundFile">')($scope);
            HTMLElement = angularElement[0];
            directiveScope = angularElement.isolateScope();
            angularElement.triggerHandler('change');
            $timeout.flush();
            expect(directiveScope.model).to.be.equal(HTMLElement.files[0]);
        });
    });
});

describe('when `multiple` attribute is provided', function () {
    it('sets scope property `model` to input element `files`', function () {
        var angularElement,
            directiveScope,
            HTMLElement;

        $scope.boundFiles = 'not a file';
        angularElement = $compile('<input type="file" multiple ng-file="boundFiles">')($scope);
        HTMLElement = angularElement[0];
        directiveScope = angularElement.isolateScope();
        expect(directiveScope.model).to.be.equal(HTMLElement.files);
    });
    describe('on `change` event', function() {
        it('calls controller `set` method', function() {
            var angularElement,
                directiveController,
                spy;

            angularElement = $compile('<input multiple type="file" ng-file="boundFiles">')($scope);
            directiveController = angularElement.controller('ngFile');
            spy =  sinon.spy(directiveController, 'set');
            angularElement.triggerHandler('change');
            $timeout.flush();
            expect(spy.called).to.be.true;
        });
    });
});