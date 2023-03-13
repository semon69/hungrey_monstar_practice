
//------------- handle search button-----------
const searchFood = () => {
    const searchField = document.getElementById('mealInput');
    const searchData = searchField.value
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchData}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealInfo(data.meals))
}

const displayMealInfo = mealData => {
    // console.log(mealData);
    const mealContainer = document.getElementById('mealCard');
    const errorMsg = document.getElementById('errorMessage');
    if (mealData === null) {
        errorMsg.innerText = 'Vul data diso kn? Tumi fail';
        mealContainer.innerText = '';
    } else {
        errorMsg.innerText = '';
        mealContainer.innerText = '';
        mealData.forEach(item => {
            const foodItemName = document.createElement('div');
            foodItemName.className = 'meal-items';
            itemPosition = item.idMeal;
            const mealInformation = `
            <img src ="${item.strMealThumb}">
            <h3>${item.strMeal}</h3>
            `
            foodItemName.innerHTML = mealInformation;
            foodItemName.addEventListener('click', function () {
                mealIngredientsInfo(item.idMeal);
            });
            mealContainer.appendChild(foodItemName);
        });
    }

}


//API Call by fetch for meal ingredients 

const mealIngredientsInfo = mealItemName => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItemName}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayDetails(data.meals))
}

//meal ingredients details information

const displayDetails = mealItemDetails => {
    // console.log(mealItemDetails)
    const mealItemsInformation = document.getElementById('mealItemsInfo');
    mealItemsInformation.innerText = '';
    mealItemDetails.forEach(items => {
        const mealItemsInformations = document.createElement('div');
        mealItemsInformations.className = 'ingredients-info';
        // console.log(items.strMeal);
        const itemsName = document.createElement('h1');
        const ingredients = document.createElement('h5');
        ingredients.innerText = 'Ingredients';
        itemsName.innerText = items.strMeal;
        const ul = document.createElement('ul');
        const imgUrl = document.createElement('img');
        imgUrl.src = items.strMealThumb;
        mealItemsInformations.appendChild(imgUrl);
        const p = `
        
         <p><b>${items.strIngredient1}</b></p>
         <p><b>${items.strIngredient2}</b></p>
         <p><b>${items.strIngredient3}</b></p>
         <p><b>${items.strIngredient4}</b></p>
         <p><b>${items.strIngredient5}</b></p>
         <p><b>${items.strIngredient6}</b></p>
         <p><b>${items.strIngredient7}</b></p>
         <p><b>${items.strIngredient8}</b></p>
         <p><b>${items.strIngredient9}</b></p>
         <p><b>${items.strIngredient10}</b></p>
         <p><b>${items.strIngredient11}</b></p>
         <p><b>${items.strIngredient12}</b></p>
         <p><b>${items.strIngredient13}</b></p>
        `
        ul.innerHTML = p;
        mealItemsInformations.appendChild(itemsName);
        mealItemsInformations.appendChild(ingredients);
        mealItemsInformations.appendChild(ul);
        mealItemsInformation.appendChild(mealItemsInformations);
        // mealItemsInformation.textContent = '';
    });
    // mealItemsInformation.innerText = '';
}


