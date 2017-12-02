(function()
	{
		//'use strict';
		var app=angular.module('nameapp', []);
		app.controller('namecal', function($scope)
		{
			$scope.name="";
			$scope.totalValue=0;
			$scope.displayNumeric=function()
			{
				var totalValueNumeric=calculateNumeric($scope.name);
				//$scope.totalValue=$scope.totalValue+1;
				
				$scope.totalValue=totalValueNumeric;
			}
			function calculateNumeric(string)
			{
				var val=0;//intialize with the type you want to use
				for (var i = 0;i<string.length; i++) {
					val+=string.charCodeAt(i);
				};
				return val;
			}	
		});
	}
)();