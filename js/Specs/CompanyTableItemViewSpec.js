var Backbone             = require("backbone"),
    Company              = require("../Models/Company"),
    CompanyTableItemView = require('../Views/CompanyTableItemView'),
    $                    = require("jquery-browserify");

Backbone.$ = $;

describe("CompanyTableItemView", function () {

    function htmlContains(html, str) {
        if (html.indexOf(str) >= 0) {
            return true;
        }

        return false;
    }

    it("should display link, name and address", function () {
        var company = new Company();
        company.set("id", 1);
        company.set("address", "theAddress");
        company.set("name", "theName");

        var companyTableItemView = new CompanyTableItemView({model: company});
        companyTableItemView.render();
        var html = companyTableItemView.$el.html();

        expect(htmlContains(html, "company/1")).toBeTruthy();
        expect(htmlContains(html, "theAddress")).toBeTruthy();
        expect(htmlContains(html, "theName")).toBeTruthy();
    });
});
