var    Backbone     = require("Backbone"),
       _            = require("underscore"),
       BaseView     = require("./BaseView");


var BasePageableView = BaseView.extend({

    pages: [],

    currentPage: 1,
    firstPage: 1,
    lastPage: 1,
    pageSize: 2,

    resetPages : function() {
        this.pages = [];
        this.currentPage = this.firstPage = this.lastPage = 1;
    },

    createPages: function () {
        this.resetPages();
        var pageToAddTo = 1;
        var nAddedToPage = 0;
        var self = this;
        this.pageableCollection.forEach(function (model) {
            self.addToPage(model, pageToAddTo);
            nAddedToPage++;
            if (nAddedToPage === self.pageSize) {
                pageToAddTo++;
                nAddedToPage = 0;
            }
        });
        this.lastPage = pageToAddTo;

        if (!nAddedToPage) {
            this.lastPage--;
        }
    },

    addToPage: function (model, pageToAddTo) {
        if (!this.pages[pageToAddTo]) {
            this.pages[pageToAddTo] = [];
        }
        this.pages[pageToAddTo].push(model);
    },

    getModelsOnCurrentPage: function() {
        return this.getModelsOnPage(this.currentPage);
    },

    getModelsOnPage: function (page) {
        if (!this.pages.length) {
            this.createPages();
        }

        if (!this.pages.length || !this.pages[page]) {
            return [];
        }

        return this.pages[page];
    }
});

module.exports = BasePageableView;
