// адаптивное меню с анимацией кнопки
$('.menu-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn_active')
  $(this).toggleClass('active')
		$('.menu').fadeToggle(400)
});


$(window).scroll(function(){


	var wScroll = $(this).scrollTop();

	$('.logo').css({
		'transform' : 'translate(0px, '+ wScroll /2 +'%)'
	});
	$('.back-bird').css({
		'transform' : 'translate(0px, '+ wScroll /4 +'%)'
	});

	$('.fore-bird').css({
		'transform' : 'translate(0px, -'+ wScroll /20 +'%)'
	});


  // появление эффекта при скроле в перископе
  if( wScroll > $('.periscope').offset().top - $(window).height()){

  	$('.periscope').css({'bacground-position' : 'center'+ (wScroll - $('.periscope').offset().top) + 'px'});
  	var opacity = (wScroll - $('.periscope').offset().top + 400) / (wScroll / 5);
  	$('.promo-text').css({'opacity': opacity});
  }

  // блок блог эффекты

  if(wScroll > $('.blog-posts').offset().top - $(window).height()){
  	var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350)).toFixed();
  	$('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});
  }

});