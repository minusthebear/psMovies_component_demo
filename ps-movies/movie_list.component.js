(function(){
	"use strict";

	const module = angular.module("psMovies");

	module.component("movieList",{
		// template: "<h3>Hey there</h3>",
		templateUrl: '/ps-movies/movie_list.component.html',
		controllerAs: "vm",
		controller: ["$http", controller]
		/*
		bindings: {
			"$router": "<"
		}
		*/
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
				console.log(movies);
				vm.movies = movies;
			})
			.catch(function(data){
				console.log(data);
			});
		};

		vm.setRating = function(movie, newRating){
			movie.rating = newRating;
		}

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

		// Option two for routing based on id

		/*	vm.goTo = function(id){
		 *		vm.$router.navigate(["Details", {id: id}]);
		 *  }
		 */
	}
})();