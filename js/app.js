/* eslint-disable indent */
'use strict';
//global variables
BusMall.allItems = [];
var votingRoundsTotal = 0;
var maxRounds = 24;
//Objects
new BusMall('R2D2 Luggage', '/img/bag.jpg');
new BusMall('banana slicer', '/img/banana.jpg');
new BusMall('lazy Pooper', '/img/bathroom.jpg');
new BusMall('toeless boots', '/img/boots.jpg');
new BusMall('breakfast machine', '/img/breakfast.jpg');
new BusMall('meatball gum', '/img/bubblegum.jpg');
new BusMall('straddle chair', '/img/chair.jpg');
new BusMall('cthulhu figurine', '/img/cthulhu.jpg');
new BusMall('duck muzzle', '/img/dog-duck.jpg');
new BusMall('dragon meat', '/img/dragon.jpg');
new BusMall('utensil pens', '/img/pen.jpg');
new BusMall('dog broom feet', '/img/pet-sweep.jpg');
new BusMall('pizza scissors', '/img/scissors.jpg');
new BusMall('shark', '/img/shark.jpg');
new BusMall('sweep', '/img/sweep.png');
new BusMall('tauntaun', '/img/tauntaun.jpg');
new BusMall('unicorn', '/img/unicorn.jpg');
new BusMall('usb', '/img/usb.gif');
new BusMall('water can', '/img/water-can.jpg');
new BusMall('wine-glass', '/img/wine-glass.jpg');

//constructor
function BusMall(itemName, itemImage) {
    this.name = itemName;
    this.picture = itemImage;
    this.arrayOfThreePictures = [];
    this.clicked = 0;
    this.views = 0;
    this.hasBeenSeen = false;
    BusMall.allItems.push(this);

}

//random index generator
function rng() {
    var randomNumber = Math.floor(Math.random() * BusMall.allItems.length);
    return randomNumber;
}
//placing all images on page and tallies views
var indexLeft = document.getElementById('leftImg');
var indexCenter = document.getElementById('centerImg');
var indexRight = document.getElementById('rightImg');
function putThreeImagesOntoThePage() {
    var ref1 = rng();

    while (BusMall.allItems[ref1].hasBeenSeen === true) {
        ref1 = rng();
    }
    var ref2 = rng();
    while (ref1 === ref2 || BusMall.allItems[ref2].hasBeenSeen === true) {
        ref2 = rng();
    }
    var ref3 = rng();
    while (ref1 === ref3 || ref2 === ref3 || BusMall.allItems[ref3].hasBeenSeen === true) {
        ref3 = rng();
    }
    for (var j = 0; j < BusMall.allItems.length; j++) {
        BusMall.allItems[j].hasBeenSeen = false;
    }
    var prod1 = BusMall.allItems[ref1];
    var prod2 = BusMall.allItems[ref2];
    var prod3 = BusMall.allItems[ref3];
    prod1.hasBeenSeen = true;
    prod2.hasBeenSeen = true;
    prod3.hasBeenSeen = true;
    prod1.views++;
    prod2.views++;
    prod3.views++;
    indexLeft.src = prod1.picture;
    indexCenter.src = prod2.picture;
    indexRight.src = prod3.picture;
    indexLeft.setAttribute('value', prod1.name);
    indexCenter.setAttribute('value', prod2.name);
    indexRight.setAttribute('value', prod3.name);
}
putThreeImagesOntoThePage();

