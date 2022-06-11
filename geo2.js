/*fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))*/
  
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    
    
      let text = ""; 
	  
    
	 for(let i =0; i<=3; i++ ){
	 text += "Nombre: " + myJson[i].name + "<br>";
	 text +=  "Usuario: " + myJson[i].username+ "<br>";
	 text +=  "email: " + myJson[i].email+ "<br><br>";
	 
	 }
	 document.getElementById("demo").innerHTML = text;
  });
  