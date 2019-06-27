/*global $, alert, console*/

$(function () {
    "use strict";
    var winHeight = $(window).height(),
        navBar = $('.navbar').innerHeight();

    $('header .content').css("paddingTop", (winHeight - $('header .content').innerHeight()) / 2);
    
    $('.company').click(function () {
        $('.buttons').fadeOut(500);
        $('.companyForm').delay(500).fadeIn(1000);
    });
    
    $('.customer').click(function () {
        $('.buttons').fadeOut(500);
        $('.customerForm').delay(500).fadeIn(1000);
    });
    
    $('.customerForm span').click(function () {
        $('.customerForm').fadeOut(500);
        $('.buttons').delay(500).fadeIn(1000);
    });
    
    $('.companyForm span').click(function () {
        $('.companyForm').fadeOut(500);
        $('.buttons').delay(500).fadeIn(1000);
    });


    $(".companyBTN").click(function () {

        $("html, body").animate({

            scrollTop : $("#company").offset().top - 80

        }, 1000);
    });
    $(".customerBTN").click(function () {

        $("html, body").animate({

            scrollTop : $("#customer").offset().top - 80

        }, 1000);
    });

    
});

