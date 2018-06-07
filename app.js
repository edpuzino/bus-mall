'use strict';

/*array of objects*/
Sales.all = [];
Sales.justViewed = [];

//constructor funtion to generate the information for each picture
function Sales(name, filepath) {
    this.name = name;
    this.filepath = filepath;
    this.clicks = 0;
    this.displays = 0;
    Sales.all.push(this);
    /*console.log(this);*/
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


//function to randomly pic three pictures out of the total, do not have the picture show more than once on the page and do not show any of the pictures from the previous page
for(var i = 0; i < Sales.allSales.length; i++);

function getThree() {
    var random = Math.floor(Math.random() * Sales.allSales.length);

}


//clear the indication of being shown on the previous pages pictures, indicate the new three pictures as being shown, send all three new pictures to the page, add 1 to each new picture displays values

first.src = 
second.src =
third.src = 


//functions that run depending on which picture was chosen
function firstPic () {
    //adds a value to the clicks for the picture chosen, then sends you to the function to pick three new random pictures
    getThree();
}

function secondPic () {

    getThree();
}

function thirdPic () {

    getThree();
}


//declare an event
populate();


//an event listener for the click
var first = document.getElementById('left');
var second = document.getElementById('center');
var third = document.getElementById('right');

first.addEventListener('click', firstPic);
second.addEventListener('click', secondPic);
third.addEventListener('click', thirdPic)