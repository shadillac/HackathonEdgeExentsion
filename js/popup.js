// get the button by id
let goButton = document.getElementById('goButton');
let responseLabel = document.getElementById('responseLabel');
let responseCodeLabel = document.getElementById('responseCode');

// On the click event of the button go out to a url and do a get.
goButton.onclick = function () {
  responseLabel.innerHTML = "";
  responseCodeLabel.innerHTML = "";
  
  let responseClass = "success";
  let responseCode = "0";

  let apiURI = document.getElementById('apiUri').value;
  let methodType = document.getElementById('methodBox').value;
  let contentType = document.getElementById('contentTypeBox').value;
  let bodyText = document.getElementById('bodyBox').value;

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
          JSON.parse(text, function(keyVar, valueVar) {
            if (keyVar) {
              let line = "<span style=font-weight:bold;>" + keyVar + "</span> : " + valueVar;
              console.log(line);
              responseLabel.innerHTML += "<div><marquee>" + line + "</marquee></div>";
            }
          })
          responseCode = "<span class='" + responseClass + "'>" + responseCode + "</span>"
          responseCodeLabel.innerHTML = responseCode;
        })
        .catch(function (error) {
          console.error(error);
          responseClass = "error";
          responseLabel.innerText = error;
          alert(responseClass);
          responseCode = "<span class='" + responseClass + "'>" + responseCode + "</span>"
          responseCodeLabel.innerHTML = responseCode;
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
        responseCodeLabel.innerHTML = responseCode;
      })
      .catch(function (error) {
        console.error(error);
        responseClass = "error";
        responseLabel.innerText = error;
        responseCode = "<span class='" + responseClass + "'>" + responseCode + "</span>"
        responseCodeLabel.innerHTML = responseCode;
      });
      break;
    default:
      responseLabel.innerText = methodType + " not yet handled";
  }
};