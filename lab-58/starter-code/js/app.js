
'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];




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
  }, // a property that does something is called a method. A method is a function inside of an object

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

// TODO: done. copy the object data from above and paste it 4 times below, each time representing a new city:  tokyo, dubai, paris, lima
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

  locationName: 'Dubai', //locationName property
  minCustomersPerHour: 12, //minCustomersPerHour property
  maxCustomersPerHour: 51,
  avgCookiesPerSale: 4,
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

  locationName: 'Paris', //locationName property
  minCustomersPerHour: 120, //minCustomersPerHour property
  maxCustomersPerHour: 221,
  avgCookiesPerSale: 5,
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
var lima = { 

  locationName: 'Lima', //locationName property
  minCustomersPerHour: 3, //minCustomersPerHour property
  maxCustomersPerHour: 12,
  avgCookiesPerSale: 8,
  customersEachHour: [], //this array gets all of its values from calcCustomersEachHour()
  cookiesEachHour: [],  //this array gets all of its values from calcCookiesEachHour()
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
      this.totalDailyCookies = this.totalDailyCookies + oneHour; //this is doing a running tally of the cookies sold
    }
  },

  render() {
    // start the domino of function calls
    lima.calcCookiesEachHour();
    //once the domino of functions finish running, all of the data in the arrays will be populated.


    //Hey, I want to put all that data/numbers onto the html page.
    // var unorderedList = document.getElementById('lima');
    var limaUnorderedList = document.querySelector('#lima')

    // pseudocode
    // use the hours array, determine the lengh
    // loop through the hours array 
    // at each index (loop), i want to output the data from my object to the html page


    for (var i = 0; i < hours.length; i++) {

      var listItem = document.createElement('li');

      listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      //'7am: 258 cookies 
      limaUnorderedList.appendChild(listItem);
    }
    // the previous for loop adds all the list items as children of limaUnorderedList


    listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    // 'Total: 1245 cookies
    limaUnorderedList.appendChild(listItem);
  }
};

var hongkong = { 

  locationName: 'Hong Kong', //locationName property
  minCustomersPerHour: 12, //minCustomersPerHour property
  maxCustomersPerHour: 22,
  avgCookiesPerSale: 10,
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

// what does the random function do?
// gives you a random number between the min and max
function random(min, max) {
  // TODO: done "floor" this random number generator
  return Math.floor(Math.random() * (max - min + 1) + min); //3.3's floor is 3
}

// Math.random() returns .3 
// max = 10
// min = 2
// max-min = 8
// max-min + 1 = 9
// 9 + min = 11
// 11 * 0.3 = 3.3



// somehow looop through all items and print???
// TODO: done - list all shop objects in an array


//******* */ this is an example of an array - nothing to do with salmon cookies
var myArray = [5,6,7,10];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[2]); //this will console log 7 for 4 times
  console.log(myArray[i]); //this will console log the contents of that position, 5, 6, 7, 10
}
//************************************** */


var allShops = [hongkong, seattle, tokyo, dubai, paris, lima];

// We will deconstruct and understand how exactly this renders html on to the page next week.
(function renderAllShops() {
  for (var i = 0; i < allShops.length; i++) {
    allShops[i].render();
  }
})();

//renderAllShops structure is called an IIFE - immediately invoked function expression