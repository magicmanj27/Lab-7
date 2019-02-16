'use strict'
// Selecting a ul by it class name via the DOM 
var pikeUI = document.getElementById('first-pike');
var seatacUI = document.getElementById('seatac-airport');
var seaCenUI = document.getElementById('seattle-center');
var capHillUI = document.getElementById('capital-hill');
var alkiUI = document.getElementById('alki');

console.log(seatacUI);
console.log(pikeUI);

var hoursOfOperation = [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm',
]; 

//Creating an object to hold properties for the 1st and Pike store location.
var firtPikeStore = {
    // Key for given values by the client: avg maxium customer, avg minium customer, and avg cookies sold.
    minCust: 23,
    maxCust: 65,
    avgCookiesSold: 6.3,

    
    
    // Making a method and passing in min and max customers to generate a random number between a specified range.  
    makeRandom: function(minCust, maxCust) {
        // Returning the calculation of the randomized number.
        return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    },

    // Empty key array to store the calculation of the average cookies sold per hour.
    cookiesPerHour: [],
    // Key set to zero to store the calculation of the random customers and the cookies sold.
    cookiesSold: 0,

    total: 0,

    // Making a method for the calculation of the cookies sold per hour.
    calculate: function() {
        for(var i = 0; i < hoursOfOperation.length; i++) {
            // Making variable for randomized customers per hour.
            var randomCustomer = this.makeRandom();
            // Calculating cookies sold per hour, t.aCS = 6.3 * 100 / the amount of randomized customers.
            this.cookiesSold = Math.floor(this.avgCookiesSold * randomCustomer);
            // Pushing the calculation of the cookies sold to store in an empty key array.
            this.cookiesPerHour.push(this.cookiesSold);

            this.total += this.cookiesSold;
        }
    }, 
    
    render: function () {
        this.calculate();
        for(var i = 0; i < hoursOfOperation.length; i++) {
            var firstPikeLi = document.createElement('li');
            firstPikeLi.textContent = `${hoursOfOperation[i]}: ${this.cookiesPerHour[i]}.`;
            pikeUI.appendChild(firstPikeLi);
        }
    },

    totalrender: function () {
        this.render();
            var firstPikeLi = document.createElement('li');
            firstPikeLi.textContent = `$Total: ${this.total}.`;
            pikeUI.appendChild(firstPikeLi);
    }
}

var seatacStore = {

    minCust: 3,
    maxCust: 24,
    avgCookiesSold: 1.2,

    hoursOfOperation: [
        '6am',
        '7am',
        '8am',
        '9am',
        '10am',
        '11am',
        '12pm',
        '1pm',
        '2pm',
        '3pm',
        '4pm',
        '5pm',
        '6pm',
        '7pm',
        '8pm',
    ],

    // Making a method and passing in min and max customers to generate a random number between a specified range.  
    makeRandom: function(minCust, maxCust) {
        // Returning the calculation of the randomized number.
        return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    },

    // Empty key array to store the calculation of the average cookies sold per hour.
    cookiesPerHour: [],
    // Key set to zero to store the calculation of the random customers and the cookies sold.
    cookiesSold: 0,

    // Making a method for the calculation of the cookies sold per hour.
    calculate: function() {
        for(var i = 0; i < this.hoursOfOperation.length; i++) {
            // Making variable for randomized customers per hour.
            var randomCustomer = this.makeRandom();
            // Calculating cookies sold per hour, t.aCS = 6.3 * 100 / the amount of randomized customers.
            this.cookiesSold = Math.floor(this.avgCookiesSold * randomCustomer );
            // Pushing the calculation of the cookies sold to store in an empty key array.
            this.cookiesPerHour.push(this.cookiesSold);
        }
    }, 

    render: function () {
        this.calculate();
        for(var i = 0; i < this.hoursOfOperation.length; i++) {
            var seatacLi = document.createElement('li');
            seatacLi.textContent = `${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]}.`;
            seatacUI.appendChild(seatacLi);
        }
    }
}

