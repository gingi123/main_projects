import { UFO } from "./UFO.js";

let aktpont:string;
let gameinterval:number;
let Timeleft:number = 20;
let spawninterval:number
let StartBtn:HTMLButtonElement = document.querySelector('#startBtn')as HTMLButtonElement;


function GenerateUFO(){
    spawninterval = setInterval(()=>{
        let randomNumber:number = Math.random();
        if (randomNumber < 0.33){
            new UFO('red',-2);
        }
        else if(randomNumber < 0.66){
            new UFO('blue',1);
        }
        else{
            new UFO('green',2);
        }
    },750)
}





function StartGame(){
    StartBtn.style.display = 'none';
    (document.querySelector('#actPoint')as HTMLSpanElement).innerHTML = '0';
    //Timeleft = 10;
    (document.querySelector('#timeLeft') as HTMLSpanElement).innerHTML = Timeleft.toString();
    gameinterval = setInterval(gameloop,1000);
    GenerateUFO();
    



}


function gameloop(){
    Timeleft--;
    (document.querySelector('#timeLeft') as HTMLSpanElement).innerHTML = Timeleft.toString();
    if (Timeleft === 0){
        Timeleft = 20;
        StartBtn.style.display = 'inline';
        aktpont = (document.querySelector('#actPoint')as HTMLSpanElement).innerHTML;
        RemoveUFO();
        alert(`Játék vége az ön pontszáma ${aktpont}`);
        (document.querySelector('#actPoint')as HTMLSpanElement).innerHTML = '0';
        clearInterval(gameinterval);
        clearInterval(spawninterval);
        
        



    }
}

function RemoveUFO(){
    let Gamearea:HTMLDivElement = document.querySelector('#gameArea') as HTMLDivElement;
    Gamearea.querySelectorAll('div').forEach(element => {
        Gamearea.removeChild(element)
    });
    
}


document.querySelector('#startBtn')?.addEventListener('click',()=>{
    StartGame();
})