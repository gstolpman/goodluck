//Carrie Wang

let content = 'You Know I Hate To say it, But I Told You so';
let yStart = 0;
let customFont; 
let frozen = false; 
let frozenColor;
let scrollSpeed = 15; 

function preload() {
  customFont = loadFont('fonts/JacquardaBastarda9Charted-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(customFont);
  textAlign(CENTER, CENTER);
  textSize(70);
}

function draw() {
  background(0);
  if (!frozen) { 
    for (let y = yStart; y < height; y += 90) { 
      fill(255, y / 2 + 55, 100); 
      text(content, width / 2, y);
    }
    yStart -= scrollSpeed; 
  } else { color
    fill(frozenColor);
    text(content, width / 2, mouseY);
  }
}

function mousePressed() {
  if (!frozen) {
    let yColor = map(mouseY, 0, height, 55, 255);
    frozenColor = color(255, yColor, 100);
  }
  frozen = !frozen;
}