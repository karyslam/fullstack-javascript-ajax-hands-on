let url = "https://4geeksacademy.github.io/exercise-assets/txt/hello.txt"

axios.get(url).then(function(response){
    // the response from axios.get is only available inside this promise function
    document.querySelector("#output").innerHTML = response.data;
});