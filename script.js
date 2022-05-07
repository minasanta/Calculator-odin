class Calculator {
    constructor(prevText,curText)
    {
        this.prevText = prevText;
        this.curText = curText;
        this.clear();
    }
    clear()
    {
        this.prevOperand = '';
        this.curOperand = '';
        this.operation = undefined;

    }
    delete()
    {
        if (this.curOperand === '') return 
        this.curOperand = this.curOperand.toString().slice(0,-1);
    }
    appendNumber(number)
    {
        if (number ==='.' && this.curOperand.includes('.')) return
        this.curOperand = this.curOperand.toString() + number.toString();
    }
    chooseOperation(operation)
    {
        if (this.curOperand === '') 
            return;
        if (this.prevOperand !== '') 
            this.compute();
        
        this.operation = operation;
        this.prevOperand = this.curOperand;
        this.curOperand = '';
    }
    compute()
    {
        let computation 
        let prev = parseFloat(this.prevOperand)
        let cur = parseFloat(this.curOperand)
        if (isNaN(prev) || isNaN(cur)) return 
        
        switch (this.operation) 
        {
            case '+':
                computation = prev + cur;
                break;
            case '-':
                computation = prev - cur;
                break;
            case '*':
                computation = prev * cur;
                break;
            case '/':
                computation = prev / cur;
                break;
            default:
                return;
        }
        this.curOperand = Math.round(computation*1000)/1000;
        this.operation = undefined;
        this.prevOperand = '';

    }

    getDisplayNumber(number)
    {
       const stringNumber = number.toString();
       const integerNumber =  parseFloat(stringNumber.split('.')[0]);
       const decmialNumber =  stringNumber.split('.')[1];
       let integerDisplay
       if(isNaN(integerNumber)) 
       {
           integerDisplay = ''
       }
       else
       {
            integerDisplay =  integerNumber.toLocaleString('en', { maximumFractionDigits: 0}) 
       }
       if (decmialNumber != null) 
       {
           return `${integerDisplay}.${decmialNumber}`
       }
       else
       {
           return integerDisplay;
       }
    }

    updateDisplay()
    {
        this.curText.innerText = this.getDisplayNumber(this.curOperand);
        if (this.operation === undefined) {this.prevText.innerText = this.getDisplayNumber(this.prevOperand);}
        else {this.prevText.innerText = `${this.getDisplayNumber(this.prevOperand)} ${this.operation}`;}
    }
}


const numberBtns = document.querySelectorAll('[data-number]');
const operationBtn = document.querySelectorAll('[data-operation]');
const equalsBtn = document.querySelector('[data-equals]');
const deleteBtn = document.querySelector('[data-delete]');
const clearBtn = document.querySelector('[data-clear]');
const prevText = document.querySelector('[data-prev-operand]');
const curText = document.querySelector('[data-cur-operand]');

const calculator = new Calculator(prevText,curText);

numberBtns.forEach(button => {
    button.addEventListener('click',() => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationBtn.forEach(button => {
    button.addEventListener('click',() => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});

equalsBtn.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
});

clearBtn.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteBtn.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
});