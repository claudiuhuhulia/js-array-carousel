console.log('js-ok');

/* 
1. RECUPERO LE IMMAGINI DALLA DOM
2. DICHIARO UNA VARIABILE I PER POTER CAMBIARE IMMAGINE AL CLICK
3. RENDO L'IMMAGINE VISIBILE TRAMITE L'INDEX NUMBER
4. RECUPERO I BUTTON DALLA DOM
5. AL CLICK DEL BOTTONE CAMBIO LA CLASSE TRAMITE L'INDEX NUMBER ATTIVA PER POTER VISUALIZZARE LA NUOVA IMMGAINE 
6. CREO L'ARRAY SOURCES CON GLI INDIRIZZI DELLE IMMAGINI
7. PER OGNI SOURCES CREO IL TAG IMG E LO COLLEGO ALLA DOM
8. AGGIUNGO IL CICLO INFINITO CAMBIANDO L'INDEX NUMBER UTILIZZANDO UN IF

*/

const next= document.getElementById('next');
const prev = document.getElementById('prev');

const sources = ['img/01.webp','img/02.webp','img/03.webp','img/04.webp','img/05.webp' ]
const gallery= document.querySelector('.gallery');


let imageElements='';


for(let i = 0 ; i < sources.length ; i++){
    
    imageElements += `<img src="${sources[i]}" alt="supereroe">`
    
}

gallery.innerHTML=imageElements;

const images= document.querySelectorAll('#carousel img');

let currentIndex = 0;

images[currentIndex].classList.add('active');

next.addEventListener('click', function(){

    images[currentIndex].classList.remove('active');

    currentIndex++;

    if(currentIndex === images.length ) currentIndex = 0;

    images[currentIndex].classList.add('active');

})

prev.addEventListener('click', function(){
    
    images[currentIndex].classList.remove('active');

    currentIndex--;

    if(currentIndex < 0) currentIndex = 4;

    images[currentIndex].classList.add('active');

})


