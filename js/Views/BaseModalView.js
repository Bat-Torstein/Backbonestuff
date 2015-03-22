var     _           = require('underscore'),
        BaseView    = require('./BaseView'),
        $           = require('jquery-browserify'),
        Bootstrap   = require('bootstrap');

var BaseModalView = BaseView.extend({
    className: 'modal hide fade',

    attributes: function () {
        return {
            role: 'dialog'
        };
    },

    events: {
        'hidden.bs.modal'   : 'teardown',
        'shown.bs.modal'    : 'shown'
    },

    initialize: function (args) {
        if (this.initializeView) {
            this.initializeView(args);
        }
        this.render();
    },

    show: function () {
        this.$el.modal('show');
    },

    hide : function() {
        this.$el.modal('hide');
    },

    teardown: function () {
        this.$el.data('modal', null);
        this.$el.modal('hide');

        this.remove();
    },

    shown: function () {

    },

    render: function () {
        this.renderView();
        this.$el.modal({ show: false }); // Don't show modal on instantiation        

        return this;
    }
});

module.exports = BaseModalView;