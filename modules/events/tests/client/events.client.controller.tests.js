// 'use strict';

(function() {
  describe('EventsCtrl', function() {
    beforeEach(module('ui.router'));
    beforeEach(module('events'));
    beforeEach(module('ngMockE2E'));
    var $state, $httpBackend, scope;

    describe('GET /events', function() {
      beforeEach(inject(function($rootScope, _$httpBackend_, _$controller_) {
        $httpBackend = _$httpBackend_;
        scope = $rootScope.$new;
        $controller = _$controller_;
      }));

      it('should load events data from server', function() {
        var testData = {data: 'test'};
        var controller = $controller('EventsCtrl', { $scope: scope });
        $httpBackend.expectGET('/api/events').respond(200, testData);
        $httpBackend.flush();

        expect(scope.events).toEqual(testData);
      });
    });



    describe('goToEdit', function() {
      beforeEach(inject(function(_$state_) {
        $state = _$state_;
      }));
      it('should route to editEvent', function() {
        expect($state.href('events')).toEqual('#/events');
      });
    });

  });
})();
