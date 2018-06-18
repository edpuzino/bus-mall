'use strict';

/*array of objects*/
var first = document.getElementById('left');
var second = document.getElementById('center');
var third = document.getElementById('right');
var sales = [];
var justViewed = [];

//constructor funtion to generate the information for each picture
function Sales(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.clicks = 0;
  this.displays = 0;
  sales.push(this);
}

//function that sends all of the data to the constructor function
function populate() {
  new Sales('Bag', 'img/bag.jpg');
  new Sales('Banana', 'img/banana.jpg');
  new Sales('Bathroom', 'img/bathroom.jpg');
  new Sales('Boots', 'img/boots.jpg');
  new Sales('Breakfast', 'img/breakfast.jpg');
  new Sales('Bubblegum', 'img/bubblegum.jpg');
  new Sales('Chair','img/chair.jpg');
  new Sales('Cthulhu', 'img/cthulhu.jpg');
  new Sales('Dog Duck', 'img/dog-duck.jpg');
  new Sales('Dragon', 'img/dragon.jpg');
  new Sales('Pen', 'img/pen.jpg');
  new Sales('Pet Sweep', 'img/pet-sweep.jpg');
  new Sales('Scissors', 'img/scissors.jpg');
  new Sales('Shark', 'img/shark.jpg');
  new Sales('Sweep', 'img/sweep.png');
  new Sales('Tauntaun', 'img/tauntaun.jpg');
  new Sales('Unicorn', 'img/unicorn.jpg');
  new Sales('USB', 'img/usb.gif');
  new Sales('Water Can', 'img/water-can.jpg');
  new Sales('Wine Glass', 'img/wine-glass.jpg');
}

//function that displays the chart when finished
function chart() {
  var votes = [];
  var labelNames = [];
  var colors = ['purple', 'salmon', 'red', 'blue', 'saddlebrown', 'yellow', 'pink', 'green', 'violet', 'navy', 'orange', 'lime', 'turquoise', 'olivedrab', 'maroon', 'khaki', 'gold', 'darkgray', 'yellowgreen', 'indigo'];
  for(var i = 0; i < sales.length; i++) {
    votes[i] = sales[i].clicks;
    labelNames[i] = sales[i].name;
  }
  var ctx = document.getElementById('chart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labelNames,
      datasets: [{
        label:'# of votes for each product',
        data: votes,
        backgroundColor: colors,
        borderColor: 'black',
        borderWidth: 1
      }]
    },
    options:{
      scales: {
        yAxes: [{
          ticks:{
            beginAtZero: true
          }
        }]
      }
    }
  });
}

//function that displays the percentages chart when finished
function percentage() {
  var percent = [];
  var labelNames = [];
  var colors = ['purple', 'salmon', 'red', 'blue', 'saddlebrown', 'yellow', 'pink', 'green', 'violet', 'navy', 'orange', 'lime', 'turquoise', 'olivedrab', 'maroon', 'khaki', 'gold', 'darkgray', 'yellowgreen', 'indigo'];
  for(var i = 0; i < sales.length; i++) {
    percent[i] = sales[i].clicks / sales[i].displays * 100;
    labelNames[i] = sales[i].name;
  }
  var ctx = document.getElementById('percent').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labelNames,
      datasets: [{
        label:'% of times displayed, that the product was clicked on',
        data: percent,
        backgroundColor: colors,
        borderColor: 'black',
        borderWidth: 1
      }]
    },
    options:{
      scales: {
        yAxes: [{
          ticks:{
            beginAtZero: true
          }
        }]
      }
    }
  });
}


function getRandom() {
  return Math.floor(Math.random() * sales.length);
}

//function to randomly pic three pictures out of the total, do not have the picture show more than once on the page and do not show any of the pictures from the previous page
function getThree() {
  var currentPics = [];
  //choose left picture
  currentPics[0] = getRandom();
  while( justViewed.indexOf(currentPics[0]) !== -1) {
    currentPics[0] = getRandom();
  }
  //choose center picture
  currentPics[1] = getRandom();
  while( currentPics[0] === currentPics[1] || justViewed.indexOf(currentPics[1]) !== -1) {
    currentPics[1] = getRandom();
  }
  //choose right picture
  currentPics[2] = getRandom();
  while ( currentPics[0] === currentPics[2] || currentPics[1] === currentPics[2] || justViewed.indexOf(currentPics[2]) !== -1) {
    currentPics[2] = getRandom();
  }
  justViewed = currentPics;
  var setViewed = JSON.stringify(justViewed);
  localStorage.setItem('pictures', setViewed);
  display();
}

