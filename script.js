$(document).on("ready", init);

function init() {
    $('.sub-menu').hide();
    $('.menu > li, ul.sub-menu > li').on("mouseenter", function () {
        $('> ul.sub-menu',this).slideToggle('slow');
    });

    $('.menu > li, ul.sub-menu > li').on("mouseleave", function () {
        $('> ul.sub-menu',this).slideToggle('slow');
    });

    hideShowMenu();
    $(window).on("resize", hideShowMenu);

    function hideShowMenu() {
        if($(window).width() <= 450) {
            if($("header img").attr("id") != "mobile") {
                $('.menu').hide();
            }
            $("header img").attr("id", "mobile");
        } else {
            $("header img").removeAttr("id");
            $(".menu").show();
        }
    };

    $("header img").on("click", function() {
        if($("header img").attr("id") == "mobile") {
            $('.menu').slideToggle('slow');
        }
    });
}
