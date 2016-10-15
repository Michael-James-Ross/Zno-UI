var TestsPage = function() {

    var that = this;

    this.init = function() {
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
        $('.down-list-btn').on('click', this.expandTestListClick);
    };

    this.expandTestListClick = function(event) {
        var table = $(event.target).parents(".test").find('table'); //"піднятись" до div'а з з класом test і знайти в його нащадках table
        if ($(table).css('display') == 'table') {
            $(event.target).children()
                .removeClass('glyphicon-chevron-up')
                .addClass('glyphicon-chevron-down');//замінити іконку в кнопці при натисканні на неї
            $(table).hide();
        } else {
            $(event.target).children()
                .removeClass('glyphicon-chevron-down')
                .addClass('glyphicon-chevron-up');
            $(table).show();
        }
    };
};



$(function() {
    var testsPage = new TestsPage();
    testsPage.init();
});
