$(document).on("ready", init);

function init() {

    $('.sub-menu').hide();
    $('.menu > li, ul.sub-menu > li').hover(function () {
        if ($('> ul.sub-menu',this).length > 0) {
            $('> ul.sub-menu',this).stop().slideDown('slow');
        }
    },function () {
        if ($('> ul.sub-menu',this).length > 0) {
            $('> ul.sub-menu',this).stop().slideUp('slow');
        }
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

   
    function initOfflineReload() {
        $("#reloadOffline").on("click", function() {
            var triedPage = document.baseURI;
            window.location.replace(triedPage);
        });
    }
  

}
   
