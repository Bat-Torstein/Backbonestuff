var Backbone            = require("Backbone"),
    CompanyCollection   = require("../Collections/CompanyCollection"),
    EmployeeCollection  = require("../Collections/EmployeeCollection"),
    Company             = require("../Models//Company"),
    CompanyTableView    = require("../Views/CompanyTableView"),
    CompanyDetailsView  = require("../Views/CompanyDetailsView"),
    $                   = require("jquery-browserify");

Backbone.$ = $;


var CompanyRouter = Backbone.Router.extend({
    routes: {
        "": "home",
        "company/:id": "companyDetails"
    },

    home: function () {
        this.closeCurrentView();

        var companyCollection = this.getCompanyCollection();

        var companyTableView = new CompanyTableView({ el: $("#content"), model: companyCollection });
        companyCollection.fetch();

        this.setCurrentView(companyTableView);
    },

    companyDetails: function (id) {
        this.closeCurrentView();

        var companyCollection = this.getCompanyCollection();
        var employeeCollection = this.getEmployeeCollection(id);

        var company = new Company({ id: id });

        var companyDetailsView = new CompanyDetailsView({
            el: $("#content"),
            model: {
                company: company,
                employeeCollection: employeeCollection
            }
        });

        company.fetch();
    
        this.setCurrentView(companyDetailsView);

    },

    closeCurrentView: function() {
        if (this.currentView) {
            this.currentView.close();
        }
    },

    setCurrentView: function (view) {
        this.currentView = view;
    },

    getCompanyCollection: function () {
        if (!this.companyCollection) {
            this.companyCollection = new CompanyCollection();
        }

        return this.companyCollection;
    },

    getEmployeeCollection: function (companyId) {
        var employeeCollection = new EmployeeCollection();
        employeeCollection.companyId = companyId;
        employeeCollection.fetch();

        return employeeCollection;
    }
});

module.exports = CompanyRouter;
