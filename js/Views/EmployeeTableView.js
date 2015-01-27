var Company                     = require("../Models/Company"),
    Backbone                    = require("Backbone"),
    $                           = require("jquery-browserify"),
    _                           = require("underscore"),
    tableTemplate               = require("../../templates/employeetable.html");
    EmployeeTableItemView       = require("./EmployeeTableItemView");


Backbone.$ = $;

var EmployeeTableView = Backbone.View.extend({
    initialize: function () {
        this.model.bind("sync", this.render, this);
    },

    render: function () {

        var html = tableTemplate({});
        this.$el.html(html);

        if (!this.model.models.length) {
            return this;
        }

        var tableBody = this.$el.find("tbody");

        this.model.forEach(function (employee) {
            var tableItemView = new EmployeeTableItemView({ model: employee });
            tableBody.append(tableItemView.render().el);
        });

        return this;
    }
});

module.exports = EmployeeTableView;