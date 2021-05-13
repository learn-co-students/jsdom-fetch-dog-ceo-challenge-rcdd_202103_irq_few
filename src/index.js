console.log('%c HI', 'color: firebrick');

const imageContainer = document.getElementById("dog-image-container");
const dogBreeds = document.getElementById("dog-breeds");
const breedDropdown = document.getElementById("breed-dropdown");

fetch("https://dog.ceo/api/breeds/list/all")
.then(response => response.json())
.then(json => {
  for (const breed in json.message) {
    const newBreed = document.createElement("li");
    newBreed.setAttribute("class", "dogBreed");
    newBreed.innerHTML = breed;
    dogBreeds.append(newBreed);
  }
  
  dogBreeds.addEventListener("click", (e)=>{
    if(e.target.className == "dogBreed") e.target.style.color = "red";
    console.log(e.target);
  });
  
  breedDropdown.addEventListener("change", ()=>{
    dogBreeds.innerHTML = "";
    for (const breed in json.message) {
      if(breed[0] == breedDropdown.value){
        const newBreed = document.createElement("li");
        newBreed.setAttribute("class", "dogBreed");
        newBreed.innerHTML = breed;
        dogBreeds.append(newBreed);
      }
    }
  });
});

fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => response.json())
  .then(json => {
  for (const image in json.message) {
    const newImage = document.createElement("img");
    newImage.setAttribute("src", json.message[image]);
    newImage.style.width = "20%";
    imageContainer.append(newImage);
  }
});