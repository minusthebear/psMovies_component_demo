(function(){
	"use strict";

	const module = angular.module("psMovies");

	module.component("accordion", {
		transclude: true,
		template: "<div class='panel-group' ng-transclude></div>",
		controller: function(){
			const vm = this;
			const panels = [];

			vm.selectPanel = function(panel){
				for (var i in panels){
					if(panel === panels[i]){
						panels[i].turnOn();
					} else {
						panels[i].turnOff();
					}
				}
			};

			vm.addPanel = function(panel){
				panels.push(panel);
				if(panels.length > 0){
					panels[0].turnOn();
				}
			};
		}
	});

	module.component("accordionPanel", {
		bindings: {
			"heading": "@"
		},
		require: {
			"parent": "^accordion"
		},
		controllerAs: "vm",
		controller: function(){
			var vm = this;

			vm.selected = false;

			vm.$onInit = function(){
				vm.parent.addPanel(vm);
			};

			vm.turnOn = function(){
				vm.selected = true;
			};

			vm.turnOff = function(){
				vm.selected = false;
			};

			vm.select = function(){
				vm.parent.selectPanel(vm);
			};
		},
		transclude: true,
		template: "<div class='panel panel-default' ng-click='vm.select()'>" + 
		"<div class='panel-heading'><h4 class='panel-title'>{{vm.heading}}</h4></div>" +
		"<div ng-if='vm.selected' class='panel-body' ng-transclude></div></div>"
	});
})();