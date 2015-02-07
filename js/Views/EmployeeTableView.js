var BaseView                    = require("./BaseView"),
    Company                     = require("../Models/Company"),
    Backbone                    = require("Backbone"),
    $                           = require("jquery-browserify"),
    _                           = require("underscore"),
    tableTemplate               = require("../../templates/employeetable.html");
    EmployeeTableItemView       = require("./EmployeeTableItemView");


Backbone.$ = $;

var EmployeeTableView = BaseView.extend({
    initialize: function () {
        this.itemViews = [];
    },

    render: function () {
        var html = tableTemplate({});
        this.$el.html(html);

        if (!this.model.models.length) {
            return this;
        }

        var tableBody = this.$el.find("tbody");

        var self = this;

        this.model.forEach(function (employee) {
            var tableItemView = new EmployeeTableItemView({ model: employee });
            tableBody.append(tableItemView.render().el);
            self.itemViews.push(tableItemView);
        });

        return this;
    },

    onClose: function () {
        if (this.itemViews.length) {
            _.forEach(this.itemViews, function (itemView) {
                itemView.close();
            });
        }

        this.itemViews = [];
    }
});

module.exports = EmployeeTableView;