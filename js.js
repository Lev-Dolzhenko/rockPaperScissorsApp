let options = {
    0: 'Ножницы',
    1: 'Бумага',
    2: 'Камень'
}

const btnStart = document.querySelector('.btn-start');
const btnAgain = document.querySelector('.btn-again')
const containerChoice = document.querySelector('.container__choice')
const containerInfo = document.querySelector('.container__info');

const paperChoice = document.querySelector('.paper-block');
const rockChoice = document.querySelector('.rock-block');
const scissorsChoice = document.querySelector('.scissors-block')

const myOptions = document.querySelectorAll('.choice')
let myOption = null;

const infoTitle = document.querySelector('.info__title');

for (let i = 0; i < myOptions.length; i++) {
    myOptions[i].addEventListener('click', function () {
        if (myOptions[i].classList.contains('focused')) {
            myOptions[i].classList.remove('focused');
            myOption = null;
        } else {
            for (let j = 0; j < myOptions.length; j++) {
                if (j !== i) {
                    myOptions[j].classList.remove('focused');
                }
            }
            myOptions[i].classList.add('focused')
            myOption = myOptions[i].getAttribute('name');
        }
        if(myOption === null) {
            btnStart.setAttribute("disabled", "disabled");
        } else {
            btnStart.removeAttribute("disabled");
        }
    })
}

btnStart.setAttribute("disabled", "disabled");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

btnStart.addEventListener('click', function () {
    let botOption = options[getRandomInt(3)];
    let result = '';
    if (myOption === 'Ножницы' && botOption === 'Бумага') {
        result = 'Победа!';
    } else if (myOption === 'Ножницы' && botOption === 'Ножницы') {
        result = 'Ничья!';
    } else if (myOption === 'Ножницы' && botOption === 'Камень') {
        result = 'Поражение!';
    } else if (myOption === 'Камень' && botOption === 'Ножницы') {
        result = 'Победа!';
    } else if (myOption === 'Камень' && botOption === 'Камень') {
        result = 'Ничья!';
    } else if (myOption === 'Камень' && botOption === 'Бумага') {
        result = 'Поражение!';
    } else if (myOption === 'Бумага' && botOption === 'Камень') {
        result = 'Победа!';
    } else if (myOption === 'Бумага' && botOption === 'Бумага') {
        result = 'Ничья!';
    } else if (myOption === 'Бумага' && botOption === 'Ножницы') {
        result = 'Поражение!';
    }

    containerChoice.classList.add('none');
    containerInfo.classList.remove('none');
    infoTitle.textContent = `${result}`
})


btnAgain.addEventListener('click', function () {
    containerChoice.classList.remove('none');
    containerInfo.classList.add('none');
    infoTitle.textContent = '';
    btnStart.setAttribute("disabled", "disabled");

    myOptions.forEach(elem => elem.classList.remove('focused'));
})


