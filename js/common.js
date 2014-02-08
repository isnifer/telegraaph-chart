(function ($) {

    var chart = $('.chart'),
        graphId = $('.koers_graph').attr('data-graph-id');

    $('.options__item').on('click', function (e) {
        e.preventDefault();

        var activeClassName = 'options__item_state_active';

        $('.' + activeClassName).removeClass(activeClassName);
        $(this).addClass(activeClassName);

        chart.attr('src', 'http://charting.vwdservices.com/hchart/v1/telegraaf/template/price/iframe?culture=nl-NL&series=issueid:' + graphId + '&period=P'+ $(this).attr('data-id'));

    });

}(jQuery));