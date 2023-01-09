show = false;

function searchImg() {
    const input = document.getElementById("search-input");
    const number = input ? input.value : '';

    const imgItem = document.getElementById("resultImg");
    input.value = '';

    if (number > 0 && number < 67) {
        imgItem.innerHTML = `<img src="./img/casillas/${number}.png"></img>`;
    } else {
        imgItem.innerHTML = `<img src="./img/title.jpg"></img>`;
    }

}

function showRules() {
    const imgItem = document.getElementById("resultImg");

    if (!show) {
        imgItem.innerHTML = `
        <textarea rows="30" readonly>
--> ¿Cual es el objetivo del juego?
- El objetivo del juego es lograr una vida lo mas miserable (es decir, parecida a su vida real— posiblemente).
- Para eso deben atravesar todo el tablero recolectando Cupones de Angustia, Enfermedad, Tragedia, etc.

--> ¿Como se juega?
- Antes de comenzar, todos los jugadores tornan un cupon de cada tipo y una pieza de Infeliz que es la que los representara durante el juego. 
- Luego, cada participante tira un dado y avanza esa cantidad de casilleros.

* Si no tiene dados puede entrar a este link https://freeonlinedice.com/.
** Si no tiene dados, ni internet, ni agua potable, intente jugar cuando vuelva de África.
Cada casillero tiene instrucciones claras para que hasta ustedes puedan comprenderlas.

-- En caso de que el casillero les diga de avanzar o retroceder, deben cumplir la consigna del ultimo casillero en el que aterricen.

-- Si un jugador cae en un casillero ocupado por otro jugador, el que ya estaba puede robarle un cupon a elección al recién llegado para hacerle pagar derecho de piso. Así es la vida, no la inventamos nosotros.

--> ¿Qué hacer con los casilleros de CRISIS EXISTENCIAL?
- Cuando un jugador atraviesa estos casilleros, debe detenerse y tomar una decisión: desaﬁar a otro o continuar cobardemente.
- En caso de desaﬁar, elige al jugador que quiera y le apuesta la cantidad de cupones que elija.
- Ambos tiran los dados y el que saque el menor número, se queda con los cupones del otro (en caso de empate se vuelve a tirar).
- Una vez que el desafio esta terminado, e1 jugador sigue avanzando a su destino original.
* En caso de elegir no desaﬁar —típico de un ser gris, cobarde y conformista— avanza directamente a su destino original.

NOTA: si no tiene ningún cupon en su poder, no puede desaﬁar a nadie.

--> ¿Cuándo termina el juego y quién gana?
- La partida termina cuando un jugador llega a un casillero de MUERTE (a menos que dicho casillero indique lo contrario).
- En ese memento se cuentan los cupones de todos. El que tenga más, resultará ganador y se le cumplirán todas las desgracias que le tocaron.

--> ACLARACIÓN 1:
- Si debe tomar un cupón pero ya estan repartidos todos los de ese tipo (porque son miserables e irnprimieron pocos), puede robárselo al participante que usted elija.

--> ACLARACIÓN 2: 
- Si cae en un casillero que coincide con un hecho real de su vida, duplica los cupones que entrega.

--> ACLARACION 3: 
- Si les gusto este juego, Con Eso No Se Jode les va a gustar más. Por algo este es gratis y el otro lo vendemos.
- Lo consiguen en https://poppularshop.com.
        </textarea>
        `;

        show = true;
    } else {
        imgItem.innerHTML = `<img src="./img/title.jpg"></img>`;

        show = false;
    }
}