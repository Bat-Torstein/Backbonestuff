var Backbone                 = require("Backbone"),
    Employee                 = require("../Models/Employee");

var EmployeeCollection = Backbone.Collection.extend({
    url : function() {
        return "api/company/" + this.companyId + "/employees";
    },

    model: Employee,

    setCompanyId: function(id) {
        this.companyId = id;
    }
});

module.exports = EmployeeCollection;