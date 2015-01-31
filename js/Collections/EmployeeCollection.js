var Backbone                 = require("Backbone"),
    PageableCollection       = require("backbone.paginator"),
    Employee                 = require("../Models/Employee");

var EmployeeCollection = Backbone.PageableCollection.extend({
    url : function() {
        return "/company/" + this.companyId + "/employee";
    },

    model: Employee,
    mode: "client",
    state: {
        pageSize: 4
    },

    setCompanyId: function(id) {
        this.companyId = id;
    }
});

module.exports = EmployeeCollection;