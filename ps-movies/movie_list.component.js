(function(){
	"use strict";

	const module = angular.module("psMovies");

	module.component("movieList",{
		// template: "<h3>Hey there</h3>",
		templateUrl: '/ps-movies/movie_list.component.html',
		controllerAs: "vm",
		controller: ["$http", controller]
	});

	function fetchMovies($http){
		return $http.get("/movies.json")
			.then(function(res){
				return res.data;
			})
			.catch(function(data){
				return data;
			});
	}

	function controller($http){
		var vm = this;
		vm.movies = [];

		vm.$onInit = function(){
			fetchMovies($http).then(function(movies){
				vm.movies = movies;
			})
			.catch(function(data){
				console.log(data);
			});
		};

		vm.upRating = function(movie){
			if(movie.rating < 5){
				movie.rating += 1;
			}
		}

		vm.downRating = function(movie){
			if(movie.rating > 1){
				movie.rating -= 1;
			}
		}
	}
})();