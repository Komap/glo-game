const score = document.querySelector('.score'),
start = document.querySelector('.start'),
gameArea = document.querySelector('.gameArea'),
car = document.createElement('div');
car.classList.add('car');


// объект для кнопок

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
};

const settings ={
    start: false,
    score: 0,
    speed:1
};


/*--------------РЕКУРСИЯ ----------------------*/
function startGame(){
    start.classList.add('hide');
    settings.start = true;// когда старт - тру, будет перезапускаться requestAnimationFrame() в playGame()
    gameArea.appendChild(car);
    requestAnimationFrame(playGame);
}
function playGame(){
    console.log("sdsdfs");
    if(settings.start === true){
        requestAnimationFrame(playGame);
    }
    // если кнопка будет фолз(не нажата) - код не запустится(не будет анимации)
}
/*--------------РЕКУРСИЯ ----------------------*/


// обработчик события
start.addEventListener('click', startGame);
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

function startRun(event){
    event.preventDefault();
    // console.log(event.key);
    // console.log(event);
    keys[event.key] = true;// меняется свойство на тру, т.к. по умолчанию - фолз

}

function stopRun(event){
    event.preventDefault();
    keys[event.key] = false;
}