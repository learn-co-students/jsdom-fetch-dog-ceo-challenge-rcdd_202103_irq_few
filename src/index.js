console.log('%c HI', 'color: firebrick')

const url = "https://dog.ceo/api/breeds/image/random/4";
const dogsUrl = 'https://dog.ceo/api/breeds/list';

window.addEventListener('DOMContentLoaded', () => {
  fetch(url).then(result => {return result.json()})
  .then(json =>{
    for(let i=0;i<json.message.length;i++){
    let img = document.createElement("img");
    img.setAttribute("src",json.message[i]);
    let imgDiv = document.querySelector("#dog-image-container"); 
    imgDiv.append(img);
    imgDiv.style.display = "flex";
    imgDiv.style.height = "%100";
    imgDiv.style.flexWrap="nowrap";
    }
  });

  fetch(dogsUrl).then(result => {return result.json()})
   .then(json =>{
      for(let i=0;i<json.message.length;i++){

        let breed = document.createElement("li");
        breed.innerHTML = json.message[i];
        breed.addEventListener("click",()=>{
          breed.style.color = "blue";
        });
        
        let list = document.querySelector("#dog-breeds");
        list.append(breed);

        let selector=document.querySelector("#breed-dropdown");
        selector.addEventListener("change",function(){
          for(let i=0; i<json.message.length; i++){
           if(breed.innerHTML.startsWith(selector.value) ){
             breed.style.display = "block";
           }else{
             breed.style.display = "none";
           }
          }
        });
      }
   }); 
});