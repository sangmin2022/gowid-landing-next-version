'use strict'

function allBt() {

    $('.all-bt').on('click', function () {
        $(this).toggleClass('open');
        $('.all-nav').toggleClass('open');
    })
}
allBt()

function headerFnc() {
    const header = $('header');

    $(window).on('wheel', function (e) {
        header.addClass('on');
        if (e.originalEvent.deltaY < 0) {
            header.removeClass('on')
        }
        else {
            if (header.hasClass('on') == false) {
                header.addClass('on')
            }
        }
    })
}
headerFnc()