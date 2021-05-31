var event, ok, log = [], steps;

function questionMechanic(question, qAmount, answ1, answ2) {
     let que = {};
     do {
         ok = false;
         event = +prompt(question + answ1 + answ2 + '-1 - Выход из игры');
         if (event == -1) {
             break;
         }
         else {
             ok = isAnswer(qAmount, event);
             if(isAnswer(qAmount, event)){
                 que['question'] = question;
                 if (event == 1) {
                     que['answer'] = answ1;
                 } else if (event == 2) {
                     que['answer'] = answ2;
                 }
                 log.push(que);
             }
         }
     } while (!ok);
}

function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}

function startGame() {
    log.length = 0;
    questionMechanic(works.a00, works.a0, works.a1, works.a2);
    switch (event) {
        case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
            questionMechanic(works.b00, works.b0, works.b1, works.b2);
            switch (event) {
                case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                    questionMechanic(works.d00, works.d0, works.d1, works.d2);
                    break;
                case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                    questionMechanic(works.d00, works.d0, works.d1, works.d2);
                    break;
                case -1: // Второе действие
                    break;
                default:
                    alert('Ошибка');
            }
            break;
        case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
            questionMechanic(works.c00, works.c0, works.c1, works.c2);
            switch (event) {
                case 1: // Второе действие
                    questionMechanic(works.d00, works.d0, works.d1, works.d2);
                    break;
                case 2: // Второе действие
                    questionMechanic(works.d00, works.d0, works.d1, works.d2);
                    break;
                case -1: // Второе действие
                    break;
                default:
                    alert('Ошибка');
            }
            break;
        case -1: // Первое действие
            break;
        default:
            alert('Ошибка');
    }
    alert('Спасибо за игру');
    console.log(log);
    if (log.length > 0) {
        steps = 'Было записано ' + log.length + ' шаг(а) квеста <br>' +
                    '<label>Выберите какой шаг вы хотите посмотерть введя от 1 до ' + log.length + ':</label>' +
                    '<input type="number" class="step" min="1" max="' + log.length + '" step="1">' +
                    '<button onclick="checkStep()">Узнать вопрос и ответ</button>';
        document.getElementsByClassName("steps")[0].innerHTML = steps;
    }
}

function checkStep() {
    let step = document.getElementsByClassName("step")[0].value
    steps += '<hr><p>Вопрос на шаге ' + step + ': ' + log[step-1].question + '</p>' +
             '<p>Ответ на шаге ' + step + ': ' + log[step-1].answer + '</p>';
    document.getElementsByClassName("steps")[0].innerHTML = steps;
    if (step > 0) {
        document.getElementsByClassName("gameButton")[0].innerHTML = '<button onclick="startGame()">Играть</button>' +
                                                                                 '<button onclick="clearSteps()">Очистить шаги</button>'
    }

}

function clearSteps(){
    document.getElementsByClassName("steps")[0].innerHTML = '';
    document.getElementsByClassName("gameButton")[0].innerHTML = '<button onclick="startGame()">Играть</button>';
}