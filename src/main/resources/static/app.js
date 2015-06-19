angular.module('todoApp', []).controller(
		'TodoController',
		function($scope, $http) {
			$scope.load = function() {
				$scope.loading = true;
				$http.get('/api/todo/list').success(function(data) {
					$scope.todos = data;
					$scope.loading = false;
				})
			}

			$scope.load();
		});
