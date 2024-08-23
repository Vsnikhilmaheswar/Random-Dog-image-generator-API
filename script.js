console.log()
// DOG API
const refresh= document.getElementById('RefreshBtn')
refresh.onclick =() =>{
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(json => {
    
  
     item.innerHTML =`<img src = '${json.message}' height =300 width=300/>`
    
})
}
const item= document.getElementById('dogImage')

