const card = document.querySelector('.contenedor__card-hover');
const contenedorCard = document.querySelector('.contenedor__card-img');

contenedorCard.addEventListener('mouseover', event => {
    card.style.display = 'flex';
})
contenedorCard.addEventListener('mouseout', event => {
    card.style.display = 'none';
})