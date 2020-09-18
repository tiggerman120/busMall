/* eslint-disable indent */
'use strict';
//i need to generate 3 new images. increment everything properly. get clarification on bullet 1 of step 4 and display votes received and number oftimes each image is views
//global variables
BusMall.allItems = [];
var arrayOfImagesToBeDisplayed = [];
var integer = rng();
// var globalSingleImg = [];
var votingRoundsTotal = 0;
var maxRounds = 24;
var arrayOfThreePictures = [];
var product1 = [];
var product2 = [];
var product3 = [];

// var eventListener = document.getElementById('boxOfButtons');
// eventListener.addEventListener('click', voteCounter);
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
    this.views = 0; //this increments everytime an item is displayed
    this.hasBeenSeen = false;
    BusMall.allItems.push(this); //this fills my array of items

}

// busMall.prototype.tallyVote = function(event) {
//     this.clicked += 1;
//     //i think im missing something with attaching my event listener but i dont know
//     //i need this to increment everytime i click an image.
//     //the teacher mentioned the setAttribute() when you use .src. is that my issue with the clicks not logging?
//     //i think another issue is that voteRng has the rng function passed into it which is generating a random index value
//     //but it is not generating the actual image value in that indsex position so the image never gets referenced.
//     //im not sure how to fix that with my rngImg function looping through 3 images?
//     console.log(voteRng) ;
//     }
// busMall.prototype.tallyVote();




function rng() {
    var randomNumber = Math.floor(Math.random() * BusMall.allItems.length);
    return randomNumber;
    //this function generates a random number and uses it as an index reference number
    //that is why my clicks dont work
}


// function getMyShitOnTheScreenWithWhileLoops() {
//     //this will hold all 3 index values
//     arrayOfThreePictures = [];
//     //this will store the first two pictures
//     arrayOfThreePictures[0] = rng();
//     arrayOfThreePictures[1] = rng();
//     //I need someone to help me with while loops I don't think i understand them.
//     while (arrayOfThreePictures[0] === arrayOfThreePictures[1]) {
//         console.log('this is checking if the while loop ran');
//         arrayOfThreePictures[1] = rng();

//         //I am comparing the third unique picture
//         arrayOfThreePictures[2] = rng();
//         while (arrayOfThreePictures[2] === arrayOfThreePictures[1] || arrayOfThreePictures[2] === arrayOfThreePictures[0]); {
//             console.log('this is checking if the while loop ran');
//             arrayOfThreePictures[2] = rng();
//         }
//         console.log(arrayOfThreePictures[0]);
//     }
//     // eslint-disable-next-line indent
//     //   for (var i = 0; i < 3; i++) {
//     //     //i dont know how to call these file paths. //is this dot notation? i am so stressed out i really cant afford to feel this fucking lost
//     //     allItems.picture[i].src = allItems[arrayOfThreePictures[i]].path;
//     //     BusMall.picture[i].id = BusMall.allItems[arrayOfThreePictures[i]].name;
//     //     BusMall.allItems[arrayOfThreePictures[i]].views += 1;

// }
// getMyShitOnTheScreenWithWhileLoops();

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
    product1 = prod1;
    product2 = prod2;
    product3 = prod3;
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
        //create a function that shows the chart.JS thing and call it here
        reportRender();
    } else {
        putThreeImagesOntoThePage();

    }
}


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
}
function chartFoo() {

    for (var i = 0; i < BusMall.allItems.length; i++) {

        var chartClick = [BusMall.allItems[i].clicked];
        var chartViews = [BusMall.allItems[i].views];
        return chartClick[i], chartViews[i];
    }
}
function addData(chart, label, data) {
    var name = BusMall.allItems.name;
    var clicks = BusMall.allItems.clicked;
    var viewed = BusMall.allItems.views;
    for (var i = 0; i < BusMall.allItems.length; i++) {

    }
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}
function chartNameFoo() {
    for (var i = 0; i < BusMall.allItems.length; i++) {
        var chartName = [BusMall.allItems[i].name];
        myChart.append(chartName);
    }

}
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [chartNameFoo()],
        datasets: [{
            label: '# of Votes',
            data: [chartFoo()],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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
