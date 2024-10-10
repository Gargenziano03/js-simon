/*
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente,
nell'ordine che preferisce.Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati.


NOTA:
non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
*/


//PRE-FASE:
/*
--array
--let/const
--setInterval
--document.getElementById (per richiamare gli id del html dove l'utente inserira i numeri)
--for
--if/else 
--array2(dove stampare i numeri indovinati)
*/

//1
//creare un array dove vengo stampati dal pc 5 numeri casuali  
//Visualizzare in pagina 5 numeri casuali.
const numeriCompurtEl = document.getElementById('numeriComputer')
function randomNumbergenerator() {
    //array dove pushare i numeri generati
    const numeri = [];
    //generare fino a 5 numeri
    for (let i = 0; i < 5; i++) {
        // generare il numero
        const numeroGenerato = Math.floor((Math.random()*100) +1);
        //inserire il numero generato nel array
        numeri.push(numeroGenerato)
    }
    return numeri
}
//output
const numeriCasuali = randomNumbergenerator();
numeriCompurtEl.innerHTML = numeriCasuali.join(', ')




//2
//Da lì parte un timer di 30 secondi.
//setInterval

//3
//Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente
//document.getElementById (per richiamare gli id del html dove l'utente inserira i numeri)

//4
//al click del bottone il software dice quanti e quali dei numeri da indovinare sono stati individuati.
//for
//if/else
//array2
