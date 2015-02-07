var     _           = require('underscore'),
        BaseView    = require('./BaseView');
        Bootstrap   = require('bootstrap');

var BaseModalView = BaseView.extend({
    className: 'modal fade',

    events: {
        'hidden.bs.modal'   : 'teardown',
        'shown.bs.modal'    : 'shown'
    },

    initialize: function () {
        this.render();
    },

    show: function () {
        this.$el.modal('show');
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