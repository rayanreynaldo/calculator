const key = (evt) => {

    const current = document.getElementById('current')
    
    let key = evt.innerText

    try {
       
        if (
            key != '=' &&
            key != 'C' &&
            key != '*' &&
            key != '/' &&
            key != '√' &&
            key != "x²" &&
            key != "%" &&
            key != "<=" &&
            key != "±" &&
            key != "sin" &&
            key != "cos" &&
            key != "tan" &&
            key != "log" &&
            key != "ln" &&
            key != "x^" &&
            key != "x!" &&
            key != "π" &&
            key != "e" &&
            key != "rad" &&
            key != "∘")
        {
          current.value += key;
    
        } else if (key === '=') {
    
          if (current.value.indexOf('^') > -1) {
    
            let base = current.value.slice(0, current.value.indexOf('^'));
            let exponent = current.value.slice(current.value.indexOf('^') + 1);
            current.value = eval('Math.pow(' + base + ',' + exponent + ')');
    
          } else {
            current.value = eval(current.value);
          }
    
        } else if (key === 'C') {
          current.value = '';
        } else if (key === '*') {
          current.value += '*';
        } else if (key === '/') {
          current.value += '/';
        } else if (key === '+') {
          current.value += '+';
        } else if (key === '-') {
          current.value += '-';
        } else if (key === '±') {
          if (current.value.charAt(0) === '-') {
            current.value = current.value.slice(1);
          } else {
            current.value = '-' + current.value;
          }
        } else if (key === '<=') {
          current.value = current.value.substring(0, current.value.length - 1);
        } else if (key === '%') {
          current.value = current.value / 100;
        } else if (key === 'π') {
          current.value = current.value * Math.PI;
        } else if (key === 'x²') {
          current.value = eval(current.value * current.value);
        } else if (key === '√') {
          current.value = Math.sqrt(current.value);
        } else if (key === 'sin') {
          current.value = Math.sin(current.value);
        } else if (key === 'cos') {
          current.value = Math.cos(current.value);
        } else if (key === 'tan') {
          current.value = Math.tan(current.value);
        } else if (key === 'log') {
          current.value = Math.log10(current.value);
        } else if (key === 'ln') {
          current.value = Math.log(current.value);
        } else if (key === 'x^') {
          current.value += '^';
        } else if (key === 'x!') {
          let number = 1;
          if (current.value === 0) {
            current.value = '1';
          } else if (current.value < 0) {
            current.value = NaN;
          } else {
            for (let i = current.value; i > 0; i--) {
              number *= i;
            }
            current.value = number;
          }
        } else if (key === 'e') {
          current.value = Math.exp(current.value);
        } else if (key === 'rad') {
          current.value = current.value * (Math.PI / 180);
        } else if (key === '∘') {
          current.value = current.value * (180 / Math.PI);
        }
    } catch (error) {
        current.value = ''
        current.placeholder = '0'
    }
}