$(document).ready(function(){

    // toggle menu jQuery
    $('.menu-toggle').click(function(){
        $('.menu-toggle i').toggleClass('fa-times');
        $('.header').toggleClass('active')
    })

    // toggle theme jQuery
    $('.theme-toggle').click(function(){
        $('.theme-toggle i').toggleClass('fa-sun')
        $('body').toggleClass('active')
    })

    $(window).scroll(function(){
        $('.header').removeClass('active')
        $('.menu-toggle i').removeClass('fa-times');
    })
})