let texts = [];
let font;
let hueOffset = 0; 

function preload() {
  font = loadFont('fonts/JacquardaBastarda9Charted-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
}

function draw() {
  background(220);
  textSize((10 / 300) * width);
  for (let i = 0; i < texts.length; i++) {
    texts[i].display();
  }
}

function mouseMoved() {
  hueOffset += 10; 
  for (let i = 0; i < texts.length; i++) {
    texts[i].updateColor(); 
  }
  texts.push(new TextObj(mouseX, mouseY, hueOffset)); 
}

function TextObj(x, y, hueOffset) {
  this.x = x;
  this.y = y;
  this.hueOffset = hueOffset;

  this.updateColor = function() {
    let hue = (hueOffset + (texts.length - 1) * 20) % 360; 
    this.textColor = color('hsb(' + hue + ', 100%, 100%)'); 
  };

  this.updateColor(); 

  this.display = function() {
    fill(this.textColor); 
    text("Good Luck, babe!", this.x, this.y);
  };
}