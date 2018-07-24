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
        method: "GET",
      })
        .then(function (response) {
          let waitingForResponse = response.text()
          responseCode = response.status;
          if (!response.ok) {
            responseClass = "error";
          }
          return waitingForResponse;
        })
        .then(function (text) {
          responseLabel.innerText = text;
          responseCode = "<span class='" + responseClass + "'>" + responseCode + "</span>"
          document.getElementById('responseCode').innerHTML = responseCode;
        })
        .catch(function (error) {
          console.error(error);
          responseClass = "error";
          responseLabel.innerText = error;
          alert(responseClass);
          responseCode = "<span class='" + responseClass + "'>" + responseCode + "</span>"
          document.getElementById('responseCode').innerHTML = responseCode;
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
        let waitingForResponse = response.text()
        responseCode = response.status;
        return waitingForResponse;
      })
      .then(function (response) {
        responseLabel.innerText = text;
        responseCode = "<span class='" + responseClass + "'>" + responseCode + "</span>"
        document.getElementById('responseCode').innerHTML = responseCode;
      })
      .catch(function (error) {
        console.error(error);
        responseClass = "error";
        responseLabel.innerText = error;
        responseCode = "<span class='" + responseClass + "'>" + responseCode + "</span>"
        document.getElementById('responseCode').innerHTML = responseCode;
      });
      break;
    default:
      responseLabel.innerText = methodType + " not yet handled";
  }
};