import { game } from "./game.js";
window.addEventListener('load',()=>{
    const buildTablero = () =>{
        var buttonsGame = document.querySelector('#game');
        for (let i = 1; i <= 42; i++) {
            var casilla = document.createElement('button');
            casilla.classList.add('casilla');
            casilla.setAttribute("id", `no${i}`);
            buttonsGame.append(casilla);
        };
    };

    var btnStart = document.querySelector('#btn-start');
    btnStart.addEventListener('click', () =>{
        //-----------Acomodo de botones
        btnStart.style.display = 'none';
        document.querySelector('#tablero').classList.remove('container-btn');
        document.querySelector('.header-tablero').style.display = 'grid';
        document.querySelector('.container-btn-reboot').style.display = 'flex';
        document.querySelector('#game').style.display = 'grid';

        buildTablero();

        game();
    });
});