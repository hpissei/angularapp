//window.setTimeout(location.reload(), 1000000000000000000);
(function()
{
'use strict'
var app=angular.module('myapp',[]);
app.controller('myctrl',function($scope){
	$scope.name="hello";
	$scope.sayHello=function()
	{
		return "Hello coussera";
	}
});

})();