var BaseView            = require("./BaseView"),
    Company             = require("../Models/Company"),
    Backbone            = require("Backbone"),
    EmployeeCollection  = require("../Collections/EmployeeCollection"),
    EmployeeTableView   = require("./EmployeeTableView.js"),
    $                   = require("jquery-browserify"),
    _                   = require("underscore"),
    template            = require("../../templates/companydetails.html");

Backbone.$ = $;

var CompanyDetailsView = BaseView.extend({
    initialize: function () {
        this.listenTo(this.model.company, 'read change', this.render);
        this.listenTo(this.model.employeeCollection, 'sync', this.render);
    },

    events: {
        "click #btn-back" : "onBtnBackClicked",
        "click #btn-save": "onBtnSaveClicked",
        "change .form-control": "onSomethingChanged"
    },

    onBtnBackClicked: function () {
        this.navigateHome();
    },

    navigateHome: function() {
        Backbone.history.navigate("", { trigger: true });
    },

    onBtnSaveClicked: function () {
        var self = this;
        this.model.company.save(null, {
            success: function (model, response) {
                self.navigateHome();
            }, 
            error: function (model, response) {
                console.log("error: " + response);
            }
        })
    },

    onSomethingChanged: function() {
        this.model.company.set("name", $("#company-name").val());
        this.model.company.set("address", $("#company-address").val());
    },

    render: function () {
        var html = template(this.model.company.attributes);
        this.$el.html(html);

        this.employeeTableView = new EmployeeTableView({ el: this.$el.find('#employees'), model: this.model.employeeCollection });
        this.employeeTableView.render();

        return this;
    },
   
    onClose: function () {
        if (this.employeeTableView) {
            this.employeeTableView.close();
        }
    }
});

module.exports = CompanyDetailsView;
