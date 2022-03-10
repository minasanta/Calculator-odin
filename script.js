function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function operate(op,a,b){
    a = Number(a);
    b = Number(b);
    switch(op){
        case '+': add(a,b);
        case '-': subtract(a,b);
        case 'x': multiply(a,b);
        case '/': if(b === 0){return null} else{divide(a,b)};
        default: return null;
    }
}

let a = 0;
let b = 0;
let reslut = document.querySelector('.reslut p');
let btns = Array.from(document.querySelectorAll('button'));
btns.forEach(btn => {
    btn.addEventListener('click',function (){
        if(btn.id === 'clear')
        {
            reslut.textContent = " 0 ";
            a = 0;
            b = 0;
        }
        else
        {
            reslut.textContent = btn.textContent;
        }
    });
});
