/*fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))*/
  
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    
    
       
     x = myJson[0].name;
	 y = myJson[1].name;
	 document.getElementById("demo").innerHTML = x;
	 document.getElementById("demo2").innerHTML = y;
    
  });
  