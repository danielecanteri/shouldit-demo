describe('Karma', function () {
	
	beforeEach(module('todoApp'));

	it("loading", inject(function ($rootScope, $controller, $httpBackend) {
		var scope = $rootScope.$new()
		var todoController = $controller('TodoController', {
			$scope : scope
		});
		expect(scope.loading).toBe(true);
	}));
	
	it('not loading', inject(function ($rootScope, $controller, $httpBackend) {
		$httpBackend.expectGET('/api/todo/list').respond([]);
		var scope = $rootScope.$new()
		var todoController = $controller('TodoController', {
			$scope : scope
		});
		$httpBackend.flush();

		expect(scope.loading).toBe(false);
	}));
});