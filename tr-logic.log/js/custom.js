// left menu

function leftMenuShow(){
	document.getElementById('sidebar-left').classList.toggle('active-left');
}
// right menu
function rightMenuShow(){
	document.getElementById('sidebar-right').classList.toggle('active-right');
}

// fixed menu

block_pos = $('.action_right').offset().top;
// определяем первоначальное положение блока
wrap_pos = $('.content').offset().top; 
// позиция контейнера
block_height = $('.action_right').outerHeight(); 
// высота блока
wrap_height = $('.content').outerHeight(); 
// высота контейнера
block_width = $('.action_right').outerWidth(); 
pos_absolute = wrap_pos + wrap_height - block_height;
// ширина блока
$(window).scroll(function () {
    if ($(window).scrollTop() > pos_absolute) {
// Если страницу прокрутили дальше, чем высота родителя минус высота фикс. блока, то стопорим блок
        $('.action_right').css({
            'position': 'absolute',
            'top': wrap_height - block_height,
            'width': block_width
        });
    }
    else if ($(window).scrollTop() > block_pos) { 
// Если страницу прокрутили дальше, чем находится наш блок, то мы этот блок фиксируем и отображаем сверху
        $('.action_right').css({
            'position': 'fixed',
            'top': '30px',
            'right': '202px',
            'width': block_width
        }); 
    } else {
// Если же позиция скролла меньше (выше), чем наш блок, то возвращаем все назад
        $('.action_right').css({
            'position': 'static'
        }); 
    }
})