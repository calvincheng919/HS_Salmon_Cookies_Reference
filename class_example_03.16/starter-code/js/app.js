
'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function CookieStand(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale){
  this.locationName = locationName
  this.minCustomersPerHour = minCustomersPerHour
  this.maxCustomersPerHour = maxCustomersPerHour
  this.avgCookiesPerSale = avgCookiesPerSale
  this.customersEachHour = []
  this.cookiesEachHour = []
  this.totalDailyCookies = 0
}

CookieStand.prototype.calcCustomersEachHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
    // console.log(this.customersEachHour)
}
CookieStand.prototype.calcCookiesEachHour = function() {
    this.calcCustomersEachHour();
    for (let i = 0; i < hours.length; i++) {
      let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
      // console.log(oneHour)
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }

    // console.log(this.cookiesEachHour)
}
CookieStand.prototype.render = function() {
    this.calcCookiesEachHour();
    // console.log(this.calcCookiesEachHour())
    
    var unorderedList = document.getElementById(this.locationName.toLowerCase());
    for (var i = 0; i < hours.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      unorderedList.appendChild(listItem);
    }
    listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    unorderedList.appendChild(listItem);

}

var seattle = new CookieStand('Seattle', 12, 45, 4);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

// var allShops = [hongkong, seattle, tokyo, dubai, paris, lima, rome, thailand, bend];

// (function renderAllShops() {
//   for (var i = 0; i < allShops.length; i++) {
//     allShops[i].render();
//   }
// })();

seattle.render();