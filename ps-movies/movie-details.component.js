(function(){
	"use strict";

	const module = angular.module("psMovies");

	module.component("movieDetails", {
		templateUrl: "/ps-movies/movie-details.component.html",
		controllerAs: "vm",
		// $canActivate can be used if you want to check on 
		// conditions to allow/prevent people from routing to this page
		
		// $canActivate: function($http, $timeout){
		// 	return $timeout(function(){
		// 		return true;
		// 	}, 2000);
		// },
		controller: function(){
			const vm = this;

			vm.$routerOnActivate = function(next){
				vm.id = next.params.id;
			};
		}
	});
})();