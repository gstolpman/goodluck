var font;
var textWidth1, textWidth2, textWidth3;
var scrollSpeed = 14;
var scrollingRight1 = true; 
var scrollingRight2 = true; 
var scrollingRight3 = true; 
var delayFrames = 30;

function preload(){
  font = loadFont('fonts/JacquardaBastarda9Charted-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  textAlign(CENTER, CENTER); 
  textFont(font); 
  textSize(width*(50/500)); 
  textWidth1 = textWidth("When you wake up next to him in the middle of the night");
  textWidth2 = textWidth("With your head in your hands,");
  textWidth3 = textWidth("You're nothing more than his wife.");
}

function draw() {
  background(220); 

  if (scrollingRight1) {
    var x1 = (frameCount * scrollSpeed) % (width + textWidth1) - textWidth1 / 2;
  } else {
    var x1 = (width - (frameCount * scrollSpeed) % (width + textWidth1)) + textWidth1 / 2;
  }

  text("When you wake up next to him in the middle of the night", x1, textAscent("When you wake up next to him in the middle of the night") );
  
  
  if (scrollingRight2) {
    var x2 = (frameCount * scrollSpeed) % (width + textWidth2) - textWidth2 / 2;
  } else {
    var x2 = (width - (frameCount * scrollSpeed) % (width + textWidth2)) + textWidth2 / 2;
  }
  // Draw the second text
  text("With your head in your hands,", x2, height / 2.2);
  
  // Calculate x position for the third text based on scrolling direction
  if (scrollingRight3) {
    var x3 = (frameCount * scrollSpeed) % (width + textWidth3) - textWidth3 / 2;
  } else {
    var x3 = (width - (frameCount * scrollSpeed) % (width + textWidth3)) + textWidth3 / 2;
  }
  // Draw the third text
  text("You're nothing more than his wife.", x3, height*(1.73/3) + textAscent("You're nothing more than his wife."));
}

function mousePressed() {
  var thirdHeight = height / 3; // Calculate height of each third of the canvas
  // Check which third of the canvas the mouse is clicked in and toggle scrolling direction accordingly
  if (mouseY < thirdHeight) {
    scrollingRight1 = !scrollingRight1; // Toggle scrolling direction for the first text
  } else if (mouseY < 2 * thirdHeight) {
    scrollingRight2 = !scrollingRight2; // Toggle scrolling direction for the second text
  } else {
    scrollingRight3 = !scrollingRight3; // Toggle scrolling direction for the third text
  }
}
