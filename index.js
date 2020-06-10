// Add your code here
<<<<<<< HEAD
function submitData(name, email) {

    let formData = {
        name: name, 
        email: email
    };
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };
   return fetch ("http://localhost:3000/users", configObj) 

   .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    document.body.innerHTML = object[ "id" ];
  })
  
  .catch( function ( error ) {
    document.body.innerHTML = error.message
  } )
=======
let submitData = {

>>>>>>> 4a3eafee5b5a12321331bb208fa3ecc346b5ccd8
}