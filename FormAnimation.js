function testInView($el){
    var wTop = $(window).scrollTop();
    var wBot = wTop + $(window).height();
    var wMid = wBot - ($(window).height()/2);
    var eTop = $el.offset().top;
    var eBot = eTop + $el.height();
    return ((eTop < wMid) && (eBot > wMid));
}
function setInView(){
    $(".input-block").each(function(){
        var $zis = $(this);
        $zis.removeClass("active");
        if(testInView($zis)){
           $zis.addClass("active"); 
        }
    });
}

function scrollToElement(el) {
  var windowHeight = $(window).height();
  var eTop = $(el).offset().top;
  var y = eTop - (windowHeight/ 2) + (windowHeight / 10);
  // window.scrollTo(0, y);
  $('html, body').animate({scrollTop: y},'50');
}

$(document).scroll(function(){
    setInView();
});
$(document).resize(function(){
    setInView();
});
$(document).ready(function(){
    setInView();
    
  $('.sb-form-q').on('click focus keypress', function(e) {
      if (!$(this).parent().hasClass('active')) {
          scrollToElement(this);
        }
    });
  
  $('.radio-q').on('click', function() {
    if (!$(this).hasClass('active')) {
        scrollToElement(this);
    }
  });
  
  // focus logic
  
  $('.radio-label').on('mousedown', function(){
    $(this).data("mouseDown", true);
    var $curr = $(this)
    setTimeout(function() {
      $curr.removeData("mouseDown");
    }, 1000);
  });

  
  $('.radio-option').on('focus', function() {
    if (!$(this).closest('.input-block').hasClass('active') && !$(this).siblings('.radio-label').data("mouseDown")) {
      scrollToElement(this);
    }
  })
  
  $('.text-question').on('focus', function() {
    $(this).prev().animate({
      fontSize: 14
    })
  })
  
  $('.text-question').on('blur', function() {
    if (!$(this).val()) {
      $(this).prev().animate({
        fontSize: 18
      })
    }
  })
  
  $(document).on('keypress', function(e) {
    if ($('.radio-q').hasClass('active')) {
      if (e.which === 121) {
        $('#yes-label').click();
      } else if (e.which === 110) {
        $('#no-label').click();
      }
    }
  });
  
  $('.textarea-q').keypress(function(event) {
    if (event.which == 13) {
      event.preventDefault();
        var s = $(this).val();
        $(this).val(s+"\n");
        this.scrollTop = this.scrollHeight;
    }
  });
  
  $('.sb-date').on('focus keypress', function() {
    if (!$(this).closest('.input-block').hasClass('active')) {
      scrollToElement(this);
    }
  })
  
  $('#q1').focus();

});