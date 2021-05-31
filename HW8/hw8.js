//Тут мне помогли гугол и бывший коллега

//1
if (!("a" in window)) {
    var a = 1;
}
alert(a);

// т.к. переменная a объявлена в другой зоне видимости

//2
var b = function a(x) {
    x && a(--x);
};
alert(a);

//Ответ: Будет ошибка, что a не определена

//3
function a(x) {
    return x * 2;
}
var a;
alert(a);

//Ответ: Вернет тело функции

//4
function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);

//Ответ: 10, т.к. а присваевается значение 10 через аргумент

//5
function a() {
    alert(this);
}
a.call(null);

//Ответ: внутри this будет объект window