// ハンバーガーメニュー
$('.burger-btn').on('click', function(){
    $('.burger-btn').toggleClass('close');
    $('.header-nav-wrapper').fadeToggle(500);
    $('body').toggleClass('noscroll');
});

if( $(window).width() < 768){
    $('.header-nav-item > a').on('click',function(){
        $('.header-nav-wrapper').fadeOut(500);
        $('.burger-btn').removeClass('close');
        $('body').removeClass('noscroll');
    });
}

  //ファーストビューのslider
$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    fade: true,
    cssEase: 'linear'
});

//スクロールアニメーション
AOS.init({
    offset: 300,
    delay: 100,
    duration: 800,
    easing: 'ease-in',
    once: true,
});

// ページ内スクロール
if( $(window).width() > 768){
    $('a[href^="#"]').click(function () {
        const speed = 600;
        // ヘッダー分のずれを考慮
        var diff = $(".header-inner").innerHeight();
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top - diff;
        $("body,html").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
}

//ローディング
$(function () {
    const h = $(window).height();
    $("#loader-bg ,#loader").height(h).css("display", "block"); //ローディング画像を表示
});
    $(window).on("load", function () {
    // 読み込み完了したら実行する
    $("#loader").delay(600).fadeOut(1300); // ローディングをフェードアウト
    $("#loader-bg").delay(900).fadeOut(1000); // 背景色をフェードアウト
});

// ページトップ
$(function() {
    var pageTop = $('#js-scroll-fadeIn');

    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            pageTop.addClass('is-fadeIn')
        } else {
            pageTop.removeClass('is-fadeIn');
        }
    });
    pageTop.on('click', function(){
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

// スティッキーヘッダー
var navPos = jQuery( '#global-nav' ).offset().top; // グローバルメニューの位置
var navHeight = jQuery( '#global-nav' ).outerHeight(); // グローバルメニューの高さ
var fvHeight = jQuery('.fv').outerHeight();
jQuery( window ).on( 'scroll', function() {
    if ( jQuery( this ).scrollTop() > navPos + fvHeight ) {
    jQuery( 'body' ).css( 'padding-top', navHeight );
    jQuery( '#global-nav' ).addClass( 'm_fixed' );
    } else {
    jQuery( 'body' ).css( 'padding-top', 0 );
    jQuery( '#global-nav' ).removeClass( 'm_fixed' );
    }
});