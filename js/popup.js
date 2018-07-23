// get the button by id
let go = document.getElementById('goButton');
let responseLabel = document.getElementById('responseLabel');

// On the click event of the button go out to a url and do a get.
go.onclick = function() {
  let apiURI = document.getElementById('apiUri').value;
  let methodType = document.getElementById('methodBox').value; 

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

  fetch(apiURI, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(function (response) {
    return response.text();
  })
  .then(function (text) {
    alert(text);
  })
  .catch(function(error){
    alert(error);
  });  

};