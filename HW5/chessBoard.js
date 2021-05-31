var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//доска
ctx.fillStyle = 'Maroon';
ctx.strokeRect(100,100,400,400);
ctx.strokeRect(50,50,500,500);
for (var i = 1.5; i < 5; i++) {
    ctx.fillRect(i * 100, 100, 50, 50);
}
for (var i = 1;  i < 5; i++) {
    ctx.fillRect(i * 100, 150, 50, 50);
}
for (var i = 1.5; i < 5; i++) {
    ctx.fillRect(i * 100, 200, 50, 50);
}
for (var i = 1;  i < 5; i++) {
    ctx.fillRect(i * 100, 250, 50, 50);
}
for (var i = 1.5; i < 5; i++) {
    ctx.fillRect(i * 100, 300, 50, 50);
}
for (var i = 1;  i < 5; i++) {
    ctx.fillRect(i * 100, 350, 50, 50);
}
for (var i = 1.5; i < 5; i++) {
    ctx.fillRect(i * 100, 400, 50, 50);
}
for (var i = 1;  i < 5; i++) {
    ctx.fillRect(i * 100, 450, 50, 50);
}
ctx.font="30px serif";
ctx.fillStyle = 'black';
//буквы верх
ctx.fillText("A", 115,85);
ctx.fillText("B", 165,85);
ctx.fillText("C", 215,85);
ctx.fillText("D", 265,85);
ctx.fillText("E", 315,85);
ctx.fillText("F", 365,85);
ctx.fillText("G", 415,85);
ctx.fillText("H", 465,85);
//буквы низ
ctx.fillText("A", 115,535);
ctx.fillText("B", 165,535);
ctx.fillText("C", 215,535);
ctx.fillText("D", 265,535);
ctx.fillText("E", 315,535);
ctx.fillText("F", 365,535);
ctx.fillText("G", 415,535);
ctx.fillText("H", 465,535);
//цифры слева
ctx.fillText("8", 70,135);
ctx.fillText("7", 70,185);
ctx.fillText("6", 70,235);
ctx.fillText("5", 70,285);
ctx.fillText("4", 70,335);
ctx.fillText("3", 70,385);
ctx.fillText("2", 70,435);
ctx.fillText("1", 70,485);
//цифры справа
ctx.fillText("8", 515,135);
ctx.fillText("7", 515,185);
ctx.fillText("6", 515,235);
ctx.fillText("5", 515,285);
ctx.fillText("4", 515,335);
ctx.fillText("3", 515,385);
ctx.fillText("2", 515,435);
ctx.fillText("1", 515,485);
//черные фигуры
ctx.fillText('♜', 110,135);
ctx.fillText('♞', 160,135);
ctx.fillText('♝', 210,135);
ctx.fillText('♛', 260,135);
ctx.fillText('♚', 310,135);
ctx.fillText('♝', 360,135);
ctx.fillText('♞', 410,135);
ctx.fillText('♜', 460,135);
//черные пешки
ctx.fillText('♟', 110,185);
ctx.fillText('♟', 160,185);
ctx.fillText('♟', 210,185);
ctx.fillText('♟', 260,185);
ctx.fillText('♟', 310,185);
ctx.fillText('♟', 360,185);
ctx.fillText('♟', 410,185);
ctx.fillText('♟', 460,185);
//белые фигуры
ctx.fillStyle = 'orange';
ctx.fillText('♜', 110,485);
ctx.fillText('♞', 160,485);
ctx.fillText('♝', 210,485);
ctx.fillText('♛', 260,485);
ctx.fillText('♚', 310,485);
ctx.fillText('♝', 360,485);
ctx.fillText('♞', 410,485);
ctx.fillText('♜', 460,485);
//белые пешки
ctx.fillText('♟', 110,435);
ctx.fillText('♟', 160,435);
ctx.fillText('♟', 210,435);
ctx.fillText('♟', 260,435);
ctx.fillText('♟', 310,435);
ctx.fillText('♟', 360,435);
ctx.fillText('♟', 410,435);
ctx.fillText('♟', 460,435);