var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 инкремент префиксный сразу увеличивает значение
d = b++; alert(d);           // 1 инкремент постфиксный сначала вернет значение, а потом увеличит
c = (2+ ++a); alert(c);      // 5 Из 1 строки а=2, здесь получаем а=2+1=3, с=2+3=5
d = (2+ b++); alert(d);      // 4 2+2=4
alert(a);                    // 3 дважды увеличилос а на 1
alert(b);                    // 3 дважды увеличилос b на 1

var a = 2;
var x = 1 + (a *= 2);
//ответ: 5   1+(а=2*2)

function twoVar (a, b) {
    if (a >= 0 && b >= 0)
        return a - b;
    if (a < 0 && b < 0)
        return a * b;
        return a + b;
}

var a = (Math.random() * 15).toFixed(0);
function alter(a) {
    if (a == 15) {
        document.write(a);
        return;
    }
    document.write(a++ + " ");
    alter(a)
}
alter(a)


var x, y;
function sum(x, y) {
    return x + y;
}

function dif(x, y) {
    return x - y;
}

function multi(x, y) {
    return x * y;
}

function div(x, y) {
    if(y != 0)
        return x / y;
        return 0;
}

x = +prompt("write num1 ");
y = +prompt("write num2 ");
oper = prompt ("write +, -, *, /");
function mathOperation(x, y, oper) {
    switch (oper){
    case "+":
        alert(sum(x, y));
        break;
    case "-":
        alert(dif(x, y));
        break;
    case "/":
        alert(div(x, y));
        break;
    default:
        alert("error");
        break;
    }
}
mathOperation(x, y, oper)


var a = null;
var b = 0;
alert(a==b)         //false
alert(null != 0)    //true
alert(null > 0)     //false
alert(null < 0)     //false
alert(null >= 0)    //true
alert(null <= 0)    //true


function power(val, pow) {
    if (pow == 1) {
        return val;
        } else {
            return val * power(val, pow - 1);
        }
}

