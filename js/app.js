var Backbone = require("Backbone"),
    CompanyRouter   = require("./Router/CompanyRouter"),
    $               = require("jquery-browserify");

    
$(document).ready(function () {
    var app = new CompanyRouter();

    Backbone.history.start();

    $(document).ajaxStart(function () {
        $("#loading").addClass('spinner');
    });

    $(document).ajaxStop(function () {
        $("#loading").removeClass('spinner');
    });
});