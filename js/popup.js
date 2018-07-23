// get the button by id
let go = document.getElementById('go');

// On the click event of the button go out to a url and do a get.
go.onclick = function() {
    var domain = "https://httpbin.org/get";

  fetch(domain, {
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
  });
};