(function()
	{
		var app=angular.module('myapp', []);
		app.controller('ctrl', Ctrl);
		app.filter('loves',LovesFilter);
		//lovesFilter comes from name of the filter 
		//angular appends "filter" keyword to the end of the filter name 
		Ctrl.$inject=['$scope','lovesFilter'];
		//*/
		function Ctrl($scope,lovesFilter)//,lovesFilter)
		{
			$scope.name="I likes anime";
			$scope.lovesmessage=function()
			{
				var msg;
				msg=lovesFilter($scope.name);
				return msg;
			};
		}
		function LovesFilter()
		{
			return function(input)
				   {
				   		//to check if input exists
						input=input||"";
						input=input.replace("likes","loves");		
						return input;
					};
		}
	}
)();