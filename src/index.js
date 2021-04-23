window.addEventListener('DOMContentLoaded', (e) => {
  const dogImageContainer=document.getElementById("dog-image-container");
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  const dogBreeds=document.getElementsByTagName('ul')[0];
  const breedDropdown=document.getElementById('breed-dropdown');
  
let breeds;
  
  const listBreed=(data)=>{
    
    dogBreeds.innerHTML=""
    
    data.forEach((breed)=>{
      
      const li=document.createElement('li');
      li.textContent=breed;
      li.onclick=()=>li.style.color='red'
      dogBreeds.append(li);
    })
    
  
  };
  
  breedDropdown.onchange=(e)=>{
    filter=e.target.value
    const filteredBreeds=breeds.filter((b)=>b[0]==filter)
    listBreed(filteredBreeds)
  }
  
  const renderImgs=(imgs)=>{
    imgs.message.forEach((img)=>{
      const image=document.createElement('img');
      image.width=200;
      image.height=200;
      image.src=img;
      
      dogImageContainer.append(image);
    });
  };
  
  
  
  
  fetch(imgUrl)
  .then(r=>r.json())
  .then(renderImgs)
  .catch(e=>console.log(e));
  
  
  fetch(breedUrl)
  .then(r=>r.json())
  .then(d=>{
    
    breeds=Object.keys(d.message)
    listBreed(breeds)
    
  })
  .catch(e=>console.log(e));

});
