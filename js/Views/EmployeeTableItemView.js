var BaseView            = require("./BaseView"),
    Employee            = require("../Models/Employee"),
    Backbone            = require("Backbone"),
    $                   = require("jquery-browserify"),
    _                   = require("underscore"),
    EmployeeDetailsView = require("./EmployeeDetailsView"),
    tableItemTemplate   = require("../../templates/employeetableitem.html");


var EmployeeTableItemView = BaseView.extend({
    tagName: 'tr',
    
    events: {
        'click' : 'onClick'
    },

    onClick: function() {
        var employeeDetailsView = new EmployeeDetailsView({ model: this.model });
        employeeDetailsView.render();
        employeeDetailsView.show();
    },

    render: function () {
        var html = tableItemTemplate(this.model.attributes);
        this.$el.html(html);

        return this;
    }
});

module.exports = EmployeeTableItemView;
