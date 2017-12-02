//it does not work after minification since the DiController,$scope,$filter are replaced
// (function()
// 	{
// 		'use strict';
// 		var app=angular.module('DiApp', []);
// 		app.controller('DiController',DiController);

// 		//f
// 		function DiController($scope,$filter)
// 		{
// 			$scope.name="sda";
// 			$scope.upper=function()
// 			{
// 				var upCase=$filter("uppercase");
// 				$scope.name=upCase($scope.name);
// 			};
			
// 		}
// 	})();
//to solve minification problem
(function()
	{
		'use strict';
		var app=angular.module('DiApp', []);
		//arguments in order followed bt the function name
		app.controller('DiController',DiController);
		DiController.$inject=['$scope','$filter'];
		function DiController($scope,$filter)
		{
			$scope.name="hello coursera";
			$scope.upper=function()
						  {
						  	var upCase=$filter("uppercase");
						  	$scope.name=upCase($scope.name);
						  };
		}
	})();