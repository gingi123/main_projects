var _a;
import { UFO } from "./UFO.js";
let aktpont;
let gameinterval;
let Timeleft = 20;
let spawninterval;
let StartBtn = document.querySelector('#startBtn');
function GenerateUFO() {
    spawninterval = setInterval(() => {
        let randomNumber = Math.random();
        if (randomNumber < 0.33) {
            new UFO('red', -2);
        }
        else if (randomNumber < 0.66) {
            new UFO('blue', 1);
        }
        else {
            new UFO('green', 2);
        }
    }, 750);
}
function StartGame() {
    StartBtn.style.display = 'none';
    document.querySelector('#actPoint').innerHTML = '0';
    //Timeleft = 10;
    document.querySelector('#timeLeft').innerHTML = Timeleft.toString();
    gameinterval = setInterval(gameloop, 1000);
    GenerateUFO();
}
function gameloop() {
    Timeleft--;
    document.querySelector('#timeLeft').innerHTML = Timeleft.toString();
    if (Timeleft === 0) {
        Timeleft = 20;
        StartBtn.style.display = 'inline';
        aktpont = document.querySelector('#actPoint').innerHTML;
        RemoveUFO();
        alert(`Játék vége az ön pontszáma ${aktpont}`);
        document.querySelector('#actPoint').innerHTML = '0';
        clearInterval(gameinterval);
        clearInterval(spawninterval);
    }
}
function RemoveUFO() {
    let Gamearea = document.querySelector('#gameArea');
    Gamearea.querySelectorAll('div').forEach(element => {
        Gamearea.removeChild(element);
    });
}
(_a = document.querySelector('#startBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    StartGame();
});
