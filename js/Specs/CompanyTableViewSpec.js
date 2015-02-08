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

        describe("When no companies exists", function () {
            beforeEach(function () {
                companyCollection = new CompanyCollection(models);

                companyTableView = new CompanyTableView({
                    model: companyCollection
                });

                companyTableView.render();
            });

            it("should display empty table", function () {
                var tbody = companyTableView.$el.find('tbody');
                var numItems = tbody.find('tr').length
                expect(numItems).toBe(0);
            });
        });

        describe("When one company exists", function () {
            beforeEach(function () {
                models.push(new Company());
                companyCollection = new CompanyCollection(models);

                companyTableView = new CompanyTableView({
                    model: companyCollection
                });

                companyTableView.render();
            });

            it("should display one company", function () {
                var tbody = companyTableView.$el.find('tbody');
                var numItems = tbody.find('tr').length
                expect(numItems).toBe(1);
            });
        });

        describe("When two companies exists", function () {
            beforeEach(function () {
                models.push(new Company());
                models.push(new Company());
                companyCollection = new CompanyCollection(models);
                companyTableView = new CompanyTableView({
                    model: companyCollection
                });

                companyTableView.render();
            });
            
            it("should display two companies", function () {
                var modelsOnPage = companyCollection.getPage(companyCollection.state.currentPage)

                var tbody = companyTableView.$el.find('tbody');
                var numItems = tbody.find('tr').length;
                expect(numItems).toBe(2);
            });
        });
});
