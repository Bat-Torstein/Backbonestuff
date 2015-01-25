var Company                 = require("../Models/Company"), 
    Backbone                = require("Backbone"),
    $                       = require("jquery-browserify"),
    _                       = require("underscore"),
    tableTemplate           = require("../../templates/companytable.html");
    CompanyTableItemView    = require("./CompanyTableItemView");


Backbone.$ = $;

var CompanyTableView = Backbone.View.extend({
    initialize: function() {
        this.model.bind("sync", this.render, this);
    },
    events: {
        "click #navigate-back": "onNavigateBack",
        "click #navigate-forward" : "onNavigateForward"
    },

    onNavigateBack: function() {
        if (this.model.state.currentPage > this.model.state.firstPage) {
            this.model.state.currentPage--;
            this.render();
        }
    },

    onNavigateForward: function() {
        if (this.model.state.currentPage < this.model.state.lastPage) {
            this.model.state.currentPage++;
            this.render();
        }
    },

    render: function () {

        var html = tableTemplate({});
        this.$el.html(html);

        if (!this.model.models.length) {
            return this;
        }

        var currentPage = this.model.getPage(this.model.state.currentPage);

        var tableBody = this.$el.find("tbody");

        _.forEach(currentPage.models, function (company) {
            var tableItemView = new CompanyTableItemView({model: company});
            tableBody.append(tableItemView.render().el);
        });


        return this;
    }
});

module.exports = CompanyTableView;