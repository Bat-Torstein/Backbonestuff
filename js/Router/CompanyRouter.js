var Backbone            = require("Backbone"),
    CompanyCollection   = require("../Collections/CompanyCollection"),
    Company             = require("../Models//Company"),
    CompanyTableView    = require("../Views/CompanyTableView"),
    CompanyDetailsView  = require("../Views/CompanyDetailsView"),
    $                   = require("jquery-browserify");

Backbone.$ = $;


var CompanyRouter = Backbone.Router.extend({
    routes: {
        "": "home",
        "company/:id": "companyDetails",
        "company/:id/employees" : "companyEmployees"
    },

    home: function () {
        if (!this.companyTableView) {
            this.companyCollection = new CompanyCollection();
            this.companyTableView = new CompanyTableView({ el: $("#content"), model: this.companyCollection });
            this.companyCollection.fetch();

        } else {
            this.companyCollection.fetch();
        }
    },

    companyDetails: function (id) {
        var company = new Company({ id: id });

        var companyDetailsView = new CompanyDetailsView({ el: $("#content"), model: company });
        company.fetch();

        /*
        company.fetch({
            success: function (data) {
                var companyDetailsView = new CompanyDetailsView({ el: $("#content"), model: data });
                companyDetailsView.render();
            }
        });
        */
    },

    companyEmployees: function () {

    }
});

module.exports = CompanyRouter;
