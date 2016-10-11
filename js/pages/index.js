var IndexPage = function() {

    var that = this;

    this.init = function() {
        /* if menu is opened, menu will hide*/
        $('#show-menu-btn').on('click', function(){
            if($('.menu').css('display') == 'block') {
                $('.menu').hide();
            } else {
                $('.menu').show('slow');
            }
        });
        $(".show-sign-in-block").on("click", function(){
            $(".menu").show();
            $(".menu .show-sign-in-block").hide();
            $(".sign-in").show();
        });
    };
};

$(function() {
    var indexPage = new IndexPage();
    indexPage.init();
});
