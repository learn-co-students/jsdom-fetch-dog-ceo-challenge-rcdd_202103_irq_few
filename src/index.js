let breeds = [];

document.addEventListener('DOMContentLoaded', function () {
  loadImages();
  loadBreedOptions();
  fetchDogImage();
  fetchBreeds();
});

function loadImages() {
function fetchDogImage() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(res=> res.json())
@@ -21,7 +21,7 @@ function addImage(dogPicUrl) {
  container.appendChild(newImageEl);
}

function loadBreedOptions() {
function fetchBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
    .then(res => res.json())
@@ -59,14 +59,14 @@ function addBreedSelectListener() {
}

function addBreed(breed) {
  let ul = document.querySelector('#dog-breeds');
  let li = document.createElement('li');
  const ul = document.querySelector('#dog-breeds');
  const li = document.createElement('li');
  li.innerText = breed;
  li.style.cursor = 'pointer';
  ul.appendChild(li);
  li.addEventListener('click', updateColor);
}

function updateColor(event) {
  event.target.style.color = 'palevioletred';
  event.target.style.color = 'skyblue';
} 