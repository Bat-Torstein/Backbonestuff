var Backbone = require("backbone");

var Company = Backbone.Model.extend({
    url: 'api/company/',

    defaults: {
        'name': 'MyCompany',
        'address': 'MyAddress',
        'phone' : 'Phone'
    }
});

module.exports = Company;
