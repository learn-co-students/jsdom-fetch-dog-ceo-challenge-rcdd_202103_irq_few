console.log('%c HI', 'color: firebrick')

const imgURL = 'https://dog.ceo/api/breeds/image/random/4';
const breedURL = 'https://dog.ceo/api/breeds/list/all';

document.addEventListener('DOMContentLoaded', function(){
  
  fetch(imgURL).then(function(response){
    // console.log(response.json());
    return response.json();
    
  }).then(function(json){
    
    displayImage(json);
    
  });
  
  
  fetch(breedURL).then(function(response){
    // console.log(response.json());
    return response.json();
  }).then(function(json){
    addBreeds(json);
  });
  
  
  
});


function displayImage(json){
  
  const imgsContainer = document.querySelector("#dog-image-container");
  
  
  for(let i = 0; i < json.message.length; i++){
    
    const div = document.createElement('div');
    div.innerHTML = `<img src="${json.message[i]}" alt="dog-image">`;
    imgsContainer.append(div);
  }
}

let breedNames = [];


function addBreeds(json){
  
  const breedUl = document.querySelector('#dog-breeds');
  breedNames = Object.keys(json.message);
  let breedLi;
  for(let i = 0; i < breedNames.length; i++){
    
    breedLi = document.createElement('li');
    breedLi.innerText = breedNames[i];
    breedUl.append(breedLi);
    
  }

}

window.addEventListener('load', function(){
  
  const li = document.querySelectorAll('li');
  for(let i = 0; i < li.length; i++){
    
    li[i].addEventListener('click', () => {li[i].style.color = 'red'});
  }
  
  const dropDown = document.querySelector('#breed-dropdown');
  
  dropDown.addEventListener('change', function(){
    const breedUl = document.querySelector('#dog-breeds');
    breedUl.innerText = '';
    
    for(let i = 0; i < breedNames.length; i++){
      
      if(dropDown.value === breedNames[i].charAt(0)){
        
        const li = document.createElement('li');
        
        li.innerText = breedNames[i];
        breedUl.append(li);
        
      }
      
    }
    
  });
  
});









