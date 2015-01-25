var Backbone = require("backbone");

var Company = Backbone.Model.extend({
    defaults: {
        'name': 'MyCompany',
        'address': 'MyAddress',
        'phone' : 'Phone'
    }
});

module.exports = Company;