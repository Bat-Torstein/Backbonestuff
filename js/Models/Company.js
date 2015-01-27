var Backbone            = require("backbone"),
    Relational          = require("backbone-relational"),
    Employee            = require("./Employee"),
    EmployeeCollection = require("../Collections/EmployeeCollection");


var Company = Backbone.RelationalModel.extend({
    urlRoot: 'api/company/',
    relations: [{
        type: Backbone.HasMany,
        key: 'employees',
        relatedModel: Employee,
        collectionType: EmployeeCollection,
        reverseRelation: {
            key: 'employed_by',
            includeInJSON: 'id'
        }
    }]
});

module.exports = Company;
