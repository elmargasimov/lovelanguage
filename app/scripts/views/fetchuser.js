/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    '../views/user.js'
], function ($, _, Backbone, JST, UserView) {
    'use strict';

    var FetchuserView = Backbone.View.extend({
        el: $('form.ll-fetch-user-form'),
        events: {
            submit: 'fetch'
        },
        template: JST['app/scripts/templates/fetchuser.ejs'],
        fetch: function (e) {
            e.preventDefault();
            var _this = this;
            // Hook up to username input field and remove all empty white space
            var usernameInput = this.$el.find('#ll-github-username-input').val().replace(/\s/g, '');
            // Set urlRoot
            this.model.urlRoot = "https://api.github.com/users/" + usernameInput;
            // Fetch model attributes
            this.model.fetch({
                success: function (model, response, options) {
                    _this.userInfo();
                }
            });
        },
        userInfo: function () {
            // Create new user view and pass in this model instance
            var userInfo = new UserView({model: this.model});
            // Render the view and insert top level element into '.ll-content'
            $('section.ll-content').html(userInfo.render().el);
            // Unbind this view, so we don't end up with zombie views
            this.unbind();
            // Remove this view altogeter
            this.remove();
        }
    });

    return FetchuserView;
});