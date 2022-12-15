var gold1 = document.getElementById("gold");
var silver1 = document.getElementById("silver");
var platinum1 = document.getElementById("platinum");
var palladium1 = document.getElementById("palladium");

var settings = {
    "url": "https://api.metalpriceapi.com/v1/latest?api_key=696cfe015a71d799581a0a851289e45a&base=USD&currencies=XAU,XAG,XPT,XPD",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    gold1.innerHTML = response.rates.XAU;
    silver1.innerHTML = response.rates.XAG;
    platinum1.innerHTML = response.rates.XPT;
    palladium1.innerHTML = response.rates.XPD;
    
  });
