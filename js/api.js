searchFood = () =>{
    const getInputText = document.getElementById('search-input')
    const getValue = getInputText.value
    console.log(getValue)
    getInputText.value = ''
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayInfo(data))
}

const displayInfo = (data) =>{
    console.log(data.meals[0])
    // const isIamges = `<img src="${data.meals[0].strMealThumb}" />`
    // console.log(isIamges)
    const getArea = document.getElementById('getDynamicInfo')
   //for(const foodInfo of data){}
       const div = document.createElement('div')
            div.classList.add('col')
            div.innerHTML = ` 
             <div class="card w-75">
                <img class="img-fluid" src="${data.meals[0].strMealThumb}" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${data.meals[0].strMeal}</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
       `
       getArea.appendChild(div)
   

}
