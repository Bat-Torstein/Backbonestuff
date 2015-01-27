var Backbone                 = require("Backbone"),
    PageableCollection       = require("backbone.paginator"),
    Employee                 = require("../Models/Employee");

var EmployeeCollection = Backbone.PageableCollection.extend({
    url: '/employees/',
    model: Employee,
    mode: "client",
    state: {
        pageSize: 4
    }
});

module.exports = EmployeeCollection;