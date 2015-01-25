var Backbone = require("backbone");

var Company = Backbone.Model.extend({
    urlRoot: 'api/company/',
    defaults: {
        'name': 'MyCompany',
        'address': 'MyAddress',
        'phone' : 'Phone'
    }
});

module.exports = Company;