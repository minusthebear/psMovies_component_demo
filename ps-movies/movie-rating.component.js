 (function(){
 	"use strict";

 	function buildEntries(value, max){
 		let entries = [];

 		for (var i = 1; i <= max; i++){
 			console.log(max);
 			let icon = i <= value ? "glyphicon-star" : "glyphicon-star-empty";
 			entries.push(icon);
 		}

 		return entries;
 	}


 	angular.module("psMovies").component("movieRating", {
 		templateUrl: "/ps-movies/movie-rating.component.html",
 		bindings: {
 			value: "<",
 			max: "<"
 		},

 		// We may use this by adding ng-transclude to the html

 		//transclude: true,
 		controllerAs: "vm",
 		controller: function(){
 			var vm = this;

 			vm.$onInit = function(){
 				vm.entries = buildEntries(vm.value, vm.max);
 			}

 			vm.$onChanges = function(){
 				vm.entries = buildEntries(vm.value, vm.max);
 			};
 		}
 	});
 })();