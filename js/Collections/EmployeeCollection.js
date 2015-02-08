var Backbone                 = require("Backbone"),
    PageableCollection       = require("backbone.paginator"),
    Employee                 = require("../Models/Employee");

var EmployeeCollection = PageableCollection.extend({
    url : function() {
        return "api/company/" + this.companyId + "/employees";
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