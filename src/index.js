console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded',()=>{

    function dogImgs(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
    .then(res => res.json())
    .then(data =>{
        //get the elment where all the dog images will be in
        const dogImageContainer = document.getElementById('dog-image-container')
        data.message.forEach((img)=>{
            //create an image element and include the img as the src
            const imgElement = document.createElement('img')
            imgElement.src = img
            dogImageContainer.appendChild(imgElement)
        })
    })
    }
    dogImgs()
    function dogBreeds(){
        const breedUrl = "https://dog.ceo/api/breeds/list/all";
        fetch(breedUrl)
        .then((res)=>res.json())
        .then((data)=>{
            const dogBreedsContainer = document.getElementById('dog-breeds')
            
            for(let breed in data.message){
                const breedLi = document.createElement('li')
                breedLi.textContent = breed
                dogBreedsContainer.appendChild(breedLi)
            }
            dogBreedsContainer.addEventListener('click',(event)=>{
                const li = event.target
                li.style.color = 'red'
            })
            const dropdown = document.querySelector('#breed-dropdown')
            const originalList = document.querySelectorAll('ul li')
            
            dropdown.addEventListener('change', (event)=>{
                //get the select options element
                const letterSelected = event.target.value
                //get the array of dog breeds
                //use the ul's children array to filter through the dog breeds or the data.message obj
                const liBreeds = {...originalList}
                const filteredBreeds = Object.values(liBreeds).filter((element)=>{
                    const liContent = element.textContent.slice(0, 1)
                    if(liContent === letterSelected){
                         return element
                    }else{
                        element.remove()
                    }
                })
                
                //add the new array of dog breed to the ul
                filteredBreeds.forEach((element)=>dogBreedsContainer.appendChild(element))
            })
        })
    }
    dogBreeds()

})

