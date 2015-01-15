$(document).on("ready", init);

function init() {
    $('.sub-menu').hide();
        $('.menu li, .sub-menu > li').hover(function () {
        if ($('> ul.sub-menu',this).length > 0) {
            $('> ul.sub-menu',this).stop().slideDown('slow');
        }
        },function () {
        if ($('> ul.sub-menu',this).length > 0) {
            $('> ul.sub-menu',this).stop().slideUp('slow');
        }
    });
}
