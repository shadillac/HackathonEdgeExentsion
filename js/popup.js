// get the button by id
let go = document.getElementById('goButton');
let responseLabel = document.getElementById('responseLabel');

// On the click event of the button go out to a url and do a get.
go.onclick = function () {
  let responseClass = "success";
  let apiURI = document.getElementById('apiUri').value;
  let methodType = document.getElementById('methodBox').value;
  let contentType = document.getElementById('contentTypeBox').value;
  let bodyText = document.getElementById('bodyBox').value;
  let responseCode = "0";

  switch (methodType) {
    case 'GET':
      fetch(apiURI, {
        method: methodType,
      })
        .then(function (response) {
          return response;
        })
        .then(function (response) {
          responseLabel.innerText = response.text();
          responseCode = response.statusCode;
          console.log(response)
        })
        .catch(function (error) {
          responseClass = "error";
          responseLabel.innerText = error;
          responseCode = error.statusCode;
          console.error(error);
        });
      break;
    case 'POST':
      fetch(apiURI, {
        method: 'POST',
        body: bodyText,
        headers: {
          "Content-type": contentType
        }
        //mode: "no-cors",
        //cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      })  
      .then(function (response) {
        return response;
      })
      .then(function (response) {
        responseLabel.innerText = response.text();
        responseCode = response.statusCode;
        console.log(response)
      })
      .catch(function (error) {
        responseClass = "error";
        responseLabel.innerText = error;
        responseCode = error.statusCode;
        console.error(error);
      });
      break;
    default:
      responseLabel.innerText = methodType + " not yet handled";
  }

  responseCode = "<span class='" + responseClass + "'>" + responseCode + "</span>"
  document.getElementById('responseCode').innerHTML = responseCode;
};