var BaseView            = require("./BaseView"),
    Company             = require("../Models/Company"),
    Backbone            = require("Backbone"),
    $                   = require("jquery-browserify"),
    _                   = require("underscore"),
    tableItemTemplate   = require("../../templates/companytableitem.html");


var CompanyTableItemView = BaseView.extend({
    tagName: 'tr',
    render: function () {
        var html = tableItemTemplate(this.model.attributes);
        this.$el.html(html);

        return this;
    }
});

module.exports = CompanyTableItemView;
    