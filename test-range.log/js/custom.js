// range
var barre = document.querySelector('.barre'),
    range = document.querySelector('#selector');

range.value = barre.getAttribute('data-length');

range.addEventListener('input', function(e) {
    barre.setAttribute('data-length', range.value);
});

// адаптивное меню с анимацией кнопки
$('.menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active')
    $(this).toggleClass('active')
          $('.menu').fadeToggle(400)
  });

