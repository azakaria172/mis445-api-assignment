function searchMeal() {
    var typed = document.getElementById("textBox").value;

    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${typed}`;


    fetch(url)
        .then(res => res.json())
        .then(data => processSearchMeal(data));
    // .then(data => console.log(data));
}

function categoryMeal() {
    // var typed = document.getElementById("textBox").value;

    categories = ["Beef", "Chicken","Dessert"]

    for(let j=0;j<categories.length;j++){
        
        var url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories[j]}`;
    
    
        fetch(url)
            .then(res => res.json())
            .then(data => processMealCategory(data));
        // .then(data => console.log(data['categories'][0]['strCategory']));
    }

}


function processSearchMeal(data) {
    // console.log (data);
    var infoBox = document.getElementById("searchMealData");
    infoBox.innerHTML = "";
    // for (var i=0; i<data.length; i++ ){
    // var date = data[i].Date;
    // var cases = data[i].Cases;
    //console.log (date, cases);
    var newDiv = document.createElement("div");
    newDiv.classList.add("styles");
    newDiv.innerHTML = `<div class="card mb-3" style="max-width: 640px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${data['meals'][0]['strMealThumb']}" class="img-fluid" alt="" style="max-width:80%; height:auto;">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${data['meals'][0]['strMeal']}</h5>
              <p class="card-text">${data['meals'][0]['strInstructions'].slice(0, 50)}</p>
              <a href="#" class="btn btn-primary">Show More</a>
            </div>
          </div>
        </div>
      </div>`;



    infoBox.appendChild(newDiv);

    // }


}


function processMealCategory(data) {
    // console.log (data);
    var infoBox = document.getElementById("mealCategory");

    for (var i = 0; i <= 6; i++) {
        // var date = data[i].Date;
        // var cases = data[i].Cases;
        //console.log (date, cases);
        var newDiv = document.createElement("div");
        newDiv.classList.add("styles");
        newDiv.innerHTML = `<div class="card mb-3" style="max-width: 640px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${data['meals'][i]['strMealThumb']}" class="img-fluid" alt="" style="max-width:50%; height:auto;">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${data['meals'][i]['strMeal']}</h5>

              <a href="#" class="btn btn-primary">Show More</a>
            </div>
          </div>
        </div>
      </div>`;



        infoBox.appendChild(newDiv);

    }


}


categoryMeal();
