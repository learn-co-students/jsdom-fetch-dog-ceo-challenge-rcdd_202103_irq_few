
console.log('%c HI', 'color: firebrick')
let breedNames = []

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
   document.addEventListener('DOMContentLoaded', function() {


    fetch(imgUrl)
    .then(response =>  response.json())
    .then((r)=>{
      displayImages(r)

    });




    fetch(breedUrl).
    then(response =>  response.json())
    .then((r)=>{
       displayBreeds(r)


    });

    });


    function displayImages(r){

      const imges = document.querySelector('#dog-image-container')

        for (let i = 0; i < r.message.length; i++) {

          const div =document.createElement('div');
          div.innerHTML = `<img src="${r.message[i]}" alt="" srcset="">`
          imges.append(div)

      }





    }


    function displayBreeds(r){
      const ul = document.querySelector('#dog-breeds')
      breedNames = Object.keys(r.message)

        for (let i = 0; i < breedNames.length; i++) {

          const li =document.createElement('li');
          li.classList.add('test')
          li.innerText = breedNames[i]
          ul.append(li)

      }




    }


    window.addEventListener('load', () => {


    const li =document.querySelectorAll('li')
    for (let i = 0; i < li.length; i++) {
      li[i].addEventListener("click", function() {
        li[i].style.color = 'red';
      });}

      const select = document.querySelector('#breed-dropdown')

      select.addEventListener('change',()=>{
        const ul = document.querySelector('#dog-breeds')
        ul.innerHTML=""
        for (let i = 0; i < breedNames.length; i++) {

          if(breedNames[i].charAt(0) === select.value){

            const li =document.createElement('li');
          li.classList.add('test')
          li.innerText = breedNames[i]
          ul.append(li)
          }
          const li =document.querySelectorAll('li')
          for (let i = 0; i < li.length; i++) {
            li[i].addEventListener("click", function() {
              li[i].style.color = 'red';
            });}


        }

      })


    });

    
