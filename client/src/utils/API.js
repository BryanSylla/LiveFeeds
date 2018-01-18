import axios from "axios";

var config = {
  headers: {"X-Mashape-Key": "BxC1rj0IO1mshhI9BZFyCyphU6wCp1cn1GAjsnLtxZGSOdFC8T",
            "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com"}
};
export default {
  // Gets the 5 articles from API search
  getRecipes: function(recipe,res) {

    return axios.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?cuisine=&diet=&excludeIngredients=&instructionsRequired=false&intolerances=&limitLicense=false&number=10&offset=0&query='+recipe+'&type=main+course',config)
},


  getIngredients: function(recipe_id){
return axios.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+ recipe_id+'/information?includeNutrition=false',config)

  },

  savesession: function(username){
    sessionStorage.setItem('usernameSession',username);
  },

  getsession: function(){
    var data=sessionStorage.getItem('usernameSession');
    return data;
  },
  //Gets all saved articles
  getShoppingList: function(username) {
    return axios.get("/api/ingredients/" + username);
  },
  // Deletes the book with the given id
  deletesavedArticle: function(username) {
    return axios.delete("/api/ingredients/" + username);
  },
  // Saves a book to the database
  saveIngredients: function(username,ingredientData) {
   var reformattedArray = ingredientData.map(function(obj) { 
   var rObj = [];
   rObj = obj.name ;
   return rObj;
});
    return axios.put("/api/ingredients/" + username, reformattedArray);
  },

  getemail:function(username){
    return axios.get("api/userinfo/" + username);
  },

  sendemail:function(useremail,shoppinglist){
    return axios.post("api/userinfo/" + useremail,shoppinglist);
  }
};
