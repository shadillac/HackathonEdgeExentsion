// get the button by id
let go = document.getElementById('goButton');
let responseLabel = document.getElementById('responseLabel');

// On the click event of the button go out to a url and do a get.
go.onclick = function() {
  let apiURI = document.getElementById('apiUri').value;
  let methodType = document.getElementById('methodBox').value; 
<<<<<<< HEAD

  // alert(apiURI);

  // const response = fetch(apiURI)
  // .then(function(response){
  //   alert(response.json());
  //   return response.json();
  // })
  // .then(function(jsonData){
  //   alert('sup dog');
  // })
  // .catch(function(error){
  //   alert(error);
  // });

  //const json = await response.json;
  //responseLabel.value = json;
  
  // alert("ending");

=======
alert(apiURI);
>>>>>>> 5c8da93175a71dab94133b8bf0ede07b9a550047
  fetch(apiURI, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(function (response) {
<<<<<<< HEAD
    return response.text();
  })
  .then(function (text) {
    alert(text);
  })
  .catch(function(error){
    alert(error);
  });  

=======
    responseLabel.value = response.text();
  })
  .then(function (text) {
    responseLabel.value = text();
  });
>>>>>>> 5c8da93175a71dab94133b8bf0ede07b9a550047
};