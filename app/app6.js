(function()
	{
		var app=angular.module('myapp', []);
		app.controller('ctrl',Ctrl);
		app.filter('loves',LovesFilter);
		//inject
		Ctrl.$inject=['$scope','lovesFilter'];
		//controller
		function Ctrl($scope,lovesFilter)
		{
			$scope.name="I likes Anime";
			$scope.sayMessage=function()
								{
									return lovesFilter($scope.name);
								};
		}
		function LovesFilter()
		{
			return function(input,arg1)
			{
				input=input||"";
				arg1=arg1||"loves";
				console.log(arg1);
				input=input.replace("likes",arg1);
				return input;
			};
		}
	}
)();