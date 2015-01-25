﻿var Backbone    = require("Backbone"),
    Company     = require("../Models/Company");

var CompanyCollection = Backbone.Collection.extend({
    url: 'api/company',
    model: Company
});

module.exports = CompanyCollection;