//function that displays the pictures to the page
function display() {
  first.src = sales[justViewed[0]].filepath;
  sales[justViewed[0]].displays += 1;

  second.src = sales[justViewed[1]].filepath;
  sales[justViewed[1]].displays += 1;

  third.src = sales[justViewed[2]].filepath;
  sales[justViewed[2]].displays += 1;
}

//this function runs when the voting is over
function endSurvey() {
  chart ();
  percentage ();
  first.removeEventListener('click', firstPic);
  second.removeEventListener('click', secondPic);
  third.removeEventListener('click', thirdPic);
  document.getElementById('testData').innerHTML = 'Thank you ' + localStorage.name + ', for taking our survey, your input is greatly appreciated.';
  localStorage.clear();
}

//functions that run depending on which picture was chosen, adds a click to that picture and gets three new pictures
function firstPic () {
  sales[justViewed[0]].clicks += 1;
  var setSales = JSON.stringify(sales);
  localStorage.setItem('numbers', setSales);
  if (localStorage.totalClicks) {
    localStorage.totalClicks = Number(localStorage.totalClicks) + 1;
    if(Number(localStorage.totalClicks) >= 25) {
      endSurvey();
    } else {
      document.getElementById('testData').innerHTML = localStorage.name + ' you have now voted ' + Number(localStorage.totalClicks) + ' times.';
      getThree();
    }
  } else {
    localStorage.setItem('totalClicks', '1');
    document.getElementById('testData').innerHTML = localStorage.name + ' you have now voted 1 time.';
    getThree();
  }
}
function secondPic () {
  sales[justViewed[1]].clicks += 1;
  var setSales = JSON.stringify(sales);
  localStorage.setItem('numbers', setSales);
  if (localStorage.totalClicks) {
    localStorage.totalClicks = Number(localStorage.totalClicks) + 1;
    if(Number(localStorage.totalClicks) >= 25) {
      endSurvey();
    } else {
      document.getElementById('testData').innerHTML = localStorage.name + ' you have now voted ' + Number(localStorage.totalClicks) + ' times.';
      getThree();
    }
  } else {
    localStorage.setItem('totalClicks', '1');
    document.getElementById('testData').innerHTML = localStorage.name + ' you have now voted 1 time.';
    getThree();
  }
}
function thirdPic () {
  sales[justViewed[2]].clicks += 1;
  var setSales = JSON.stringify(sales);
  localStorage.setItem('numbers', setSales);
  if (localStorage.totalClicks) {
    localStorage.totalClicks = Number(localStorage.totalClicks) + 1;
    if(Number(localStorage.totalClicks) >= 25) {
      endSurvey();
    } else {
      document.getElementById('testData').innerHTML = localStorage.name + ' you have now voted ' + Number(localStorage.totalClicks) + ' times.';
      getThree();
    }
  } else {
    localStorage.setItem('totalClicks', '1');
    document.getElementById('testData').innerHTML = localStorage.name + ' you have now voted 1 time.';
    getThree();
  }
}

//declare an event
function run() {
  populate();
  getThree();
}

//checks to see if the user is a returning customer
if(localStorage.name) {
  document.getElementById('testData').innerHTML = 'Welcome back ' + localStorage.name + ', it\'s nice to see you again.';
  var getSales = localStorage.getItem('numbers');
  sales = JSON.parse(getSales);
  var getViewed = localStorage.getItem('pictures');
  justViewed = JSON.parse(getViewed);
  if (localStorage.totalClicks) {
    display();
  } else {
    populate();
    display();
  }

} else {
  var user = prompt('Hello, welcome to our survey, can we have your name?');
  localStorage.setItem('name', user);
  run();
}

//event listeners for the click
first.addEventListener('click', firstPic);
second.addEventListener('click', secondPic);
third.addEventListener('click', thirdPic);