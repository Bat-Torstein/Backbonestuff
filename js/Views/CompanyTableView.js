var Company                 = require("../Models/Company"), 
    Backbone                = require("Backbone"),
    $                       = require("jquery-browserify"),
    _                       = require("underscore"),
    tableTemplate           = require("../../templates/companytable.html");
    CompanyTableItemView    = require("./CompanyTableItemView");


Backbone.$ = $;

var CompanyTableView = Backbone.View.extend({
    initialize: function() {
        this.model.bind("reset", this.render, this);
        this.model.bind("sync", this.render, this);
    },

    render: function () {

        var html = tableTemplate({});
        this.$el.html(html);

        if (!this.model.models.length) {
            return this;
        }

        var tableBody = this.$el.find("tbody");

        _.forEach(this.model.models, function (company) {
            var tableItemView = new CompanyTableItemView({model: company});
            tableBody.append(tableItemView.render().el);
        });


        return this;
    }
});

module.exports = CompanyTableView;