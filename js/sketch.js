//hanxyn888@gmail.com

var font;

function preload() {
  font = loadFont('fonts/JacquardaBastarda9Charted-Regular.ttf');
}

function Array2D(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

var cols = 5;
var rows = 3;
var spacing = 300;
var grid;
var shuffleButton;

function setup() {
  createCanvas(cols * spacing, rows * spacing);
  textFont(font);
  background('black');
  grid = new Array2D(cols, rows);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j] = i + j * cols + 1;
      if (grid[i][j] == cols * rows) {
        grid[i][j] = 0;
      }
    }
  }
  shuffleButton = createButton("Shuffle");
  shuffleButton.mousePressed(shuffleBoard);
  shuffleButton.style('font-family', 'jacquard');
  shuffleButton.style("background-color", "black");
  shuffleButton.style("color", "white");
  shuffleButton.style("width", "150px"); 
  shuffleButton.style("height", "70px");
  shuffleButton.style("font-size", "30px");

  var margin = width * 0.2;
  shuffleButton.position(margin, margin);
}

function mousePressed() {
  if (mouseX < width && mouseX > 0 && mouseY < height && mouseY > 0) {
    slide(mouseX, mouseY);
  }
}

function slide(x, y) {
  var mx = floor(x / spacing);
  var my = floor(y / spacing);
  var num = grid[mx][my];
  var neighbours;
  if (mx == 0) {
    neighbours = [
      grid[mx + 1][my],
      grid[mx][my + 1],
      grid[mx][my - 1]
    ];
  } else if (mx == cols - 1) {
    neighbours = [
      grid[mx - 1][my],
      grid[mx][my + 1],
      grid[mx][my - 1]
    ];
  } else {
    neighbours = [
      grid[mx + 1][my],
      grid[mx - 1][my],
      grid[mx][my + 1],
      grid[mx][my - 1]
    ];
  }
  for (var i = 0; i < neighbours.length; i++) {
    if (neighbours[i] == 0) {
      var temp = grid[mx][my];
      if (mx != cols - 1) {
        if (neighbours[i] == grid[mx + 1][my]) {
          grid[mx][my] = 0;
          grid[mx + 1][my] = temp;
        }
      }
      if (mx != 0) {
        if (neighbours[i] == grid[mx - 1][my]) {
          grid[mx][my] = 0;
          grid[mx - 1][my] = temp;
        }
      }
      if (neighbours[i] == grid[mx][my + 1]) {
        grid[mx][my] = 0;
        grid[mx][my + 1] = temp;
      }
      if (neighbours[i] == grid[mx][my - 1]) {
        grid[mx][my] = 0;
        grid[mx][my - 1] = temp;
      }
    }
  }
}

function shuffleBoard() {
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j] = i + j * cols + 1;
      if (grid[i][j] == cols * rows) {
        grid[i][j] = 0;
      }
    }
  }
  for (var k = 0; k < 10000; k++) {
    slide(random(width), random(height));
  }
}

function draw() {
  fill(255); 
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      var x = i * spacing;
      var y = j * spacing;
      fill('black' ); 
      rect(x, y, spacing, spacing);
      var xt = x + spacing / 2;
      var yt = y + spacing / 2;
      var num = grid[i][j];
      if (num != 0) {
        fill(255);
        textSize((20/300)*width);
        textAlign(CENTER, CENTER);
        switch (num) {
          case 1:
            text('Youd', xt, yt);
            break;
          case 2:
            text('Have', xt, yt);
            break;
          case 3:
            text('To', xt, yt);
            break;
          case 4:
            text('Stop', xt, yt);
            break;
          case 5:
            text('The', xt, yt);
            break;
          case 6:
            text('World', xt, yt);
            break;
          case 7:
            text('Just', xt, yt);
            break;
          case 8:
            text('To', xt, yt);
            break;
          case 9:
            text('Stop', xt, yt);
            break;
          case 10:
            text('The', xt, yt);
            break;
          case 11:
            text('Feel', xt, yt);
            break;
          case 12:
            text('i', xt, yt);
            break;
          case 13:
            text('n', xt, yt);
            break;
          case 14:
            text('g', xt, yt);
            break;
        }
      }
    }
  }
}
