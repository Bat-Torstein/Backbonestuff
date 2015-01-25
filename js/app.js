var Backbone        = require("Backbone"),
    CompanyRouter   = require("./Router/CompanyRouter");

    
$(document).ready(function () {
    var app = new CompanyRouter();

    Backbone.history.start();
});