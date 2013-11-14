/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var StarredModel = Backbone.Model.extend({
    	defaults: {
    		languages: [],
    		modeLanguage: "",
    		languageMap: {}
    	},
        mode: function(array) {
        	var self = this;

        	// If the languages array is empty, return false
		    if(array.length === 0) {
		    	console.log("Cannot compute mode: Empty array");
		    	return false;
		    }

		    var languageMap = {},
		    	modeLanguage,
		    	maxCount = 1;

		    _.each(array, function(index) {
		    	// Start at the index and loop for each language
		    	var language = index;
		    	// If language does not yet exist in the languageMap
		    	if(typeof languageMap[language] === "undefined") {
		    		// Set language key and value equal to 1
		    		languageMap[language] = 1;
		    	} else {
		    		// Else add 1 to the count
		    		languageMap[language] += 1;
		    	}
		    	// If language value is greater than 1
		    	if(languageMap[language] > maxCount) {
		    		// Set modeLanguage equal to the key of the current language
		    		modeLanguage = language;
		    		// Set new highest count to value of the current language
		    		maxCount = languageMap[language];
		    	}
		    	// Save the languageMap and modeLanguage as an attribute of this model
		    	self.set("languageMap", languageMap);
		    	self.set("modeLanguage", modeLanguage);
		    });

		    // Return the mode language
		    return modeLanguage;
        }
    });

    return StarredModel;
});