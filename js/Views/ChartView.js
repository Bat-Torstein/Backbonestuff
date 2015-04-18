var BaseView = require("./BaseView"),
    Backbone = require("Backbone"),
    $ = require("jquery-browserify"),
    highcharts = require("highcharts-browserify"),
    _ = require("underscore");

Backbone.$ = $;

var ChartView = BaseView.extend({
    render: function () {
        this.$el.highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Just a test'
            },
            subtitle: {
                text: 'This is a subtitle'
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Y-axis title'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}%'
                    }
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
            },

            series: [{
                    name: 'Test 1',
                    colorByPoint: true,
                    data: [5]
                },
                {
                    name: 'Test 2',
                    colorByPoint: true,
                    data: [10]
                },
                {
                    name: 'Test 3',
                    colorByPoint: true,
                    data: [15]
                }]
        });

        return this;
    }
});

module.exports = ChartView;
