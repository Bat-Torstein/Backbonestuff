var Backbone            = require("backbone"),
    Company             = require("../Models/Company"),
    CompanyCollection   = require("../Collections/CompanyCollection"),
    CompanyTableView    = require('../Views/CompanyTableView'),
    $                   = require("jquery-browserify");

Backbone.$ = $;
 
describe("CompanyTableView", function () {
        var companyTableView;
        var companyCollection;
        var models = [];

        function addCompanyToModels() {
            var company = new Company();
            company.set("id", models.length);
            models.push(company);
        }

        describe("When no companies exists", function () {
            beforeEach(function () {
                models = [];

                companyCollection = new CompanyCollection(models);

                companyTableView = new CompanyTableView({
                    model: companyCollection
                });

                companyTableView.render();
            });

            it("should display empty table", function () {
                var tbody = companyTableView.$el.find('tbody');
                var numItems = tbody.find('tr').length;
                expect(numItems).toBe(0);
            });
        });

        describe("When one company exists", function () {
            beforeEach(function () {
                addCompanyToModels();
                companyCollection = new CompanyCollection(models);

                companyTableView = new CompanyTableView({
                    model: companyCollection
                });

                companyTableView.render();
            });

            it("should display one company", function () {
                var tbody = companyTableView.$el.find('tbody');
                var numItems = tbody.find('tr').length;
                expect(numItems).toBe(1);
            });
        });

        describe("When two companies exists", function () {
            beforeEach(function () {
                models = [];
                addCompanyToModels();
                addCompanyToModels();
                companyCollection = new CompanyCollection(models);
                companyTableView = new CompanyTableView({
                    model: companyCollection
                });

                companyTableView.render();
            });
            
            it("should display two companies", function () {
                var tbody = companyTableView.$el.find('tbody');
                var numItems = tbody.find('tr').length;
                expect(numItems).toBe(2);
            });
        });

        describe("When multiple companies exists", function () {
            beforeEach(function () {
                models = [];
                addCompanyToModels();
                addCompanyToModels();
                addCompanyToModels();
                addCompanyToModels();

                companyCollection = new CompanyCollection(models);
                companyTableView = new CompanyTableView({
                    model: companyCollection
                });

                companyTableView.render();
            });

            it("should change current page when forward is clicked", function () {
                companyTableView.currentPage = 1;
                companyTableView.$el.find("#navigate-forward").click();

                expect(companyTableView.currentPage).toBe(2);
            });

            it("should change current page when backward is clicked", function () {
                companyTableView.currentPage = 2;
                companyTableView.$el.find("#navigate-back").click();

                expect(companyTableView.currentPage).toBe(1);
            });
        });
});
