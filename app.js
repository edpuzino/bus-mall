'use strict';

/*array of objects*/
var sales = [];
var justViewed = [];
var totalClicks = 0;
var first = document.getElementById('left');
var second = document.getElementById('center');
var third = document.getElementById('right');

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

//functio that displays the list when finished
function list() {
    var ulEl = document.getElementById('tally');
    for( var i = 0; i < sales.length; i++ ) {
        var liEl = document.createElement('li');
        liEl.textContent = sales[i].name + ' received ' + sales[i].clicks + ' votes and was displayed ' + sales[i].displays + ' times.'; 
        ulEl.appendChild(liEl);     
    }
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
    justViewed = currentPics
    display();
}

//function that displays the pictures to the page
function display () {
    first.src = sales[justViewed[0]].filepath;
    sales[justViewed[0]].displays +=1;

    second.src = sales[justViewed[1]].filepath;
    sales[justViewed[1]].displays +=1;

    third.src = sales[justViewed[2]].filepath;
    sales[justViewed[2]].displays +=1;    
}

//functions that run depending on which picture was chosen, adds a click to that picture and gets three new pictures
function firstPic () {
    sales[justViewed[0]].clicks +=1;
    totalClicks +=1;
    if(totalClicks < 25) {
        getThree();
    } else {
            list();
    }
}
function secondPic () {
    sales[justViewed[1]].clicks +=1;
    totalClicks +=1;
    if(totalClicks < 25) {
        getThree();
    } else {
            list();
    }
}
function thirdPic () {
    sales[justViewed[2]].clicks +=1;
    totalClicks +=1;
    if(totalClicks < 25) {
        getThree();
    } else {
            list();
    }
}

//declare an event
function run() {
    populate();
    getThree();
}
run();

//event listeners for the click
first.addEventListener('click', firstPic);
second.addEventListener('click', secondPic);
third.addEventListener('click', thirdPic)