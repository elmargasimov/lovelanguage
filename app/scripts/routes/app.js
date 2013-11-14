/*global define*/

define([
    'jquery',
    'backbone',
    '../controllers/fetchuser.js',
    '../controllers/about.js'
], function ($, Backbone, FetchUserController, AboutController) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
        	'/*' : 'index',
        	'*about' : 'about'
        },
        initialize: function() {
        	// Declare top level app controllers
			this.controllers = {};
        },
        index: function() {
        	// Create new fetchUserController instance
        	this.controllers.fetchUserController = new FetchUserController();
        },
        about: function() {
        	this.controllers.aboutController = new AboutController();
        },
        start: function () {
        	Backbone.history.start();
        	console.log("Launch App");
        }

    });

    return AppRouter;
});