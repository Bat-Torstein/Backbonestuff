var Employee            = require("../Models/Employee"),
    Backbone            = require("Backbone"),
    $                   = require("jquery-browserify"),
    _                   = require("underscore"),
    tableItemTemplate   = require("../../templates/employeetableitem.html");


var EmployeeTableItemView = Backbone.View.extend({
    tagName: 'tr',
    render: function () {
        var html = tableItemTemplate(this.model.attributes);
        this.$el.html(html);

        return this;
    }
});

module.exports = EmployeeTableItemView;
