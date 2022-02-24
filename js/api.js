searchFood = () =>{
    const getInputText = document.getElementById('search-input')
    const getValue = getInputText.value
    if(getValue == '' || getValue < 0){
        const getError = document.getElementById('error')
        const p = document.createElement(p)
        p.innerText = 'Empty and Negative number is not allow'
        getError.appendChild(p)

    }else{
        console.log(getValue)
        getInputText.value = ''
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getValue}`
        fetch(url)
        .then(res => res.json())
        .then(data => displayInfo(data.meals))
    }
    
}

const displayInfo = (data) =>{
    //console.log(data)
    const getArea = document.getElementById('getDynamicInfo')
    getArea.innerHTML = ''
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



