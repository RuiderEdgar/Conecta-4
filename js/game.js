//Get columns
var turno = true;

const event = (column)=>{
    for (let i = 0; i < column.length; i++) {
        column[i].addEventListener('click', function () {
            if (turno) {
                /*LLenado de las fichas */
                for (let i = 5; i >= 0 ; i--) {
                    const element = column[i];
                    if (element.style.background == '') {
                        element.style.background = 'red';
                        break; //importante el break para romper el ciclo del for y que no siga llenando toda la columna
                    };  
                };
                /* para el cambio de turno */
                document.querySelector('#turno').innerHTML = 'Yellow Player Turn.';
                document.querySelector('#turno').style.background = 'yellow';
                document.querySelector('#turno').style.color = 'black';
                turno = false;
            }else{
                /*LLenado de las fichas */
                for (let i = 5; i >= 0 ; i--) {
                    const element = column[i];
                    if (element.style.background == '') {
                        element.style.background = 'yellow';
                        break; //importante el break para romper el ciclo del for y que no siga llenando toda la columna
                    };  
                };
                /* para el cambio de turno */
                document.querySelector('#turno').innerHTML = 'Red Player Turn.';
                document.querySelector('#turno').style.background = 'red';
                document.querySelector('#turno').style.color = 'white';

                turno = true;
            }
        });
    }
}
export const game = () =>{
    /*-------------Tablero-------------- */
    const columns = {
        column1: [
            document.querySelector('#no1'),
            document.querySelector('#no8'),
            document.querySelector('#no15'),
            document.querySelector('#no22'),
            document.querySelector('#no29'),
            document.querySelector('#no36')
        ],
        column2: [
            document.querySelector('#no2'),
            document.querySelector('#no9'),
            document.querySelector('#no16'),
            document.querySelector('#no23'),
            document.querySelector('#no30'),
            document.querySelector('#no37')
        ],
        column3: [
            document.querySelector('#no3'),
            document.querySelector('#no10'),
            document.querySelector('#no17'),
            document.querySelector('#no24'),
            document.querySelector('#no31'),
            document.querySelector('#no38')
        ],
        column4: [
            document.querySelector('#no4'),
            document.querySelector('#no11'),
            document.querySelector('#no18'),
            document.querySelector('#no25'),
            document.querySelector('#no32'),
            document.querySelector('#no39')
        ],
        column5: [
            document.querySelector('#no5'),
            document.querySelector('#no12'),
            document.querySelector('#no19'),
            document.querySelector('#no26'),
            document.querySelector('#no33'),
            document.querySelector('#no40')
        ],
        column6: [
            document.querySelector('#no6'),
            document.querySelector('#no13'),
            document.querySelector('#no20'),
            document.querySelector('#no27'),
            document.querySelector('#no34'),
            document.querySelector('#no41')
        ],
        column7: [
            document.querySelector('#no7'),
            document.querySelector('#no14'),
            document.querySelector('#no21'),
            document.querySelector('#no28'),
            document.querySelector('#no35'),
            document.querySelector('#no42')
        ],
    };
    /*-------------Tablero-------------- */

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