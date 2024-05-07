// Dan Shiffman 
// xinemata

var font;
var sentence = "";
var words = ["You're", "standing", "face", "to", "face", "with", "I", "told", "you", "so"];
var currentIndex = 0;

function preload() {
  font = loadFont('../fonts/JacquardaBastarda9Charted-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  background(255);
  textAlign(CENTER, CENTER);
  textSize(100);
  fill(0);
}

function draw() {
  background(255);
  text(sentence, width / 2, height / 2); 
}

function mouseClicked() {
  if (currentIndex >= words.length) {
    sentence = "";
    currentIndex = 0;
  } else {
    sentence += words[currentIndex] + " ";
    currentIndex++;
  }
}