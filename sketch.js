//var dresda;
var moon;
var bombs = [];
var img;
var smallPoint, largePoint;
var s = second()
    


function preload() {
dresda = loadImage("assets/citta.png");
dresda2 = loadImage("assets/citta2.png");
dresda3 = loadImage("assets/citta3.png");
dresda4 = loadImage("assets/citta4.png");
dresda5 = loadImage("assets/citta5.png");
dresda6 = loadImage("assets/citta6.png");
dresda7 = loadImage("assets/citta7.png");
moon = loadImage("assets/moon.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

imageMode(CENTER);
image(dresda, windowWidth/2, windowHeight/2,windowWidth, windowHeight);
    
    if(bombs.length < 100) {
        //backgroundImage(dresda)
        image(dresda, windowWidth/2, windowHeight/2,windowWidth, windowHeight);
        
    }
  if( bombs.length > 100 ) {
        //backgroundImage(dresda)
        image(dresda2, windowWidth/2, windowHeight/2,windowWidth, windowHeight)
        
    }
    
    if(bombs.length > 200) {
        //backgroundImage(dresda)
        image(dresda3, windowWidth/2, windowHeight/2,windowWidth, windowHeight);
    }
    
    if(bombs.length > 300) {
        //backgroundImage(dresda)
        image(dresda4, windowWidth/2, windowHeight/2,windowWidth, windowHeight);
    }
     
    if(bombs.length > 400) {
        //backgroundImage(dresda)
        image(dresda5, windowWidth/2, windowHeight/2,windowWidth, windowHeight);
    }
    
     if(bombs.length > 500) {
        //backgroundImage(dresda)
        image(dresda6, windowWidth/2, windowHeight/2,windowWidth, windowHeight);
    }
   
    if(bombs.length > 600) {
        //backgroundImage(dresda)
        image(dresda7, windowWidth/2, windowHeight/2,windowWidth, windowHeight);
    }
    //iterate on the array
  for(var i=0; i< bombs.length; i++) {
    
    // Increase the single bomb y position
    bombs[i].y+=5;
    
    // Create a new ellipse using the x and y properties of the bomb object
    ellipse(bombs[i].x, bombs[i].y, 4,10);
    
  if (bombs[i].y >= height ) { 
    fill(255,0,0)
    noStroke();
    ellipse(bombs[i].x, 483, bombs[i].size);
    
   } else {
        fill(bombs[i].color);
        noStroke()
      }

  }
var s = second() + 3
image(moon,  width/6 + s, height/3 - s, 70, 70);


    
//Aggiungo un rettangolo per coprire la parte bassa dello schermo altrimenti bombe continuano a cadere, da rifare possibilmente su illustrator.
noStroke();
fill('#050E30');
rect(0,484,1040,483);
    
if(bombs.length > 3) {
    //esempio di 3
        stroke(255);
        fill(0, 0, 0);
        rect(0, 0, windowWidth, windowHeight);
        textSize(32);
        fill(255);
        text("Remember dresda", windowWidth / 3, windowHeight / 3);
        
    }
}

function mouseReleased() {
  
  // Create a new position
  var newx = random()*width;
  var newSize = random(2,10);
  var newColor;
    var myRandom = random(0,1);
    if (myRandom <= 0.5) {
        newColor = color('#E52B50');
    } else {
        newColor = color('#A51800');
    }
  // Create an object representing bomb properties.
  // object properties are defined by name : value
  // and are comma saeparated.
  var obj = {x: newx, y: 0, size: newSize, color: newColor};
  // The object is added to the array.
  bombs.push(obj);
 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  }




















//function backgroundImage(sfondoprova) {
//    
//    var x = 0;
//    var y = 0;
//    var w = width;
//    var h = height;
//    // default offset is center
//    var offsetX = 0.5;
//    var offsetY = 0.5;
//
//    var iw = sfondoprova.width,
//        ih = sfondoprova.height,
//        r = Math.min(w / iw, h / ih),
//        nw = iw * r,   // new prop. width
//        nh = ih * r,   // new prop. height
//        cx, cy, cw, ch, ar = 1;
//
//    // decide which gap to fill    
//    if (nw < w) ar = w / nw;                             
//    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
//    nw *= ar;
//    nh *= ar;
//
//    // calc source rectangle
//    cw = iw / (nw / w);
//    ch = ih / (nh / h);
//
//    cx = (iw - cw) * offsetX;
//    cy = (ih - ch) * offsetY;
//
//    // make sure source rectangle is valid
//    if (cx < 0) cx = 0;
//    if (cy < 0) cy = 0;
//    if (cw > iw) cw = iw;
//    if (ch > ih) ch = ih;
//
//    // fill image in dest. rectangle
//    image(sfondoprova, cx, cy, cw, ch,  x, y, w, h);
//}
