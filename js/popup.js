// get the button by id
let go = document.getElementById('goButton');
let responseLabel = document.getElementById('responseLabel');
let apiURI = document.getElementById('apiUri');
let methodType = document.getElementById('methodBox'); 

// On the click event of the button go out to a url and do a get.
go.onclick = function() {
    //let domain = "https://httpbin.org/get";

  fetch(apiURI, {
    method: methodType,
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(function (response) {
    responseLabel.text = response.text();
  })
  .then(function (text) {
    responseLabel.text = text;
  });
};