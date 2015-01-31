var Backbone = require("backbone");


var Employee = Backbone.Model.extend({
    defaults: {
        'name': "",
        'address': ""
    }
});

module.exports = Employee;