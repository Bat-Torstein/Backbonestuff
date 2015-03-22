var BaseModalView   = require("./BaseModalView"),
    template        = require("../../templates/confirm.html");

var ConfirmDialog = BaseModalView.extend({

    initializeView: function (args) {
        if (args) {
            this.cb = args.cb;
            this.title = args.title;
            this.text = args.text;
        }
    },

    events:  {
        'click #btn-ok': 'onOkBtnClicked'
    },

    onOkBtnClicked: function() {
        if (this.cb) {
            this.cb();
        }
    },

    renderView: function () {
        var attributes = {};
        attributes.title = this.title;
        attributes.text = this.text;
        var html = template(attributes);
        this.$el.html(html);

        return this;
    }
});

module.exports = ConfirmDialog;