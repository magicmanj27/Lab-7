'use strict'

var storeTable = document.getElementById('storeTable');

// var pikeUI = document.getElementById('first-pike');
// var seatacUI = document.getElementById('seatac-airport');
// var pikeUI = document.getElementById('first-pike');
// var pikeUI = document.getElementById('first-pike');
// var pikeUI = document.getElementById('first-pike');

var hourOfOperation = [
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

function CookieShop(minCust, maxCust, avgCookiesSold, shopName) {
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookiesSold = avgCookiesSold;
    this.shopName = shopName;

   

    this.cookiesSoldPerHour = [];
    this.cookiesSold = 0;
    this.total = 0;

    this.makeRandom = function() {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    }

    this.calculate = function() {
        for(var i = 0; i < hourOfOperation.length; i++) {
            var randomCustomer = this.makeRandom();
            this.cookiesSold = Math.floor(this.avgCookiesSold * randomCustomer);
            this.cookiesSoldPerHour.push(this.cookiesSold);
            this.total += this.cookiesSold;
        } 
    }

    this.render = function() {
        this.calculate();
        var tdEl = document.createElement('td');
        var trEl = document.createElement('tr');
        var thEl = document.createElement('th');
        thEl.textContent = this.shopName;
        trEl.appendChild(thEl);
        for(var i = 0; i < hourOfOperation.length; i++) {
            tdEl = document.createElement('td');
            tdEl.textContent = `${this.cookiesSoldPerHour[i]}`;
            trEl.appendChild(tdEl);
        }
        thEl = document.createElement('th');
        thEl.textContent = this.total;
        trEl.appendChild(thEl);
        storeTable.appendChild(trEl);
    }
}

function tableHeader(){
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = '';
    trEl.appendChild(thEl);
    // storeTable.appendChild(trEl);
    for(var i = 0; i < hourOfOperation.length; i++) {
        thEl = document.createElement('th'); 
        thEl.textContent = hourOfOperation[i];
        trEl.appendChild(thEl); 
        // storeTable.appendChild(trEl);
    }
    thEl = document.createElement('th');
    thEl.textContent = 'Total';
    trEl.appendChild(thEl);
    storeTable.appendChild(trEl);
}

function tableFooter(){
   var thEl = document.createElement('th');
   var trEl = document.createElement('tr');
   thEl.textContent = 'Total';
   trEl.appendChild(thEl);
   for (var i = 0; i < hourOfOperation.length; i++) {
        thEl = document.createElement('th');
        thEl.textContent = '1';
        trEl.appendChild(thEl);
   }
   thEl = document.createElement('th');
   thEl.textContent = '2';
   trEl.appendChild(thEl);
   storeTable.appendChild(trEl);
}





var pikeCookieShop = new CookieShop(23, 65, 6.3, '1st and Pike');
var seatacAirPortCookieShop = new CookieShop(3, 24, 1.2, 'Seattle AirPort');
var seattleCenterShop = new CookieShop(11, 38, 3.7, 'Seattle Center');
var capitalHillCookieShop = new CookieShop(20, 38, 2.3, 'Capital Hill');
var alkiCookieShop = new CookieShop(2, 16, 3.6, 'Alki');

tableHeader();

pikeCookieShop.render();
seatacAirPortCookieShop.render();
seattleCenterShop.render();
capitalHillCookieShop.render();
alkiCookieShop.render();

tableFooter();

console.log(pikeCookieShop);
// console.log(pikeCookieShop.makeRandom());