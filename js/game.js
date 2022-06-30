var turno = true;
var numCasillas = 42;

//Get columns
const event = (column)=>{
    for (let i = 0; i < column.length; i++) {
        column[i].casilla.addEventListener('click', function () {
                if (turno) {
                    /*LLenado de las fichas */
                    for (let i = 5; i >= 0 ; i--) {
                        const element = column[i];
                        if (element.casilla.style.background == '') {
                            element.casilla.style.background = 'red';
                            element.color = 'red';
    
                            // Contador de casillas 
                            numCasillas --;
    
                            /* para el cambio de turno */
                            document.querySelector('#turno').innerHTML = 'Yellow Player Turn';
                            document.querySelector('.turno').classList.add('yellow');
                            document.querySelector('.turno').classList.remove('red');
                            turno = false;
                            break; //importante el break para romper el ciclo del for y que no siga llenando toda la columna
                        };  
                    };
                }else{
                    /*LLenado de las fichas */
                    for (let i = 5; i >= 0 ; i--) {
                        const element = column[i];
                        if (element.casilla.style.background == '') {
                            element.casilla.style.background = 'yellow';
                            element.color = 'yellow';

                            // Contador de casillas
                            numCasillas --;
                            
                            /* para el cambio de turno */
                                /* y saber si las casillas se llenaron en caso de empate */
                            if (numCasillas == 0) {
                                document.querySelector('#turno').innerHTML = 'Draw';
                                document.querySelector('.turno').classList.add('draw');
                                document.querySelector('.turno').classList.remove('yellow');
                            }else{
                                document.querySelector('#turno').innerHTML = 'Red Player Turn';
                                document.querySelector('.turno').classList.add('red');
                                document.querySelector('.turno').classList.remove('yellow');
                            }
    
                            turno = true;
                            break; //importante el break para romper el ciclo del for y que no siga llenando toda la columna
                        };  
                    };
                    
                }
            
        });
    }
}
export const game = () =>{
        /*-------------Tablero modificado con su color-------------- */
    const columns = {
        column1: [
            {casilla: document.querySelector('#no1'), color: 'white'},
            {casilla: document.querySelector('#no8'), color: 'white'},
            {casilla: document.querySelector('#no15'), color: 'white'},
            {casilla: document.querySelector('#no22'), color: 'white'},
            {casilla: document.querySelector('#no29'), color: 'white'},
            {casilla: document.querySelector('#no36'), color: 'white'},
        ],
        column2: [
            {casilla: document.querySelector('#no2'), color: 'white'},
            {casilla: document.querySelector('#no9'), color: 'white'},
            {casilla: document.querySelector('#no16'), color: 'white'},
            {casilla: document.querySelector('#no23'), color: 'white'},
            {casilla: document.querySelector('#no30'), color: 'white'},
            {casilla: document.querySelector('#no37'), color: 'white'},
        ],
        column3: [
            {casilla: document.querySelector('#no3'), color: 'white'},
            {casilla: document.querySelector('#no10'), color: 'white'},
            {casilla: document.querySelector('#no17'), color: 'white'},
            {casilla: document.querySelector('#no24'), color: 'white'},
            {casilla: document.querySelector('#no31'), color: 'white'},
            {casilla: document.querySelector('#no38'), color: 'white'},
        ],
        column4: [
            {casilla: document.querySelector('#no4'), color: 'white'},
            {casilla: document.querySelector('#no11'), color: 'white'},
            {casilla: document.querySelector('#no18'), color: 'white'},
            {casilla: document.querySelector('#no25'), color: 'white'},
            {casilla: document.querySelector('#no32'), color: 'white'},
            {casilla: document.querySelector('#no39'), color: 'white'},
        ],
        column5: [
            {casilla: document.querySelector('#no5'), color: 'white'},
            {casilla: document.querySelector('#no12'), color: 'white'},
            {casilla: document.querySelector('#no19'), color: 'white'},
            {casilla: document.querySelector('#no26'), color: 'white'},
            {casilla: document.querySelector('#no33'), color: 'white'},
            {casilla: document.querySelector('#no40'), color: 'white'},
        ],
        column6: [
            {casilla: document.querySelector('#no6'), color: 'white'},
            {casilla: document.querySelector('#no13'), color: 'white'},
            {casilla: document.querySelector('#no20'), color: 'white'},
            {casilla: document.querySelector('#no27'), color: 'white'},
            {casilla: document.querySelector('#no34'), color: 'white'},
            {casilla: document.querySelector('#no41'), color: 'white'},
        ],
        column7: [
            {casilla: document.querySelector('#no7'), color: 'white'},
            {casilla: document.querySelector('#no14'), color: 'white'},
            {casilla: document.querySelector('#no21'), color: 'white'},
            {casilla: document.querySelector('#no28'), color: 'white'},
            {casilla: document.querySelector('#no35'), color: 'white'},
            {casilla: document.querySelector('#no42'), color: 'white'},
        ],
    };
        /*-------------Tablero modificado-------------- */
    
    /*----LLeado de fichas----- */
    

        event(columns.column1);
        event(columns.column2);
        event(columns.column3);
        event(columns.column4);
        event(columns.column5);
        event(columns.column6);
        event(columns.column7);
    

    console.log(columns.column2);
    /*----LLeado de fichas----- */
};