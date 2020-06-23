$(document).ready(function(){

    $('#btn').on('mouseenter', function(){
        $('.header-map').toggleClass('hide')
    });


    $('.modal-btn__wrapp').on('click', function(){
        $('.modal-window__wrapp').toggleClass('hide-modal')
    });
    $('.modal-close').on('click', function(){
        $('.modal-window__wrapp').addClass('hide-modal')
    });

    $('.pulse').on('mouseenter', function(){
        $('.center-content-txt').toggleClass('hide-txt')
    });
    
   
});

$(function() {
 
    $(window).scroll(function() {
    if($(this).scrollTop() == 0) {
    $('.paralax1').fadeIn();
    } else {
    $('.paralax1').fadeOut();
    }
    });

     
    });

    $(function() {
 
        $(window).scroll(function() {
        if($(this).scrollTop() == 0) {
        $('.paralax2').fadeIn();
        } else {
        $('.paralax2').fadeOut();
        }
        });
    
         
        });

        // адаптивное меню с анимацией кнопки
$('.menu-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn_active')
  $(this).toggleClass('active')
		$('.menu').fadeToggle(400)
});
    