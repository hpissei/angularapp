(function()
{
	'use strict';
	var app=angular.module('ShoppingListPromiseApp',[]);
	app.controller('ShoppingListController',ShoppingListController);
	app.service('ShoppingListService',ShoppingListService);
	app.service('WeightLossFilterService',WeightLossFilterService);

	ShoppingListController.$inject=['ShoppingListService'];
	function ShoppingListController(ShoppingListService)
	{
		var list=this;
		list.addItems=ShoppingListService.getItems();
		list.itemName="";
		list.itemQuantity="";

		list.addItem=function(){
			ShoppingListService.addItem(list.itemName,list.itemQuantity);
		};
		list.removeItem=function(itemIndex){
			ShoppingListService.removeItem(itemIndex);
		};
	}
	//function

	//service
	ShoppingListService.$inject=['$q','WeightLossFilterService'];//$q - promise api object implemented in angular js
	function ShoppingListService($q,WeightLossFilterService)
	{
		var service=this;
		var items=[];
		service.getItems=function(){
			return items;
		};
		service.addItem=function(name,quantity){
			var namePromise=WeightLossFilterService.checkName(name);
			var quantityPromise=WeightLossFilterService.checkQuantity(quantity);
		//to execute two functions parallely
		$q.all([namePromise,quantityPromise]).
		then(function (response){
			var item={
				name:name,
				quantity:quantity
			};
			items.push(item);
		})
		.catch(function (response){
			console.log(response.errorMessage);
		});

		};//service addItem

		service.removeItem=function(itemIndex)
		{
			items.splice(itemIndex,1);
		};
	}

	//WeightLossFilterService
	WeightLossFilterService.$inject=['$q','$timeout'];
	function WeightLossFilterService($q,$timeout)
	{
		var service=this;
		service.checkName=function(name)
		{
			var deferred=$q.defer();
			var result={
				message:""
			};
		//$timeout
		$timeout(function(){
			if(name.toLowerCase().indexOf('cookie')===-1)
			{
					deferred.resolve();
			}
			else
			{
				result.message="Stay away from Cookies";
				deferred.reject(result);
			}
		},3000);
		return deferred.promise;			
		};

		service.checkQuantity=function(quantity)
		{
			var deferred=$q.defer();
			var result={message:""};
			$timeout(function(){
				if(quantity<6)
					{
						deferred.resolve(result);
					}
					else
					{
						result.message="That's too much ";
						deferred.reject(result);
					}
			},1000);		
		return deferred.promise;
		};
		
	}
//main function
})();