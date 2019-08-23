// $(document).ready(function(){
//   getWeather();
// })

function getWeather(searchQuery) {
  var url = "https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&units=metric&APPID="+apiKey;

  $(".city").text("");
  $(".temp").text("");

  $.ajax(url,{success: function(data){
    //console.log(data);
    $(".city").text(data.name);
    $(".temp").text(data.main.temp);
  }, error: function(error){
    $(".error-message").text("An error occured");
  }})
}

function searchWeather() {
  var searchQuery = $(".search").val();
  getWeather(searchQuery);
}

function handleSignIn() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log(user.email);
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}