//tallies user votes and ends voting or renders new images
var eventListener1 = document.getElementById('leftImg');
var eventListener2 = document.getElementById('centerImg');
var eventListener3 = document.getElementById('rightImg');
eventListener1.addEventListener('click', voteCounter);
eventListener2.addEventListener('click', voteCounter);
eventListener3.addEventListener('click', voteCounter);
function voteCounter(event) {
    votingRoundsTotal++;
    var valueOfImage = event.target.getAttribute('value');
    for (var i = 0; i < BusMall.allItems.length; i++) {
        if (valueOfImage === BusMall.allItems[i].name) {
            BusMall.allItems[i].clicked++;
        }
    }
    if (votingRoundsTotal >= maxRounds) {
        reportRender();
    } else {
        putThreeImagesOntoThePage();

    }
}
//renders the list
function reportRender() {
    eventListener1.removeEventListener('click', voteCounter);
    eventListener2.removeEventListener('click', voteCounter);
    eventListener3.removeEventListener('click', voteCounter);
    var reportRef = document.getElementById('report');
    for (var i = 0; i < BusMall.allItems.length; i++) {
        var item1 = BusMall.allItems[i];
        var listEl = document.createElement('li');
        listEl.textContent = `${item1.name} has ${item1.clicked} votes and was displayed ${item1.views} times after twenty-five rounds of voting`;
        reportRef.append(listEl);
    }
    localStorage.setItem('object', JSON.stringify(BusMall.allItems));
    chartRender();
}
//renders the chart
var ctx = document.getElementById('myChart').getContext('2d');
function chartRender() {
    chartFoo();
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: nameBucket,
            datasets: [{
                label: '# of Votes',
                data: clickBucket,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(25, 105, 64, 0.2)',
                    'rgba(205, 169, 64, 0.2)',
                    'rgba(115, 179, 64, 0.2)',
                    'rgba(95, 139, 64, 0.2)',
                    'rgba(45, 199, 64, 0.2)',
                    'rgba(245, 29, 64, 0.2)',
                    'rgba(215, 189, 64, 0.2)',
                    'rgba(125, 70, 64, 0.2)',
                    'rgba(50, 50, 64, 0.2)',
                    'rgba(30, 100, 64, 0.2)',
                    'rgba(70, 139, 64, 0.2)',
                    'rgba(160, 129, 64, 0.2)',
                    'rgba(175, 179, 64, 0.2)',
                    'rgba(135, 109, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1
            },
            {
                label: '# of Views',
                data: viewBucket,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
//pushes values for use in local storage
var nameBucket = [];
var viewBucket = [];
var clickBucket = [];
var stringReturn = localStorage.getItem('object');
var parsedSomeArray = JSON.parse(stringReturn);
function chartFoo() {
    for (var i = 0; i < BusMall.allItems.length; i++) {
        clickBucket.push(BusMall.allItems[i].clicked);

        viewBucket.push(BusMall.allItems[i].views);

        nameBucket.push(BusMall.allItems[i].name);
    }
}
if (localStorage.object) {
    stringReturn; parsedSomeArray;
}
else {
    console.log('data not found making new objects');
    new BusMall('R2D2 Luggage', '/img/bag.jpg');
    new BusMall('banana slicer', '/img/banana.jpg');
    new BusMall('lazy Pooper', '/img/bathroom.jpg');
    new BusMall('toeless boots', '/img/boots.jpg');
    new BusMall('breakfast machine', '/img/breakfast.jpg');
    new BusMall('meatball gum', '/img/bubblegum.jpg');
    new BusMall('straddle chair', '/img/chair.jpg');
    new BusMall('cthulhu figurine', '/img/cthulhu.jpg');
    new BusMall('duck muzzle', '/img/dog-duck.jpg');
    new BusMall('dragon meat', '/img/dragon.jpg');
    new BusMall('utensil pens', '/img/pen.jpg');
    new BusMall('dog broom feet', '/img/pet-sweep.jpg');
    new BusMall('pizza scissors', '/img/scissors.jpg');
    new BusMall('shark', '/img/shark.jpg');
    new BusMall('sweep', '/img/sweep.png');
    new BusMall('tauntaun', '/img/tauntaun.jpg');
    new BusMall('unicorn', '/img/unicorn.jpg');
    new BusMall('usb', '/img/usb.gif');
    new BusMall('water can', '/img/water-can.jpg');
    new BusMall('wine-glass', '/img/wine-glass.jpg');
}
