(function(){
	"use strict";

	const module = angular.module("psMovies");

	module.component("movieList",{
		// template: "<h3>Hey there</h3>",
		templateUrl: '/ps-movies/movie_list.component.html',
		controllerAs: "vm",
		controller: function(){
			var vm = this;

			vm.message = "Hello from a component template! Yo!";
		
			vm.changeMessage = function(){
				vm.message = "Loving you was like loving the dead.";
			};
		}
	});
})();