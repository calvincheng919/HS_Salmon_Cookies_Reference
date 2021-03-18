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
  // CookieStand.all.push(this); //
  //Still need to define the methods for calculating customersEachHour, cookiesEachHour, Total, and render
}

CookieStand.prototype.calcCustomersEachHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
}
CookieStand.prototype.calcCookiesEachHour = function() {
    this.calcCustomersEachHour();

    for (let i = 0; i < hours.length; i++) {
      let oneHour = parseFloat(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale));
      this.cookiesEachHour.push(parseFloat(oneHour));
      console.log(typeof this.cookiesEachHour[i])
      this.totalDailyCookies += parseFloat(oneHour);
      console.log(typeof this.totalDailyCookies)
      console.log(this.totalDailyCookies)
    }
}
CookieStand.prototype.render = function() {
    this.calcCookiesEachHour();
    // console.log(this.locationName.toLowerCase())
    
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
//when we create new object from a constructor, it is said we've "instantiated" it
// seattle is a new instance of the CookieStand constructor
var lima = new CookieStand('Lima',23, 60, 4.6 );
var rome = new CookieStand('Rome',45, 120, 12 );
var thailand = new CookieStand('Thailand',45, 120, 12 );
var hongkong = new CookieStand('Hong Kong',55, 76, 3 );
var dubai = new CookieStand('Dubai',55, 76, 3 );
var tokyo = new CookieStand('Tokyo',65, 71, 4 );
var paris = new CookieStand('Paris',50, 66, 5 );


// console.log(seattle.locationName, seattle.minCustomersPerHour)
// console.log(lima.locationName, lima.minCustomersPerHour)
// console.log(rome.locationName, rome.minCustomersPerHour)
// console.log(thailand.locationName, thailand.minCustomersPerHour)

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

var allShops = [hongkong, seattle, tokyo, dubai, paris, lima, rome, thailand];

// (function renderAllShops() {
//   for (var i = 0; i < allShops.length; i++) {
//     allShops[i].render();
//   }
// })();

seattle.render();
// tokyo.render();