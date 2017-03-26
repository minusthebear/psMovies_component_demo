 (function(){
 	"use strict";

 	angular.module("psMovies").component("movieRating", {
 		templateUrl: "/ps-movies/movie-rating.component.html",
 		bindings: {
 			value: "<"
 		},
 		controllerAs: "vm",
 		controller: function(){
 			var vm = this;

 			vm.$onInit = function(){
 				vm.entries = new Array(vm.value);
 			}

 			vm.$onChanges = function(){
 				vm.entries = new Array(vm.value);
 			};
 		}
 	});
 })();