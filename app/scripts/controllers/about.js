/*global define*/

define([
    'jquery',
    '../views/about.js'
], function ($, AboutView) {
    'use strict';

    var FetchUserController = function() {
        this.view = new AboutView();
        this.view.render();
    };

    return FetchUserController;
});