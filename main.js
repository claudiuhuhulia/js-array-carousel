console.log('js-ok');


const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const gallery = document.querySelector('.gallery');

const sources = ['img/01.webp','img/02.webp','img/03.webp','img/04.webp','img/05.webp' ];

let imageElements = '';

let currentIndex = 0;

const images = document.querySelectorAll('#carousel img');

for(i = 0 ; i < sources.length; i++ ) {
    imageElements += `<img src="${sources[i]}">`
}

gallery.innerHTML= imageElements;


images[currentIndex].classList.add('active');


nextButton.addEventListener('click', function(){

    images[currentIndex].classList.remove('active');
    
    currentIndex--;

    images[currentIndex].classList.add('active');

})

prevButton.addEventListener('click', function(){

    images[currentIndex].classList.remove('active');
    
    currentIndex++;

    images[currentIndex].classList.add('active');

})


