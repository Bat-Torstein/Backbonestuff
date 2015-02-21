var Backbone            = require("Backbone"),
    Company             = require("../Models/Company");

var CompanyCollection = Backbone.Collection.extend({
    url: 'api/company',
    model: Company,
    comparator: "name",

    getCompanyNames : function() {
        var companyNames = [];
        this.forEach(function (company) {
            companyNames.push(company.get("name"));
        });

        return companyNames;
    }
});

module.exports = CompanyCollection;