var seaCentStore = {

    minCust: 11,
    maxCust: 38,
    avgCookiesSold: 3.7,

    hoursOfOperation: [
        '6am',
        '7am',
        '8am',
        '9am',
        '10am',
        '11am',
        '12pm',
        '1pm',
        '2pm',
        '3pm',
        '4pm',
        '5pm',
        '6pm',
        '7pm',
        '8pm',
    ],

    // Making a method and passing in min and max customers to generate a random number between a specified range.  
    makeRandom: function(minCust, maxCust) {
        // Returning the calculation of the randomized number.
        return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    },

    // Empty key array to store the calculation of the average cookies sold per hour.
    cookiesPerHour: [],
    // Key set to zero to store the calculation of the random customers and the cookies sold.
    cookiesSold: 0,
  

    // Making a method for the calculation of the cookies sold per hour.
    calculate: function() {
        for(var i = 0; i < this.hoursOfOperation.length; i++) {
            // Making variable for randomized customers per hour.
            var randomCustomer = this.makeRandom();
            // Calculating cookies sold per hour, t.aCS = 6.3 * 100 the amount of randomized customers.
            this.cookiesSold = Math.floor(this.avgCookiesSold * randomCustomer );
            // Pushing the calculation of the cookies sold to store in an empty key array.
            this.cookiesPerHour.push(this.cookiesSold);

            
        }
    }, 

    render: function () {
        this.calculate();
        for(var i = 0; i < this.hoursOfOperation.length; i++) {
            var seaCenLi = document.createElement('li');
            seaCenLi.textContent = `${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]}.`;
            seaCenUI.appendChild(seaCenLi);
        }
    }
}

var capitalHillStore = {

    minCust: 20,
    maxCust: 38,
    avgCookiesSold: 2.3,

    hoursOfOperation: [
        '6am',
        '7am',
        '8am',
        '9am',
        '10am',
        '11am',
        '12pm',
        '1pm',
        '2pm',
        '3pm',
        '4pm',
        '5pm',
        '6pm',
        '7pm',
        '8pm',
    ],

    // Making a method and passing in min and max customers to generate a random number between a specified range.  
    makeRandom: function(minCust, maxCust) {
        // Returning the calculation of the randomized number.
        return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    },

    // Empty key array to store the calculation of the average cookies sold per hour.
    cookiesPerHour: [],
    // Key set to zero to store the calculation of the random customers and the cookies sold.
    cookiesSold: 0,
  

    // Making a method for the calculation of the cookies sold per hour.
    calculate: function() {
        for(var i = 0; i < this.hoursOfOperation.length; i++) {
            // Making variable for randomized customers per hour.
            var randomCustomer = this.makeRandom();
            // Calculating cookies sold per hour, t.aCS = 6.3 * 100 the amount of randomized customers.
            this.cookiesSold = Math.floor(this.avgCookiesSold * randomCustomer );
            // Pushing the calculation of the cookies sold to store in an empty key array.
            this.cookiesPerHour.push(this.cookiesSold);

            
        }
    }, 

    render: function () {
        this.calculate();
        for(var i = 0; i < this.hoursOfOperation.length; i++) {
            var capHillLi = document.createElement('li');
            capHillLi.textContent = `${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]}.`;
            capHillUI.appendChild(capHillLi);
        }
    }
}

