searchFood = () =>{
    const getInputText = document.getElementById('search-input')
    const getValue = getInputText.value
    console.log(getValue)
    getInputText.value = ''
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayInfo(data.meals))
}

const displayInfo = (data) =>{
    console.log(data)
 
    
    const getArea = document.getElementById('getDynamicInfo')
    for(const foodInfo of data){
       const div = document.createElement('div')
            div.classList.add('col')
            div.innerHTML = ` 
             <div class="card">
                <img class="img-fluid" src="${foodInfo.strMealThumb}" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${foodInfo.strMeal}</h5>
                  <p class="card-text">${foodInfo.strInstructions.slice(0,200)}</p>
                </div>
              </div>
       `
       getArea.appendChild(div)
   
    }
}
