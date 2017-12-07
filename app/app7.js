(function()
{
	'use strict';
	//to create an array
	var list1=['cookie','milk','beer','wine','tomago','sushi'];
	//to create an array of objects
	var list2=[
	{
		name:"Devops",
		salary:"150000$"
	},
	{
		name:"FullStackDeveloper",
		salary:"130000$"
	},
	{
		name:"Rails/Python Developer",
		salary:"120000$"
	}
	];
	var app=angular.module('myapp',[]);
	app.controller('ctrl',Ctrl);
	app.$inject=['$scope'];
	function Ctrl($scope)
	{
		$scope.name="hp";
		$scope.list1=list1;
		$scope.list2=list2;	
		var newitem={
			name:$scope.itemname,
			salary:$scope.itemsalary
		};
	//to add to the list1
	$scope.add=function (){
		$scope.list1.push(newitem);
	}
	}
}
)();