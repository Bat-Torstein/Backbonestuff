var Backbone            = require("backbone"),
    Relational          = require("backbone-relational");


var Employee = Backbone.RelationalModel.extend({
    urlRoot: '/employees/',
    defaults: {
        'name': 'MyCompany',
        'address': 'MyAddress'
    }
});

module.exports = Employee;