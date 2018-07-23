// get the button by id
let go = document.getElementById('goButton');
let responseLabel = document.getElementById('responseLabel');

// On the click event of the button go out to a url and do a get.
go.onclick = function() {
  let apiURI = document.getElementById('apiUri').text;
  let methodType = document.getElementById('methodBox').text; 

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
    responseLabel.text = text();
  });
};