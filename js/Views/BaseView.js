var Company         = require("../Models/Company"),
    Backbone        = require("Backbone"),
    $               = require("jquery-browserify"),
    _               = require("underscore");

Backbone.$ = $;

var BaseView = Backbone.View.extend({
    close: function (removeViewFromDOM) {

        this.undelegateEvents();
        this.stopListening();

        if (!!removeViewFromDOM) {
            this.remove();
        }

        if (this.onClose) {
            this.onClose();
        }
    }
});

module.exports = BaseView;