var capitalHillStore = {

    minCust: 20,
    maxCust: 38,
    avgCookiesSold: 2.3,

    hoursOfOperation: [
        '6am',
        '7am',
        '8am',
        '9am',
        '10am',
        '11am',
        '12pm',
        '1pm',
        '2pm',
        '3pm',
        '4pm',
        '5pm',
        '6pm',
        '7pm',
        '8pm',
    ],

    // Making a method and passing in min and max customers to generate a random number between a specified range.  
    makeRandom: function(minCust, maxCust) {
        // Returning the calculation of the randomized number.
        return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    },

    // Empty key array to store the calculation of the average cookies sold per hour.
    cookiesPerHour: [],
    // Key set to zero to store the calculation of the random customers and the cookies sold.
    cookiesSold: 0,
  

    // Making a method for the calculation of the cookies sold per hour.
    calculate: function() {
        for(var i = 0; i < this.hoursOfOperation.length; i++) {
            // Making variable for randomized customers per hour.
            var randomCustomer = this.makeRandom();
            // Calculating cookies sold per hour, t.aCS = 6.3 * the amount of randomized customers.
            this.cookiesSold = Math.floor(this.avgCookiesSold * randomCustomer );
            // Pushing the calculation of the cookies sold to store in an empty key array.
            this.cookiesPerHour.push(this.cookiesSold);

            
        }
    }, 

    render: function () {
        this.calculate();
        for(var i = 0; i < this.hoursOfOperation.length; i++) {
            var capHillLi = document.createElement('li');
            capHillLi.textContent = `${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]}.`;
            capHillUI.appendChild(capHillLi);
        }
    }
}

var alkiStore = {

    minCust: 2,
    maxCust: 16,
    avgCookiesSold: 4.6,

    hoursOfOperation: [
        '6am',
        '7am',
        '8am',
        '9am',
        '10am',
        '11am',
        '12pm',
        '1pm',
        '2pm',
        '3pm',
        '4pm',
        '5pm',
        '6pm',
        '7pm',
        '8pm',
    ],

    // Making a method and passing in min and max customers to generate a random number between a specified range.  
    makeRandom: function(minCust, maxCust) {
        // Returning the calculation of the randomized number.
        return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    },

    // Empty key array to store the calculation of the average cookies sold per hour.
    cookiesPerHour: [],
    // Key set to zero to store the calculation of the random customers and the cookies sold.
    cookiesSold: 0,
  

    // Making a method for the calculation of the cookies sold per hour.
    calculate: function() {
        for(var i = 0; i < this.hoursOfOperation.length; i++) {
            // Making variable for randomized customers per hour.
            var randomCustomer = this.makeRandom();
            // Calculating cookies sold per hour, t.aCS = 6.3 * the amount of randomized customers.
            this.cookiesSold = Math.floor(this.avgCookiesSold * randomCustomer );
            // Pushing the calculation of the cookies sold to store in an empty key array.
            this.cookiesPerHour.push(this.cookiesSold);

            
        }
    }, 

    render: function () {
        this.calculate();
        for(var i = 0; i < this.hoursOfOperation.length; i++) {
            var alkiLi = document.createElement('li');
            alkiLi.textContent = `${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]}.`;
            alkiUI.appendChild(alkiLi);
        }
    }
}


// alkiStore.render();
// capitalHillStore.render();
// seaCentStore.render();
// seatacStore.render();
// console.log("Calculate function " + seatacStore.calculate());
// console.log("Cookies per hour: " + seatacStore.cookiesPerHour);
// console.log("Random number: " + seatacStore.makeRandom());
// console.log("Hour of operation: " + seatacStore.hoursOfOperation);
// console.log("Cookies sold in one hour "+ seatacStore.cookiesSold);
// console.log("Render: " + seatacStore.render);

firtPikeStore.totalrender();
console.log(firtPikeStore.total);
// Logging various properties for visual purposes.
// console.log("Calculate function " + firtPikeStore.calculate());
// console.log("Cookies per hour: " + firtPikeStore.cookiesPerHour);
// console.log("Random number: " + firtPikeStore.makeRandom());
// console.log("Hour of operation: " + firtPikeStore.hoursOfOperation);
// console.log("Cookies sold in one hour "+ firtPikeStore.cookiesSold);
// console.log("Render: " + firtPikeStore.render);