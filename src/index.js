console.log('%c HI', 'color: firebrick')

let breedsArr = [];


document.addEventListener('DOMContentLoaded', function() {
    const breedList = document.getElementById("dog-breeds");
    const ulChildren = breedList.children;
    const select = document.getElementById("breed-dropdown")

    select.addEventListener("change", function(event) {
        filterBreeds(event.target.value);
    });

    breedList.addEventListener("click", function(event){
        event.target.style.color = "red";
        });


    fetch( "https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(json =>
   { 
      const imgDiv = document.getElementById("dog-image-container");
    json.message.forEach(image => {
        const imgTag = document.createElement("img")
        imgTag.src = image
        imgDiv.appendChild(imgTag)
    });
    }
    );
    
    
    
    
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(json =>{ const breedsUl = document.getElementById("dog-breeds");
    breedKeys = Object.keys(json.message)
    breedKeys.forEach(breed => {
        breedsArr.push(breed);
        const liTag = document.createElement("li")
        liTag.innerText = breed
        breedsUl.appendChild(liTag)
    });});
  });


 


