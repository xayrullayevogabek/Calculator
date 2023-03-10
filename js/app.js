
(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.equal-btn');
    let clear = document.querySelector('.clear');
    let clear2 = document.querySelector('.clear2');
    let delet = document.querySelector('.delete');


    buttons.forEach(function(button){
        button.addEventListener('click', function(e) { 
            let value = e.target.dataset.num
            screen.value += value
        })
    }); 

    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = ""
        }else{
            let answer = eval(screen.value)
            screen.value = answer;
        }
    })

    clear.addEventListener('click', function(e){
        screen.value = "0"
    })

    clear2.addEventListener('click', function(e){
        screen.value = "0"
    })

    delet.addEventListener('click', function(e){
        screen.value = screen.value.slice(0, -1);
    })

})();
