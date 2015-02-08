var Backbone            = require("Backbone"),
    PageableCollection  = require("backbone.paginator"),
    Company             = require("../Models/Company");

var CompanyCollection = PageableCollection.extend({
    url: 'api/company',
    model: Company,
    mode: "client",
    comparator: "name",
    state: {
        pageSize: 3,
    }
});

module.exports = CompanyCollection;
