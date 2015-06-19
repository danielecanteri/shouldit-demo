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

			$scope.form = {}

			$scope.addTodo = function() {
				$http.post(
						'api/todo/add?descrizione=' + $scope.form.descrizione)
						.success(function() {
							$scope.form.descrizione = ''
							$scope.load();
						})
			}

			$scope.removeTodo = function(id) {
				$http.post('api/todo/remove?id=' + id).success(function() {
					$scope.load();
				})
			}
		});
