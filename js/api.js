
//search and fetch api from mealdb website

searchFood = () =>{
    const getInputText = document.getElementById('search-input')
    const getValue = getInputText.value
    const getError = document.getElementById('error')
    //empty&nambur input validation code here
    if(getValue == '' || isNaN(getValue) == false ){
        getError.innerText = 'Empty and Numbers is not allow, please search by Name of Meals'
        getInputText.value = ''
        
    }else{
        // if result get found then this secion will be called
        getInputText.value = ''
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getValue}`
        fetch(url)
        .then(res => res.json())
        .then(data => displayInfo(data.meals))

        const getError = document.getElementById('error')
        getError.innerText = ''
    }
    
}

const displayInfo = (data) =>{
   // console.log(data)
    const getArea = document.getElementById('getDynamicInfo')
    const noResult = document.getElementById('noResult')
    getArea.innerHTML = ''
    if(data == null){
        noResult.innerText = 'Opp! No result has found, please Try again'
    }else{
        for(const foodInfo of data){
            const div = document.createElement('div')
                 div.classList.add('col')
                 div.innerHTML = ` 
                  <div onclick="loadProductDetails('${foodInfo.idMeal}')" class="card">
                     <img class="img-fluid" src="${foodInfo.strMealThumb}" alt="...">
                     <div class="card-body">
                       <h5 class="card-title">${foodInfo.strMeal}</h5>
                       <p class="card-text">${foodInfo.strInstructions.slice(0,200)}</p>
                     </div>
                   </div>
            `
            getArea.appendChild(div)

         }
         const noResult = document.getElementById('noResult')
         noResult.innerText = ''
    }
   
  
}

const loadProductDetails = (mealId) =>{
   // console.log(mealId)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res => res.json())
    .then(data => productDetails(data.meals[0]))

}

const productDetails = (meal)=>{
    //console.log(meal)
    const getMealDetailsArea = document.getElementById('detailProInfo')
    getMealDetailsArea.innerText = ''
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
                <img src="${meal.strMealThumb} " class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
                  <a href="${meal.strYoutube}" target="-blank" class="btn btn-primary">Go Youtube</a>
                </div>
    `
    getMealDetailsArea.appendChild(div)
    // getMealDetailsArea.innerHTML = ''
}



