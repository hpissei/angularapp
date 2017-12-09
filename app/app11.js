(function ()
{
	var app=angular.module('myshopapp', []);
	app.controller('MenuCategoriesController',MenuCategoriesController);
	app.service('MenuCategoriesService', MenuCategoriesService);
	app.constant('ApiBasePath',"https://localhost:3000/file.json");

	MenuCategoriesController.$inject=['MenuCategoriesService'];
	function MenuCategoriesController(MenuCategoriesService)
	{
		var menu=this;
		var promise=MenuCategoriesService.getMenuCategories();
		promise.then(function success(response){
			//console.log(response);
			menu.categories=response.data;
		})
		.catch(function (error)
		{
			console.log("Something went terribly wrong!!!");
		});
	}

	MenuCategoriesService.$inject=['$http','ApiBasePath'];
	function MenuCategoriesService($http,ApiBasePath)
	{
		var service=this;
		service.getMenuCategories=function(){
			var response=$http({
				method:"GET",
				url:(ApiBasePath) //(ApiBasePath+"/categories") () to concatenate
			});

			return response;
		};	
	}
}
)();