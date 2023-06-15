$(document).ready(function(){

    $(function(){
        var windowWidth = $(window).width();
        if(windowWidth>1199){
            navSlideUpDown(); 
        }
        else{
            responsibleMenuHideShow();  // 반응형 메뉴 변경하기
            mobileMenuNoneHref();  // 모바일 메뉴 href 변경
        }
    });

    // nav 
    function navSlideUpDown() {
        var nav = $('nav');
        var header = $('header');
        nav.hover(function(){
            header.stop().animate({height:'680px'});
        }, function(){
            header.stop().animate({height:'80px'});
        });
    }
    

    // 반응형 메뉴 토글
    $(function(){
        var menuBtn = $('.menu_btn');
        var menuClose = $('.menu_close');
        var menuAll = $('.menu_wrapper');
        menuBtn.click(function(){
            menuAll.css('transform', 'translateX(0)');
            $('body').css('overflow-y', 'hidden');
            $('html').css('overflow-y', 'hidden');
        });
        menuClose.click(function(){
            menuAll.css('transform', 'translateX(100%)');
            $('body').css('overflow-y', 'visible');
            $('html').css('overflow-y', 'visible');
        });

    })

    // 반응형 메뉴 2depth

    function responsibleMenuHideShow(){
        var MenuTitle = $('.header_gnb nav ul li > a');
        var MenuAll = $('.header_gnb nav ul li > ul');
        MenuTitle.click(function(){
            MenuTitle.removeClass('on');
            MenuAll.removeClass('on');
            $(this).addClass('on')
            $(this).siblings().addClass('on');
        });
        
    };

    // 모바일 메뉴 href 변경

    function mobileMenuNoneHref(){
        $('.header_gnb nav > ul > li > a').attr('href','#none');
    }

    // 공지사항
    $(function(){
        var tabTitle = $('.notice_title li a'),
            notiCont = $('.content_area > div');

        notiCont.hide();
        $('.content_area > div:first-child').show();
        
            
        tabTitle.click(function(e){
            e.preventDefault();
            tabTitle.removeClass('on');
            $(this).addClass('on');
            notiCont.hide();
            var $target = $(this).attr('href');
            $($target).show();
        });
        
    });

    // 배너

    setInterval(function(){
        $('.slider_container').animate({marginLeft:'-=212px'}, 500, function(){
            $('.slider_container li:first').appendTo('.slider_container');
            $('.slider_container').css('margin-left', '0px');
        });
    }, 3500);



});