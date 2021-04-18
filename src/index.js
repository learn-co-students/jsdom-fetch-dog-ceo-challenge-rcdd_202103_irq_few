console.log('%c HI', 'color: firebrick')

window.addEventListener('DOMContentLoaded', e => {
    getImages();
    getDogBreeds();
    changeListColorOnClick();
    filterByDropDown();
});

function filterByDropDown() {
  const dropdown = document.querySelector('#breed-dropdown');
  dropdown.addEventListener('click', e => addBreedsToList(breedList.filter(breed => breed[0] === e.target.value)));
}

function changeListColorOnClick() {
  const list = document.querySelector('#dog-breeds');
  list.addEventListener('click', e => e.target.style.color = 'red');
}

function getDogBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
    .then(response => response.json())
    .then(processDogBreeds)
    .then(addBreedsToList);
}


const breedList = [];

function processDogBreeds(json) {
  const breeds = json.message;
  
  Object.keys(breeds).forEach(breed => {
    
    if (breeds[breed].length === 0)
      return breedList.push(breed);
    
    breeds[breed].forEach(childBreed => breedList.push(`${breed} ${childBreed}`));
  });
  
  return breedList;
}

function addBreedsToList(breeds) {
  const listNode = document.querySelector('#dog-breeds');
  listNode.innerHTML = '';
  breeds.forEach(breed => {
    const li = document.createElement('li');
    li.innerText = breed;
    listNode.append(li);
  });
}

function getImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(response => response.json())
    .then(parseImages);
}

function parseImages(json) {
  const images = document.querySelector('#dog-image-container');
  const links = json.message;
  links.forEach(link => {
    const img = document.createElement('img');
    img.src = link;
    img.alt = '';
    images.append(img);
  });
}
