var BasePageableView        = require("./BasePageableView"),
    Company                 = require("../Models/Company"),
    Backbone                = require("Backbone"),
    $                       = require("jquery-browserify"),
    _                       = require("underscore"),
    tableTemplate           = require("../../templates/companytable.html"),
    CompanyTableItemView    = require("./CompanyTableItemView"),
    Autocomplete            = require("jquery-autocomplete"),
    moment                  = require("moment");
    datepicker              = require("booty-datepicker");



Backbone.$ = $;

var CompanyTableView = BasePageableView.extend({
    initialize: function() {
        this.model.bind("sync", this.render, this);
        this.itemViews = [];
        this.pageableCollection = this.model;
    },
    events: {
        "click #navigate-back": "onNavigateBack",
        "click #navigate-forward" : "onNavigateForward",
        "click #btn-dates" : "onBtnDatesClicked"
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

    onBtnDatesClicked: function () {
        var rawDate = moment($("#from-date").val(), ['DD/MM/YYYY'], true).format('YYYY-MM-DD');
        var fromDate = new Date(rawDate);
        var text = fromDate.getFullYear() + "-" + (fromDate.getMonth() + 1) + "-" + fromDate.getDate();
        alert(text);
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
        this.initDatepicker();

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
    },

    initDatepicker: function () {
        var defaultOptions = {
            RAW_FORMAT: 'YYYY-MM-DD',
            INPUT_FORMATS: ['DD/MM/YYYY'],
            DISPLAY_FORMAT: 'DD/MM/YYYY',
            formatter: function (value) {
                return moment(value, this.RAW_FORMAT, true).format(this.DISPLAY_FORMAT);
            },
            validate: function (value) {
                return moment(value, this.INPUT_FORMATS, true).isValid();
            },
            parser: function (value) {
                return moment(value, this.INPUT_FORMATS, true).format(this.RAW_FORMAT);
            }
        };

        datepicker(defaultOptions);
    }

});

module.exports = CompanyTableView;