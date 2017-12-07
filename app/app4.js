(function ()
	{
	var app=angular.module('expapp', []);
	app.controller('expctrl',expctrl);
	//injecting $scope
	expctrl.$inject=['$scope'];
		function expctrl($scope)
	  	{
	  		$scope.image="1.png";
	  		$scope.ChangeImage=function()
	  		{
	  			$scope.image="2.png";
	  		};
	  	}
	})();