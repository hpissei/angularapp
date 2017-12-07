/**	Custom services are used to shara data among multiple controllers 
and not used for code-reuse 
**/
(function()
	{
		var app=angular.module('myapp',[]);
		app.controller('ctrl1',ctrl1);
		app.controller('ctrl2',ctrl2);
		//register our service
		app.service('CommonService',CommonService);

		//1st controller
		ctrl1.$inject=['CommonService'];
		function ctrl1(CommonService)
		{
			var item=this;
			item.itemname="";
			item.itemqty="";
			item.additem=function()
			{
				CommonService.additem(item.itemname,item.itemqty);	
			};
		}
		//show controller
		ctrl2.$inject=['CommonService'];
		function ctrl2(CommonService)
		{
			var show=this;
			show.items=CommonService.getitems();
		}
		//service
		function CommonService()
		{
			var service=this;
			service.additem=function(item.itemname,item.itemqty)
			{
				console.log("item added",itemname);
				//list
				var itemslist=[];

				var items={
					name:item.itemname,
					qty:item.itemqty
				};
				itemslist.push(items);
			};
			service.getitems=function()
			{
				return itemslist;
			};
		}
	}
)();