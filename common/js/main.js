$.fn.rollover = function(suffix) {
  suffix = suffix || '_on';
  var check = new RegExp(suffix + '\\.\\w+$');
  return this.each(function() {
    var img = jQuery(this);
    var src = img.attr('src');
    if (check.test(src)) return;
    var _on = src.replace(/\.\w+$/, suffix + '$&');
    jQuery('<img>').attr('src', _on);
    img.hover(
      function() { img.attr('src', _on); },
      function() { img.attr('src', src); }
    );
  });
};

$(document).ready(function () {

  var slider1 = $('.slideshow-pc').bxSlider({
        minSlides: 5,
        maxSlides: 5,
        slideWidth: 260,
        slideMargin: 0,
        auto: true,
        speed: 2000,
        easing:'linear',
        pause: 0,
        autoControls: true,
        moveSlides: 1,
        onSliderLoad: function(currentIndex) {   
          $('.slideshow-pc .js_imgover').rollover();
        }
  });
  var slider2 = $('.slideshow-sp').bxSlider({
        minSlides: 3,
        maxSlides: 3,
        slideWidth: 200,
        slideMargin: 0,
        infiniteLoop: true,
        ticker: true,
        autoHover: true,
        infiniteLoop: true,
        speed: 20000,
  });
  $(window).resize(function() {
    windowWidth = $(this).width()
        if(windowWidth >768){
            slider1.reloadSlider();
            slider2.destroySlider();
        }
        else {
          slider2.reloadSlider();
          slider1.destroySlider();
        }
        
    });

  $('.js_imgover').rollover();

   var loc = location.href;
  $('.gnav > li > a').each(function () {
      var href = $(this).attr('href');
      var str_array = href.split('/');
      href = '/' + str_array[1] + '/' + str_array[2] ;
      if (loc.indexOf(href) !== -1) {
        $(this).addClass('active');
      }
  });
     $("a[href='#top']").click(function() {
     $("html, body").animate({ scrollTop: 0 }, "slow");
     return false;
     });

    $('.menu_btn').on('click', function () {
      $('.fnav').show();
      $('.fnav_box').animate({'margin-left': '0'}, 300);
    });

    $('.close_btn, .btn_close').on('click', function () {
      $('.fnav_box').animate({'margin-left': '100%'}, 300, function () {
        $('.fnav_box').css('margin-left', '');
        $('.fnav').hide();
      });
    });

   $('.open_box').live('click', function(){
      $(this).parent().addClass('open');
      $(this).replaceWith('<p class="close_box sp"><i class="fa fa-angle-up"></i>閉じる</p>');
    });

    $('.close_box').live('click', function() {
       $(this).parent().removeClass('open');
       $(this).replaceWith('<p class="open_box sp"><i class="fa fa-angle-down fa-lg"></i>そんな方には</p>');
    });

     $('.anchor').on('click', function(e){
  
    var Hash = $(this.hash);
    var HashOffset = $(Hash).offset().top-30;
    $("html,body").animate({
      scrollTop: HashOffset
    }, 1000);
    return false;
  });

      $('.btn_on').live('click', function(){
      $('.cont01 .c-block02').addClass('on');
      $(this).replaceWith('<span class="btn_off"><img src="/medi-caree/common/img/examination/sp_btn2015_off.png" height="100" width="600" alt="" class="sp"></span>');
    });

    $('.btn_off').live('click', function() {
       $('.cont01 .c-block02').removeClass('on');
       $(this).replaceWith('<p class="bt_open sp"><img src="common/img/sp_tlt_cont01_off.png" height="112" width="640" alt=""></p>');
    });

    //On off btn02 exam

      $('.btn02_on').live('click', function(){
      $('.cont02 .c-block02').addClass('on');
      $(this).replaceWith('<span class="btn02_off"><img src="/medi-caree/common/img/examination/sp_btn02_off.png" height="100" width="600" alt="" class="sp"></span>');
    });

    $('.btn02_off').live('click', function() {
       $('.cont02 .c-block02').removeClass('on');
       $(this).replaceWith('<span class="btn02_on"><img src="/medi-caree/common/img/examination/sp_btn02_on.png" height="100" width="600" alt="" class="sp"></span>');
    });

});

 
 