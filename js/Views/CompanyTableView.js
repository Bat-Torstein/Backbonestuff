var BasePageableView        = require("./BasePageableView"),
    Company                 = require("../Models/Company"),
    Backbone                = require("Backbone"),
    $                       = require("jquery-browserify"),
    _                       = require("underscore"),
    tableTemplate           = require("../../templates/companytable.html"),
    CompanyTableItemView    = require("./CompanyTableItemView"),
    Autocomplete            = require("jquery-autocomplete");


Backbone.$ = $;

var CompanyTableView = BasePageableView.extend({
    initialize: function() {
        this.model.bind("sync", this.render, this);
        this.itemViews = [];
        this.pageableCollection = this.model;
    },
    events: {
        "click #navigate-back": "onNavigateBack",
        "click #navigate-forward" : "onNavigateForward"
    },

    onNavigateBack: function() {
        if (this.currentPage > this.firstPage) {
            this.currentPage--;
            this.render();
        }
    },

    onNavigateForward: function() {
        if (this.currentPage < this.lastPage) {
            this.currentPage++;
            this.render();
        }
    },

    render: function () {
        var html = tableTemplate({});
        this.$el.html(html);

        if (!this.model.models.length) {
            return this;
        }
        var modelsOnCurrentPage = this.getModelsOnCurrentPage();

        var tableBody = this.$el.find("tbody");

        var self = this;
        _.forEach(modelsOnCurrentPage, function (company) {
            var tableItemView = new CompanyTableItemView({model: company});
            tableBody.append(tableItemView.render().el);
            self.itemViews.push(tableItemView);
        });

        this.initAutoComplete();

        return this;
    },

    onClose: function () {
        if (this.itemViews.length) {
            _.forEach(this.itemViews, function (itemView) {
                itemView.close(true);
            });
        }

        this.itemViews = [];
    },

    initAutoComplete: function () {
        $("#company-name").autocomplete({
            limit: 3,
            source:  [this.model.getCompanyNames()]
        });
    }

});

module.exports = CompanyTableView;