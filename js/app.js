/* eslint-disable indent */
'use strict';
//i need to generate 3 new images. increment everything properly. get clarification on bullet 1 of step 4 and display votes received and number oftimes each image is views
//global variables
BusMall.allItems = [];
var arrayOfImagesToBeDisplayed = [];
var integer = rng();
// var globalSingleImg = [];
var votingRoundsTotal = 0;
var maxRounds = 5;
var arrayOfThreePictures = [];
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
new BusMall('usb', '/img/water-can.jpg');
new BusMall('water can', '/img/water-can.jpg');
new BusMall('wine-glass', '/img/wine-glass.jpg');

//constructor
function BusMall(itemName, itemImage) {
    this.name = itemName;
    this.picture = itemImage;
    this.arrayOfThreePictures = [];
    this.clicked = 0;
    this.views = 0; //this increments everytime an item is displayed

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
    var ref2 = rng();
    while (ref1 === ref2) {
        ref2 = rng();
    }
    var ref3 = rng();
    while (ref1 === ref3 || ref2 === ref3) {
        ref3 = rng();
    }
    var prod1 = BusMall.allItems[ref1];
    var prod2 = BusMall.allItems[ref2];
    var prod3 = BusMall.allItems[ref3];
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
        //show results
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
        listEl.textContent = `${item1.name} has ${item1.clicked} votes and was displayed ${item1.views} times after twenty-five rounds of voting`
        reportRef.append(listEl);
    }
}





// function voteTwentyFiveTimes() {
//   for (var i = 0; i < 25; i++) {
//     // console.log(votingRoundsTotal);
//     if (votingRoundsTotal < 25) {
//       votingRoundsTotal++;
//     }
//     // if (votingRoundsTotal < 25) {

//   }
//   //console.log(votingRoundsTotal);
//   console.log(votingRoundsTotal);
// }
// voteTwentyFiveTimes();
// console.log(rng());
// function generateLeftImageAndDisplayIt() {
//   var arrayOfImagesToBeDisplayed = [];
//   var singleImg = document.getElementById('leftImg');
//   var randomNum = rng();
//   arrayOfImagesToBeDisplayed = allItems[randomNum].picture;
//   singleImg.setAttribute('src', arrayOfImagesToBeDisplayed);
//   singleImg.setAttribute('value', randomNum);
//   BusMall.views++;
//   // console.log(arrayOfImagesToBeDisplayed);
// }
// generateLeftImageAndDisplayIt();

// function generateCenterImageAndDisplayIt() {
//   var arrayOfImagesToBeDisplayed = [];
//   var singleImg = document.getElementById('centerImg');
//   var randomNum = rng();
//   arrayOfImagesToBeDisplayed = allItems[randomNum].picture;
//   singleImg.setAttribute('src', arrayOfImagesToBeDisplayed);
//   singleImg.setAttribute('value', randomNum);
//   BusMall.views++;
//   // console.log(arrayOfImagesToBeDisplayed);
// }
// generateCenterImageAndDisplayIt();

// function generateRightImageAndDisplayIt() {

//   var arrayOfImagesToBeDisplayed = [];
//   var singleImg = document.getElementById('rightImg');
//   var randomNum = rng();
//   arrayOfImagesToBeDisplayed = allItems[randomNum].picture;
//   singleImg.setAttribute('src', arrayOfImagesToBeDisplayed);
//   singleImg.setAttribute('value', randomNum);
//   BusMall.views++;


//   //  var button = document.getElementById('item3');
//   //  button.setAttribute('value', arrayOfImagesToBeDisplayed)
//   // console.log(arrayOfImagesToBeDisplayed);
// }
// generateRightImageAndDisplayIt();

// //use a while loop inside the image generators to prvent it from picking the same image in each iteration
// function voteTwentyFiveTimes() {
//   for (var i = 0; i < 25; i++) {
//     // console.log(votingRoundsTotal);
//     if (votingRoundsTotal < 25) {
//       votingRoundsTotal++;
//     }
//     // if (votingRoundsTotal < 25) {

