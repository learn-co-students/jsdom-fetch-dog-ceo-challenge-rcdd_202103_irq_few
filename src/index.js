console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch(imgUrl).then(response => response.json()).then(data => console.log(data))


const breedUrl = 'https://dog.ceo/api/breeds/list/all';
fetch(breedUrl).then(response => response.json()).then(data => console.log(data))
