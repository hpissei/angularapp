(function ()
{
	'use strict';
	var app=angular.module('myapp',[]);
	app.controller('ctrl1', ctrl1);
	app.controller('ctrl2',ctrl2);
	app.controller('ctrl3',ctrl3);
	app.service('ShoppingList',ShoppingList);
	ctrl1.$inject=['ShoppingList'];
	//ctrl1 to add items 
	function ctrl1(ShoppingList)
	{
		var items=this;
		items.name="";
		items.qty="";

		items.addItem=function()
		{
			ShoppingList.addItem(items.name,items.qty);
		};
	}
	//ctrl2 to fetch list
	ctrl2.$inject=['ShoppingList'];
	function ctrl2(ShoppingList)
	{
		var show=this;
		show.showItems=ShoppingList.showItems();
	}
	//ctrl3
	ctrl3.$inject=['ShoppingList'];
	function ctrl3(ShoppingList)
	{
		var remove=this;
		remove.removeItem=ShoppingList.removeItem();
		remove.removeItemFromList=function()
		{
			remove.removeItem=ShoppingList.removeItemFromList();
		};
	}
	//service function/function construct
	function ShoppingList()
	{
		var service=this;

		//a list to add items
		var list=[];
		service.addItem=function(name,qty)
		{
			var itemcopy={
				itemname:name,
				itemqty:qty
			};
			list.push(itemcopy);
			//console.log('list',list);
		};
		//retrieve items 
		service.showItems=function()
		{
			return list;
		};
		service.removeItem=function()
		{
			//list=list.splice(list,1);
			return list;
		}
		service.removeItemFromList=function()
		{
			list=list.splice(list,2);
			return list;
		}
	}

})();