window.addEventListener('load',()=>{
    const buildTablero = () =>{
    };

    var btnStart = document.querySelector('#btn-start');
    btnStart.addEventListener('click', () =>{
        //-----------Acomodo de botones
        btnStart.style.display = 'none';
        document.querySelector('#tablero').classList.remove('container-btn');
        document.querySelector('.header-tablero').style.display = 'block';
        document.querySelector('.container-btn-reboot').style.display = 'flex';
    });
});