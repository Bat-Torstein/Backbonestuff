var Company     = require("../Models/Company"),
    Backbone    = require("Backbone"),
    $           = require("jquery-browserify"),
    _           = require("underscore"),
    template    = require("../../templates/companydetails.html");

Backbone.$ = $;

var CompanyDetailsView = Backbone.View.extend({
    initialize: function () {
        this.listenTo(this.model, 'sync', this.render);
        this.listenTo(this.model, 'change', this.render);
    },

    events: {
        "click #btn-back" : "onBtnBackClicked",
        "click #btn-save": "onBtnSaveClicked",
        "change .form-control": "onSomethingChanged"
    },

    onBtnBackClicked: function () {
        
        
    },

    close: function() {
        this.undelegateEvents();
        window.history.back();
    },

    onBtnSaveClicked: function () {
        var self = this;
        this.model.save(null, {
            success: function (model, response) {
                self.close();
            }, 
            error: function (model, response) {
                console.log("error:  " + response);
            }
        })
    },

    onSomethingChanged: function() {
        this.model.set("name", $("#company-name").val());
        this.model.set("address", $("#company-address").val());
    },

    render: function () {
        var html = template(this.model.attributes);
        this.$el.html(html);

        return this;
    }
});

module.exports = CompanyDetailsView;
