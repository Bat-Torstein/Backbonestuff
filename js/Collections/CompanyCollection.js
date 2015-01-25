var Backbone            = require("Backbone"),
    PageableCollection  = require("backbone.paginator"),
    Company             = require("../Models/Company");

var CompanyCollection = Backbone.PageableCollection.extend({
    url: 'api/company',
    model: Company,
    mode: "client",
    state: {
        pageSize: 3
    }
});

module.exports = CompanyCollection;
