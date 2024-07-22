let url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/json-simple.json"

axios.get(url).then(function(response){
    // the response from axios.get is only available inside this promise function
    document.querySelector("#output").innerHTML = response.data;
});

// method 1 tgt with li/ul in html
    document.querySelector("#name").innerHTML = response.data.name;
    document.querySelector("#number").innerHTML = response.data["Mobile Number"];
    document.querySelector("#number").innerHTML = response.data["Current Address"];
    document.querySelector("#number").innerHTML = response.data["Permanent Address"];

    // method 2 tgt with #output in html
    let outputDiv = document.querySelector("#output");
    outputDiv.innerHTML = `
        <h1>${response.data.book}</h1>
        <h2>By ${response.data.author}</h2>
        <ul>
        <li>Number of Pages: ${response.data.pages}</li>
        <li>Borrowed:${response.data.borrowed}</li>

        </ul>
    
    `

}
loadData();