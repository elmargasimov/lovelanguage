/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var UserView = Backbone.View.extend({
        tagName: 'section',
        className: 'll-user-info',
        template: JST['app/scripts/templates/user.ejs'],
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.model.fetchStarred();
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return UserView;
});