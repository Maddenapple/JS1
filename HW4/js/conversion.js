function conversion (){
    let sNum = document.getElementsByClassName("number")[0].value,
        num = +sNum,
        output = {};
    if (num >= 0 && num <= 999) {
        let izmerenie = ['единицы', 'десятки', 'сотни'],
            izmIndex = 0,
            htmlTotal = "";

        num = sNum.split("");

        for (let i = num.length - 1; i >= 0; i--) {
            htmlTotal += izmerenie[izmIndex] + ": " + num[i] + "<br>";
            output[izmerenie[izmIndex]] = num[i];
            izmIndex++;
        }
        document.getElementsByClassName("total")[0].innerHTML = htmlTotal;
    }else{
        document.getElementsByClassName("total")[0].innerHTML = "<span style='color: red;'>ERROR: Введите корректное значение (от 0 до 999) в поле выше!</span>";
    }
    console.log(output);
}