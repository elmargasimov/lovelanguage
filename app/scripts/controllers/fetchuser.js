/*global define*/

define([
    'jquery',
    'backbone',
    '../models/user.js',
    '../views/fetchuser.js'
], function ($, Backbone, UserModel, FetchUserView) {
    'use strict';

    var FetchUserController = function() {
        this.model = new UserModel();
        this.view = new FetchUserView({model: this.model});
    };

    return FetchUserController;
});