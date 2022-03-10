let a = '';
let b = '';
let operation = '';
const reslut = document.querySelector('.reslut p');
const btns = Array.from(document.querySelectorAll('button'));
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return b-a;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return b/a;
}
function operate(op,a,b){
    let num1 = parseFloat(a);
    let num2 = parseFloat(b);
    switch(op){
        case '+': a = add(num1,num2);break;
        case '-': a = subtract(num1,num2);break;
        case '*': a = multiply(num1,num2);break;
        case '/': if(b === 0){reslut.textContent = 'Error! , click AC and try again'; } else{ a = divide(num1,num2)};break;
        default: return null;
    }
    a = Math.round(a*1000)/1000;
    reslut.textContent = a;
    return a;
}
function update(e){
    reslut.textContent += e.target.textContent.toString();
}
function appendNumber(e){
    let number = e.target.textContent.toString();
    a+=number;
}

function appendOperation(e){
    if(operation!=='')
        a = operate(operation,a,b);
    b = a;
    operation = e.target.textContent.toString();
    a = '';
}

btns.forEach(btn => {
    btn.addEventListener('click',function (e) {
        if(btn.className === 'op')
        {
            appendOperation(e);
            update(e);
        }
        else if (btn.id === 'clear')
        {
            reslut.textContent='';
            a = '';
            b = '';
            operation = '';
        }
        else if (btn.id === 'equal')
        {
            if(a === ''|| b === ''|| operation==='')
                reslut.textContent='Error! , click AC & try again';
            else
                a = operate(operation,a,b);
        }
        else
        {
            appendNumber(e);
            update(e);
        }
    });
});
