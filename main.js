let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {      /* e ist parameter*/
        /*Textfeld clear*/
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
        /*Wenn z.B 3x ein *  eingebeben wird kommt Error*/
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            /* Läschen mit dem Pfeil*/
            case '←':
                if (display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});
/* Feld muss immer mit C gecleared werden um wieder mit neuen Zahlen zu rechnen sonnst wir die ausgerechnete Zahl mit angezeigt und gerechnet */