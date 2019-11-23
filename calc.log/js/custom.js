function calc() {
    //получаем ссылку на элемент Select (1)
    var type_design = document.getElementById("type_design");
    //получаем ссылку на элемент input (2)
    var count = document.getElementById("count");
    //получаем ссылку на элемент c id result, в него будем писать стоимость 
    var result = document.getElementById("result"); 
    var result2 = document.getElementById("result2"); 
    var price = 0;

    price += parseInt(type_design.options[type_design.selectedIndex].value || 0);
   
    price = parseInt(count.value) * price || 0;

    result.innerHTML = price + ' Руб';
    result2 = result2.innerHTML = parseFloat(price / 100 * 0.39).toFixed(2) + ' Руб';
}


count.onkeypress= function(event){
     event= event || window.event;
     if (event.charCode && (event.charCode < 48 || event.charCode > 57))// проверка на event.charCode - чтобы пользователь мог нажать backspace, enter, стрелочку назад...
      return false;
      
    };
    
