// javascript engine parses the file from top to bottom.

// along the way, it takes note of variable declarations
// takes note of function declarations
// stores a bunch of stuff in memory

'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Whenever possible DO NOT REPEAT YOURSELF
// D.R.Y. principle

//We are going to create a template. 
//The template will give us the abilit to create as many cookie stands(shops) as we have numbers for

//the template function name is capitalized.
// Constructor Function
function CookieStand(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale){
  this.locationName = locationName
  this.minCustomersPerHour = minCustomersPerHour
  this.maxCustomersPerHour = maxCustomersPerHour
  this.avgCookiesPerSale = avgCookiesPerSale
  this.customersEachHour = []
  this.cookiesEachHour = []
  this.totalDailyCookies = []
  //Still need to define the methods for calculating customersEachHour, cookiesEachHour, Total, and render
}

var seattle = new CookieStand('Seattle', 12, 45, 4);
var lima = new CookieStand('Lima',23, 60, 4.6 );
var rome = new CookieStand('Rome',45, 120, 12 );
var thailand = new CookieStand('Thailand',45, 120, 12 );


console.log(seattle.locationName, seattle.minCustomersPerHour)
console.log(lima.locationName, lima.minCustomersPerHour)
console.log(rome.locationName, rome.minCustomersPerHour)
console.log(thailand.locationName, thailand.minCustomersPerHour)


// var seattle = {
//   locationName: 'Seattle',
//   minCustomersPerHour: 23,
//   maxCustomersPerHour: 65,
//   avgCookiesPerSale: 6.3,
//   customersEachHour: [],
//   cookiesEachHour: [],
//   totalDailyCookies: 0,
//   calcCustomersEachHour: function () {
//     for (var i = 0; i < hours.length; i++) {
//       this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
//     }
//   }, 
//   calcCookiesEachHour: function () {
//     this.calcCustomersEachHour();
//     for (var i = 0; i < hours.length; i++) {
//       var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
//       this.cookiesEachHour.push(oneHour);
//       this.totalDailyCookies += oneHour;
//     }
//   },
//   render() {
//     this.calcCookiesEachHour();
//     var unorderedList = document.getElementById('seattle');
//     for (var i = 0; i < hours.length; i++) {
//       var listItem = document.createElement('li');
//       listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
//       unorderedList.appendChild(listItem);
//     }
//     listItem = document.createElement('li');
//     listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
//     unorderedList.appendChild(listItem);
//   }
// };



var tokyo = { 
  locationName: 'Tokyo', 
  minCustomersPerHour: 21,
  maxCustomersPerHour: 70,
  avgCookiesPerSale: 11,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function () {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  },
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
var dubai = { 
  locationName: 'Dubai',
  minCustomersPerHour: 12,
  maxCustomersPerHour: 51,
  avgCookiesPerSale: 4,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function () {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  },
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
    var unorderedList = document.getElementById('dubai');

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
var paris = {
locationName: 'Paris',
  minCustomersPerHour: 120,
  maxCustomersPerHour: 221,
  avgCookiesPerSale: 5,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function () {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  }, 
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
    var unorderedList = document.getElementById('paris');
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
// var lima = { 

//   locationName: 'Lima',
//   minCustomersPerHour: 3,
//   maxCustomersPerHour: 12,
//   avgCookiesPerSale: 8,
//   customersEachHour: [],
//   cookiesEachHour: [],
//   totalDailyCookies: 0,
//   calcCustomersEachHour: function () {
//     for (var i = 0; i < hours.length; i++) {
//       this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
//     }
//   }, 
//   calcCookiesEachHour: function () {
//     this.calcCustomersEachHour();
//     for (var i = 0; i < hours.length; i++) {
//       var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
//       this.cookiesEachHour.push(oneHour);
//       this.totalDailyCookies = this.totalDailyCookies + oneHour;
//     }
//   },
//   render() {
//     lima.calcCookiesEachHour();
//     var limaUnorderedList = document.querySelector('#lima')
//     for (var i = 0; i < hours.length; i++) {
//       var listItem = document.createElement('li');
//       listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
//       limaUnorderedList.appendChild(listItem);
//     }
//     listItem = document.createElement('li');
//     listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
//     limaUnorderedList.appendChild(listItem);
//   }
// }
var hongkong = { 
  locationName: 'Hong Kong',
  minCustomersPerHour: 12,
  maxCustomersPerHour: 22,
  avgCookiesPerSale: 10,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function () {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  }, 
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
    var unorderedList = document.getElementById('hongkong');

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




function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

var allShops = [hongkong, seattle, tokyo, dubai, paris, lima];

//this function with the brackets around and the brackets at the end is a function that gets defined and when the page loads, this runs automatically.
// IIFE - 

// (function renderAllShops() {
//   for (var i = 0; i < allShops.length; i++) {
//     allShops[i].render();
//   }
// })();
