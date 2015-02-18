$(function($) {
  $(document).ready(function() {
    $('.diamond').mouseenter(function() {
      set_diamond_active(this);
    });
    $('.diamond').click(function() {
      set_diamond_active(this);
    });
  });
});

function set_diamond_active(diamond) {
  $('.diamond_active').removeClass('diamond_active');
  $(diamond).addClass('diamond_active');
}

$(function($) {
  $(document).ready(function() {
    $('.background_topic1').hover(function() {
        $('.background_topic2, .background_topic3').css("opacity", ".3");
      },
      function() {
        $('.background_topic2, .background_topic3').css("opacity", "1");
      });
    $('.background_topic2').hover(function() {
        $('.background_topic1, .background_topic3').css("opacity", ".3");
      },
      function() {
        $('.background_topic1, .background_topic3').css("opacity", "1");
      });
    $('.background_topic3').hover(function() {
        $('.background_topic1, .background_topic2').css("opacity", ".3");
      },
      function() {
        $('.background_topic1, .background_topic2').css("opacity", "1");
      });
  });
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    var target = $(this).attr('href');
    // alert(target);
    $(target).animatescroll({scrollSpeed:1000,easing:'easeInOutSine'});
    return false;

  });
});