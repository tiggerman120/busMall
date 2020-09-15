'use strict';
//global variables
var allItems = [];

var indexImg = [];


new busMall('R2D2 Luggage', '/img/bag.jpg');
new busMall('banana slicer', '/img/banana.jpg');
new busMall('lazy Pooper', '/img/bathroom.jpg');
new busMall('toeless boots', '/img/boots.jpg');
new busMall('breakfast machine', '/img/breakfast.jpg');
new busMall('meatball gum', '/img/bubblegum.jpg');
new busMall('straddle chair', '/img/chair.jpg');
new busMall('cthulhu figurine', '/img/cthulhu.jpg');
new busMall('duck muzzle', '/img/dog-duck.jpg');
new busMall('dragon meat', '/img/dragon.jpg');
new busMall('utensil pens', '/img/pen.jpg');
new busMall('dog broom feet', '/img/pet-sweep.jpg');
new busMall('pizza scissors', '/img/scissors.jpg');
new busMall('shark', '/img/shark.jpg');
new busMall('sweep', '/img/sweep.png');
new busMall('tauntaun', '/img/tauntaun.jpg');
new busMall('unicorn', '/img/unicorn.jpg');
new busMall('usb', '/img/water-can.jpg');
new busMall('water can', '/img/water-can.jpg');
new busMall('wine-glass', '/img/wine-glass.jpg');






  
function busMall (itemName, itemImage) {
  this.productName = itemName;
  this.productImage = itemImage;
  this.imgArr = []
  this.clicked = 0;
  this.views = 0;
   this.allItems = []
  this.timeClicked = []



  allItems.push(this);
 
}

busMall.prototype.tallyVote = function() {
    this.clicked += 1;
    // console.log(parseInt(this.clicked));
    console.log(this.productName);
    }
    
    
  


function rng() {
var randomNumber = [Math.floor(Math.random() * allItems.length)];
    return randomNumber;
    

}

console.log(rng());



// indexCenter = document.getElementById('centerIndex');
// indexRight = document.getElementById('rightIndex');
function rngImg() {
  
    for( var i = 0; i < 3; i++) {
        //assign variable with value of rng() push the value into a global array and use that variable as the index on line 80 and in tallyvote function
        var x = 'indexImg' + i;
        console.log(x);
        var imgCall = document.getElementById(x);
        console.log(imgCall);
        indexImg.src = allItems[rng()].productImage;
        indexImg.push(indexImg.src);
        imgCall.src = indexImg[i];
    
        
        console.log('tacos');
    }
    
}

rngImg();
console.log(indexImg);





var getEle0 = document.getElementById('indexImg0');
var getEle1 = document.getElementById('indexImg1');
var getEle2 = document.getElementById('indexImg2');
getEle0.addEventListener('click', busMall.prototype.tallyVote());
getEle1.addEventListener('click', busMall.prototype.tallyVote());
getEle2.addEventListener('click', busMall.prototype.tallyVote());




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



