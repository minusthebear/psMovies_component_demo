"use strict";

describe("Movie List Component", function(){
	beforeEach(module("psMovies"));

	var moviesList;

	beforeEach(inject(function(_$componentController_){
		moviesList = _$componentController_("movieList", {
			$scope: {}
		});
	}));

	it("can be created", function(){
		expect(moviesList).toBeDefined();
		expect(moviesList.$onInit).toBeDefined();
	});	
});