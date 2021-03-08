'use strict';


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// REVIEW: look at the JS object for a store below (seattle)
// You will be copying this object design, and it's capabilities

// var Person = {
//   name: "calvin",
//   age: 49,
//   walk: function() {
//     console.log("i'm walking");
//   }
// }

var seattle = {
  locationName: 'Seattle', //locationName property
  minCustomersPerHour: 23, //minCustomersPerHour property
  maxCustomersPerHour: 65,
  avgCookiesPerSale: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function () {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  }, // a property that does something is called a method

  calcCookiesEachHour: function () {
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },

  render() {
    this.calcCookiesEachHour();
    //We need to understand how render puts items onto the webpage.

    // TODO: Done. access the seattle store HTML list by it's ID - getElementById/querySelector

    // and assign it to the unorderedList variable below
    // use either getElementById or querySelector to get "Seattle" unordered list

    //getElementById or querySelector
  
    var unorderedList = document.getElementById('seattle');

    for (var i = 0; i < hours.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      unorderedList.appendChild(listItem);
    }
    listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    unorderedList.appendChild(listItem);
  }
};



// TODO:  copy the object data from above and paste it 4 times below, each time representing a new city:  tokyo, dubai, paris, lima
// the minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale should all have different sales counts
// you may make these counts up and will also need to update where you "select" or "access" your HTML for each store

var tokyo = { 
  locationName: 'Tokyo', //locationName property
  minCustomersPerHour: 21, //minCustomersPerHour property
  maxCustomersPerHour: 70,
  avgCookiesPerSale: 11,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function () {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  }, // a property that does something is called a method

  calcCookiesEachHour: function () {
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },

  render() {
    this.calcCookiesEachHour();
    //We need to understand how render puts items onto the webpage.

    // TODO: Done. access the seattle store HTML list by it's ID - getElementById/querySelector

    // and assign it to the unorderedList variable below
    // use either getElementById or querySelector to get "Seattle" unordered list

    //getElementById or querySelector
  
    var unorderedList = document.getElementById('tokyo');

    for (var i = 0; i < hours.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      unorderedList.appendChild(listItem);
    }
    listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    unorderedList.appendChild(listItem);
  }

};

var dubai = { };

var paris = { };

var lima = { };




// what does the random function do?
function random(min, max) {
  // TODO: "floor" this random number generator
  return Math.random() * (max - min + 1) + min;
}



// somehow looop through all items and print???
// TODO: list all shop objects in an array
var allShops = [];



// We will deconstruct and understand how exactly this renders html on to the page next week.
(function renderAllShops() {
  for (var i = 0; i < allShops.length; i++) {
    allShops[i].render();
  }
})();
