'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];

var table = document.getElementById('shell');
var shopForm = document.getElementById('shop-form');

function Store(name, minCust, maxCust, avgSale) {
 this.name = name;
 this.minCust = minCust;
 this.maxCust = maxCust;
 this.avgSale = avgSale;
 this.sum = [];
 this.total = 0;

 for (var i = 0; i < hours.length; i++) {
   var answer = Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust)) + this.minCust;
   var cookiePerHr = Math.floor(answer * this.avgSale);
   //console.log(this.name + ": " + cookiePerHr + " cookies per hour");
   //console.log(this.name + ": " + answer + " is answer");
   this.sum.push(cookiePerHr);
   this.total = cookiePerHr + this.total;
 }

 this.render = function () {
   // Store name
   var row = document.createElement('tr');
   var locName = document.createElement('td');
   locName.innerText = this.name;
   row.appendChild(locName);

   // Store data for each hour
   for (var col = 0; col < hours.length; col++) {
     var data = document.createElement('td');
     data.innerText = this.sum[col];
     row.appendChild(data);
   }

   // Store total
   var locTotals = document.createElement('td');
   locTotals.innerText = this.total;
   row.appendChild(locTotals);

   // Append to table
   table.appendChild(row);
 };
}

var pike = new Store('1st and Pike', 23, 65, 6.3);
var seatac = new Store('SeaTac Airport', 3, 24, 1.2);
var center = new Store('Seattle Center', 11, 38, 3.7);
var hill = new Store('Capital Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

var locations = [pike, seatac, center, hill, alki];

function makeHeaderRow() {
 //Locations tile
 var headerRow = document.createElement('tr');
 var blank = document.createElement('th');
 blank.innerText = 'Locations';
 headerRow.appendChild(blank);

 // Hour column titles
 for (var i = 0; i < hours.length; i++) {
   var header = document.createElement('th');
   header.innerText = hours[i];
   headerRow.appendChild(header);
 }

 // Daily total label
 var lastDesc = document.createElement('th');
 lastDesc.innerText = 'Daily Location Total';
 headerRow.appendChild(lastDesc);

 // Append header row to table
 table.appendChild(headerRow);

}

function renderTable() {
 makeHeaderRow();
 renderLocations();
 bottomTotals();
}

renderTable();

function bottomTotals() {
 // Bottom row for totals
 var footerRow = document.createElement('tr');
 var totals = document.createElement('td');
 totals.innerText = 'Totals';
 footerRow.appendChild(totals);

 for (var r = 0; r < hours.length; r++) {
   var footer = document.createElement('td');
   var hourlyTotal = 0;
   for (var lastRow = 0; lastRow < locations.length; lastRow++) {
     hourlyTotal = hourlyTotal + locations[lastRow].sum[r];
   }
   footer.innerText = hourlyTotal;
   footerRow.appendChild(footer);
 }

 table.appendChild(footerRow);

 var grandTotal = document.createElement('td');
 var salesTotal = 0;
 for (var st = 0; st < locations.length; st++) {
   salesTotal = salesTotal + locations[st].total;
 }
 grandTotal.innerText = salesTotal;
 footerRow.appendChild(grandTotal);
}

function handleStoreSubmit(event) {
 event.preventDefault();

 var name = event.target.name.value;
 var minCust = parseInt(event.target.minCust.value);
 var maxCust = parseInt(event.target.maxCust.value);
 var avgSale = parseInt(event.target.avgSale.value);

 var newStore = new Store(name, minCust, maxCust, avgSale);

 event.target.name.value = null;
 event.target.minCust.value = null;
 event.target.maxCust.value = null;
 event.target.avgSale.value = null;

 locations.unshift(newStore);
 console.log(newStore);

 clearTable();
 renderTable();
}

function clearTable() {
 while (table.firstChild) {
   table.removeChild(table.firstChild);
 }
}

function renderLocations() {
 // shopList.innerHTML = '';
 for(var i = 0; i < locations.length; i++) {
   locations[i].render();
 }
}

shopForm.addEventListener('submit', handleStoreSubmit);