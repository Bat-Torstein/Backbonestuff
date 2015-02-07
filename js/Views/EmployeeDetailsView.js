var BaseModalView   = require("./BaseModalView"),
    Company         = require("../Models/Company"),
    $               = require("jquery-browserify"),
    _               = require("underscore"),
    template        = require("../../templates/employeedetails.html");

var EmployeeDetailsView = BaseModalView.extend({
    renderView: function () {
        var html = template(this.model.attributes);
        this.$el.html(html);

        return this;
    }
});

module.exports = EmployeeDetailsView;