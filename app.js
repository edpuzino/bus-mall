'use strict';

/*array of objects*/
Sales.allSales = [];

//constructor funtion to generate the information for each picture
function Sales(name, filepath) {
    this.name = name;
    this.filepath = filepath;
    this.clicks = 0;
    this.displays = 0;
    Sales.allSales.push(this);
    console.log(this);
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

//declare an event
populate();

//an event listener for the click