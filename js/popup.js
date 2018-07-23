// get the button by id
let go = document.getElementById('goButton');
let responseLabel = document.getElementById('responseLabel');

// On the click event of the button go out to a url and do a get.
go.onclick = function() {
  let apiURI = document.getElementById('apiUri').value;
  let methodType = document.getElementById('methodBox').value; 
alert(apiURI);
  fetch(apiURI, {
    method: methodType,
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(function (response) {
    responseLabel.value = response.text();
  })
  .then(function (text) {
    responseLabel.value = text();
  });
};