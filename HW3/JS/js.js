// задание 1
var arr = [];
var end = 1;
while (end < 100) {
    end++;
    arr.push(end);
}
var a = 2;
var b = 2;
while (a <= 100) {
    a += b;
    arr.splice(arr.indexOf(a), 1);
}

a = 4;
b = 3;
while (a < 100) {
    if (a % b === 0 && arr.indexOf(a) !== -1) {
        arr.splice(arr.indexOf(a), 1);
    } else {
        a++;
    }
}

a = 6;
b = 5;
while (a < 100) {
    if (a % b === 0 && arr.indexOf(a) !== -1) {
        arr.splice(arr.indexOf(a), 1);
    } else {
        a++;
    }
}

a = 8;
b = 7;
while (a < 100) {
    if (a % b === 0 && arr.indexOf(a) !== -1) {
        arr.splice(arr.indexOf(a), 1);
    } else {
        a++;
    }
}

console.log(arr);

//задание 2

var basket_price = 0;
Basket = [{
    name: 'Onion',
    price: 22
}, {
    name: 'Olive oil',
    price: 250
}];
Basket.push({
    name: 'Eggs',
    price: 90
});

function countBasketPrice(x) {
    for (i = 0; i < Basket.length; i++) {
        basket_price = basket_price + Basket[i].price;
    }
    return basket_price;
}
document.write('<h2>In busket:</h2>');
for (i = 0; i < Basket.length; i++) {
    document.write(Basket[i].name + ' — ' + Basket[i].price + ' руб</br>');
}
document.write('</br><b>Price total: ' + countBasketPrice(Basket) + '</b>');


//задание 3

//не понял

//задание 4

console.log('======== 4 задание ========');
for (let i = 0; i < 10; console.log(i++)) {}

//задание 5

console.log('======== 5 задание ========');
let row = 'x';
for (let i = 0; i < 20; i++) {
    console.log(row);
    row += 'x';
}

//1