//   }
//   //console.log(votingRoundsTotal);
//   console.log(votingRoundsTotal);
// }
// voteTwentyFiveTimes();

// function voteCounter(event) {

//   var index = event.target.attributes[0].value;
//   console.log(index);
//   var product = allItems[index];
//   product.clicked += 1;

//   console.log(product.views);
//   votingRoundsTotal++;


//   console.log('clicky' + product.clicked);
// }

//   if (votingRoundsTotal === 24) {
//     eventListener1.removeEventListener('click', voteCounter);
//     eventListener2.removeEventListener('click', voteCounter);
//     eventListener3.removeEventListener('click', voteCounter);
//   }
// }
// if (event.target === true) {
//     generateLeftImageAndDisplayIt();
//     generateCenterImageAndDisplayIt();
//     generateRightImageAndDisplayIt();
// } console.log(event.target);
//   this.clicked += 1;
//     console.log(this.clicked);
//if source url is === source url then + 1
//}
// var eventListener1 = document.getElementById('item1');
// var eventListener2 = document.getElementById('item2');
// var eventListener3 = document.getElementById('item3');
// eventListener1.addEventListener('click', voteCounter);
// eventListener2.addEventListener('click', voteCounter);
// eventListener3.addEventListener('click', voteCounter);




//indexImg has the image property

// getEle0.addEventListener('click', busMall.prototype.tallyVote());
// getEle1.addEventListener('click', busMall.prototype.tallyVote());
// getEle2.addEventListener('click', busMall.prototype.tallyVote());




// indexLeft.src = busMall.rngImg();

// function leftIncr() {
//   for (var i = 0; i < allItems.length; i++) {

//   }
// }
// function renderImg() {
//
// console.log(indexLeft.src);
// indexCenter.src = busMall.allitems[rng()].productImage;
// console.log(indexCenter.src);
// indexRight.src = busMall.allitems[rng()].productImage;
// }
// renderImg();
// busMall.allItems[leftIndex].views++;



// function rngImg() {

//     for( var i = 0; i < 3; i++) {
//         //assign variable with value of rng() push the value into a global array and use that variable as the index on line 80 and in tallyvote function
//         var x = 'indexImg' + i;
//         console.log(x);
//         var imgCall = document.getElementById(x);
//         console.log(imgCall);
//         indexImg.src = allItems[rng()].productImage;
//         indexImg.push(indexImg.src);

//         imgCall.src = indexImg[i];

//     }

// var voteRng = []
// //i need to make this not select the same image more than once in any individual iteration
// //i need to make this not display any iterations images on the next iteration
// //

//   }
//   for ( var i = 0; i < 3; i++) {
//       var x = 'indexImg' + i;
//     document.getElementById(x).setAttribute('src', arrayOfImagesToBeDisplayed2[x])
//   console.log(arrayOfImagesToBeDisplayed2[x]);
//   }
// }
//     for( var i = 0; i < 3; i++) {
//         var valuePusher = rng();
//         voteRng.push(valuePusher); //this needs altered because rng doesnt have the item properties
//         console.log(voteRng);
//         //assign variable with value of rng() push the value into a global array
//         // and use that variable as the index on line 80 and in tallyvote function
//         var x = 'indexImg' + i;
//         console.log(x); //these three lines of code are being used to reference the image locations on html page //no image property at thispoint
//         var imageToBeDisplayed = document.getElementById(x); //this is connecting to the html document
//         // console.log(imgCall); //imgCall is working is working
//         console.log(arrayOfImagesToBeDisplayed);
//         var arrayOfImagesToBeDisplayed2 = []
//         arrayOfImagesToBeDisplayed = allItems[rng()].productImage; //this is moving the randomly selected image property
//          arrayOfImagesToBeDisplayed2.push(arrayOfImagesToBeDisplayed); //the teacher mentioned the setattribute function im not sure that is an issue.
//         imageToBeDisplayed = arrayOfImagesToBeDisplayed2[i];// should this be i or x in the brackets the image is displaying so it is working
//     console.log(arrayOfImagesToBeDisplayed2[i]);

//         console.log('nothing broken so far');
