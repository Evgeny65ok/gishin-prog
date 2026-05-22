function calc() {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const op = document.getElementById('operation').value;
    const resField = document.getElementById('result');

    if (isNaN(n1) || isNaN(n2)) {
        resField.value = 'Введите числа';
        return;
    }

    let result;

    switch (op) {
        case '+': result = n1 + n2; break;
        case '-': result = n1 - n2; break;
        case '*': result = n1 * n2; break;
        case '/': 
            result = n2 === 0 ? 'Деление на 0!' : n1 / n2; 
            break;
        case '%': 
            result = n2 === 0 ? 'Ошибка' : n1 % n2; 
            break;
    }


    
    resField.value = result;
}
