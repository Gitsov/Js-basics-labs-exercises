function calculation(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let symbol = input[2];
    let result = 0;
    if (symbol == "+") {
        result = a + b
        if (result % 2 == 0) {
            console.log(`${a} ${symbol} ${b} = ${result} - even`);
        } else {
            console.log(`${a} ${symbol} ${b} = ${result} - odd`);
        }
    } else if (symbol == "-") {
        result = a - b
        if (result % 2 == 0) {
            console.log(`${a} ${symbol} ${b} = ${result} - even`);
        } else {
            console.log(`${a} ${symbol} ${b} = ${result} - odd`);
        }
    } else if (symbol == "*") {
        result = a * b
        if (result % 2 == 0) {
            console.log(`${a} ${symbol} ${b} = ${result} - even`);
        } else {
            console.log(`${a} ${symbol} ${b} = ${result} - odd`);
        }
    } else if (symbol == "/") {
        result = a / b
        if (a == "0" || b == "0") {
            console.log(`Cannot divide ${a} by zero`);
        } else if (result % 2 == 0) {
            console.log(`${a} ${symbol} ${b} = ${result.toFixed(2)}`);
        } else {
            console.log(`${a} ${symbol} ${b} = ${result.toFixed(2)}`);
        }
    } else if (symbol == "%") {
        result = a % b
        if (a == "0" || b == "0") {
            console.log(`Cannot divide ${a} by zero`);
        } else if (result % 2 == 0) {
            console.log(`${a} ${symbol} ${b} = ${result}`);
        } else {
            console.log(`${a} ${symbol} ${b} = ${result}`);
        }
    }
}
calculation(["7",

"3",

"*"])