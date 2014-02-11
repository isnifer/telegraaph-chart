(function ($) {

    // jQuery Code
    var chart = $('.chart'),
        graphId = $('.koers_graph').attr('data-graph-id');

    $('.options__item').on('click', function (e) {
        e.preventDefault();

        var activeClassName = 'options__item_state_active',
            activeElement = $('.' + activeClassName);

        if (this !== activeElement[0]) {
            activeElement.removeClass(activeClassName);
            $(this).addClass(activeClassName);
            chart.attr('src', 'http://charting.vwdservices.com/hchart/v1/telegraaf/template/price/iframe?culture=nl-NL&series=issueid:' + graphId + '&period=P'+ $(this).attr('data-id'));
        }

    });

    // Native equivalent
    /* window.$ = function (selector, el) {
        if (!el) {el = document;}
        return (typeof document.querySelector !== 'undefined') ? el.querySelector(selector) : document.getElementByClassName(selector)[0];
    };

    window.$$ = function (selector, el) {
        if (!el) {el = document;}
        return (function () {
            if (typeof document.querySelectorAll !== 'undefined') {
                var data = el.querySelectorAll(selector);
            } else {
                data = document.getElementByClassName(selector.substring(1, selector.length));
            }
            return Array.prototype.slice.call(data);
        }());
    };

    var chart = $('.chart'),
        graphId = $('.koers_graph').getAttribute('data-graph-id'),
        links = $$('.options__item'),
        linksLen = links.length
        i = 0;

    for (i; i < linksLen; i++) {
        links[i].addEventListener('click', function (e) {
            e.preventDefault();

            var activeClassName = 'options__item_state_active',
                activeElement = $('.' + activeClassName),
                currentId = this.getAttribute('data-id');

            if (this !== activeElement[0]) {
                activeElement.classList.remove(activeClassName);
                this.classList.add(activeClassName);
                chart.setAttribute('src', 'http://charting.vwdservices.com/hchart/v1/telegraaf/template/price/iframe?culture=nl-NL&series=issueid:' + graphId + '&period=P'+ currentId);
            }

        });
    } */

}(jQuery));