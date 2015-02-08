var Backbone            = require("backbone"),
    Company             = require("../Models/Company"),
    CompanyCollection   = require("../Collections/CompanyCollection"),
    BasePageableView    = require("../Views/BasePageableView");

describe("BasePageableView", function () {
    var basePageableView;
    var companyCollection;
    var models = [];

    function addCompanyToModels() {
        var company = new Company();
        company.set("id", models.length);
        models.push(company);
    }

    describe("When collection has no models", function () {
        beforeEach(function () {
            models = [];

            companyCollection = new CompanyCollection(models);

            basePageableView = new BasePageableView();
            basePageableView.pageableCollection = companyCollection;
        });

        it("current page should be empty", function () {
            var modelsOnCurrentPage = basePageableView.getModelsOnCurrentPage();
            expect(modelsOnCurrentPage.length).toBe(0);
        });
    });

    describe("When collection has one model", function () {
        beforeEach(function () {
            models = [];
            addCompanyToModels();

            companyCollection = new CompanyCollection(models);

            basePageableView = new BasePageableView();
            basePageableView.pageableCollection = companyCollection;
        });

        it("current page should have one model", function () {
            var modelsOnCurrentPage = basePageableView.getModelsOnCurrentPage();
            expect(modelsOnCurrentPage.length).toBe(1);
        });
    });

    describe("When collection has two models", function () {
        beforeEach(function () {
            models = [];
            addCompanyToModels();
            addCompanyToModels();

            companyCollection = new CompanyCollection(models);

            basePageableView = new BasePageableView();
            basePageableView.pageableCollection = companyCollection;
        });

        it("current page should have two models", function () {
            var modelsOnCurrentPage = basePageableView.getModelsOnCurrentPage();
            expect(modelsOnCurrentPage.length).toBe(companyCollection.length);
        });
    });

    describe("When collection has three models and pagesize is 2", function () {
        beforeEach(function () {
            models = [];
            addCompanyToModels();
            addCompanyToModels();
            addCompanyToModels();

            companyCollection = new CompanyCollection(models);

            basePageableView = new BasePageableView();
            basePageableView.pageableCollection = companyCollection;
        });

        it("first page should have two models", function () {
            basePageableView.currentPage = 1;
            var modelsOnCurrentPage = basePageableView.getModelsOnCurrentPage();
            expect(modelsOnCurrentPage.length).toBe(2);
        });

        it("next page should have one model", function () {
            basePageableView.currentPage = 2;
            var modelsOnCurrentPage = basePageableView.getModelsOnCurrentPage();
            expect(modelsOnCurrentPage.length).toBe(1);
        });

    });

});
