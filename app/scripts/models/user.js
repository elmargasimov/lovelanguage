/*global define*/

define([
    'underscore',
    'backbone',
    '../models/starred.js'
], function (_, Backbone, StarredModel) {
    'use strict';

    var UserModel = Backbone.Model.extend({
        defaults: {
        	"avatar_url": "",
        	"login": "",
        	"name": "",
  			"id": null,
  			"html_url": "",
  			"favourite_language": "",
        },
        fetchStarred: function () {
        	var _this = this;
        	// Create new starred model instance
        	this.starred = new StarredModel();
        	// Set the root url to {this.urlRoot}/starred
        	this.starred.urlRoot = this.urlRoot + "/starred";
        	// Fetch model attributes
        	this.starred.fetch({
        		success: function (model, response, options) {
        			// Create a new langueages array to store all the languages of the starred repo's
        			var languages = [];
        			// Loop over the response
        			_.each(response, function (index) {
        				// Only grab the language key from the list of attributes
        				var language = index.language
        				// For each language retrieved push to 'languages' array
        				languages.push(language);
        			});
        			// Set the languages attribute of the starred model to the languages array
        			_this.starred.set('languages', languages);
        			// Compute the mode language of the user
        			_this.starred.mode(languages);
        			// Make a reference to the mode language
        			var modeLanguage = _this.starred.attributes.modeLanguage;
        			// Set the user's favourite language to the mode language
        			_this.set('favourite_language', modeLanguage);
        		}
        	});
        }
    });

    return UserModel;
});
