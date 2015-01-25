var $                   = require("jquery-browserify"),
    CompanyTableView    = require("./Views/CompanyTableView"),
    CompanyCollection   = require("./Collections/CompanyCollection");
    
$(document).ready(function () {
    var element = $("#content");

    var companyCollection = new CompanyCollection();
    var companyTableView = new CompanyTableView({ el: element, model: companyCollection });

    companyCollection.fetch();
});