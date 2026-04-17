// ------------------------------------------------------------------------------------------------------------------------------ 
// drawFrame Function
// ------------------------------------------------------------------------------------------------------------------------------ 

// Function that draws the highlight/shadow frame around text boxes
 
function drawFrame(x1, y1, x2, y2, z, colors = {}) {

  let {
    fill: c1 = 210,
    fillAlpha: a1,

    shadow: c2 = 128,
    shadowAlpha: a2,

    highlight: c3 = 229,
    highlightAlpha: a3,

    alpha: a = 255
  } = colors;

  a1 = a1 ?? a;
  a2 = a2 ?? a;
  a3 = a3 ?? a;
  
push();
 noStroke();

 let fillColor = color(c1);
 fillColor.setAlpha(a1);

 let shadowColor = color(c2);
 shadowColor.setAlpha(a2);

 let highlightColor = color(c3);
 highlightColor.setAlpha(a3);

  push();
   fill(fillColor);
     beginShape();
     vertex(x1, y1);
     vertex(x2, y1);
     vertex(x2, y2);
     vertex(x1, y2);
    endShape(CLOSE);
  pop();

// Shadow
  push();
   fill(shadowColor);
    beginShape();
     vertex(x1, y2);
     vertex(x2, y2);
     vertex(x2, y1);
     vertex(x2 - z, y1 + z);
     vertex(x2 - z, y2 - z);
     vertex(x1 + z, y2 - z);
    endShape(CLOSE);
  pop();
  
// Highlight 
  push();
   fill(highlightColor);
    beginShape();
     vertex(x1, y2);
     vertex(x1, y1);
     vertex(x2, y1);
     vertex(x2 - z, y1 + z);
     vertex(x1 + z, y1 + z);
     vertex(x1 + z, y2 - z);
    endShape(CLOSE);
  pop();
  
pop();
  
}


// ------------------------------------------------------------------------------------------------------------------------------  
// drawMinSymbol Function
// ------------------------------------------------------------------------------------------------------------------------------ 

function drawMinSymbol(x1, y1, x2, y2, z, c = 0) {

 push();
  strokeCap(SQUARE);
  strokeWeight(z);
  stroke(c);
  
  line(x1, y1, x2, y2); 
 
  pop();

}

// ------------------------------------------------------------------------------------------------------------------------------  
// drawMaxSymbol Function
// ------------------------------------------------------------------------------------------------------------------------------ 

function drawMaxSymbol(x1, y1, x2, y2, z, c = 0, maxBar = 2) {
  push();
   strokeWeight(z);
   stroke(c);
   noFill();

  beginShape();
    vertex(x1, y1);
    vertex(x2, y1);
    vertex(x2, y2);
    vertex(x1, y2);
  endShape(CLOSE);

  noStroke();
  fill(c);

  beginShape();
    vertex(x1, y1);
    vertex(x2, y1);
    vertex(x2, y1 + maxBar);
    vertex(x1, y1 + maxBar);
  endShape(CLOSE);

  pop();
}


// ------------------------------------------------------------------------------------------------------------------------------  
// drawPopUpShadow Function
// ------------------------------------------------------------------------------------------------------------------------------ 

function drawPopUpShadow (x1, y1, x2, y2, c = 80, a = 200) {

 push();
  fill(c, a); 
  noStroke();
   
   beginShape();
    vertex(x1, y1);
    vertex(x2, y1);
    vertex(x2, y2);
    vertex(x1, y2);
   endShape(CLOSE);
  
 pop();
  
}


// ------------------------------------------------------------------------------------------------------------------------------  
// mousePressed Function
// ------------------------------------------------------------------------------------------------------------------------------ 

function mousePressed() {
 if (xPopUpBox == true) {

  if (mouseHover(674, 206, 694, 226)) {
     xPopUpBox = false;
    }
  return;
 }
 
 if(mouseHover(966, 15, 986, 35)) {
   xPopUpBox = true;
 }

 if(mouseHover(940, 45, 990, 70)) {
   pngGrid = !pngGrid;
 }
}

// ------------------------------------------------------------------------------------------------------------------------------ 
// DrawLetter Function
// ------------------------------------------------------------------------------------------------------------------------------

function drawLetter(letter, x, y, size, c = 0) {
 push();
  noStroke();
  fill(c);
  
 let grid = textData[letter];
  
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++)
      
      
      if(grid[row][col] === "1") {
       rect(x + col * size, y + row * size, size, size);
      }
  }
    
 pop(); 

}  

// ------------------------------------------------------------------------------------------------------------------------------ 
// drawTab Function
// ------------------------------------------------------------------------------------------------------------------------------

function drawTab( x1, y1, x2, y2, c = "blue") {
  push();
   noStroke();
   fill(c);
  
  beginShape();
    vertex(x1, y1);
    vertex(x2, y1);
    vertex(x2, y2);
    vertex(x1, y2);
   endShape(CLOSE);
  
  pop();
}



// ------------------------------------------------------------------------------------------------------------------------------ 
// DrawText Function
// ------------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------------------------ 
 // Note: size = the size of each value (0 or 1) in the grid
   // size = 1 means each value is going to be 1 x 1 pixel
   // Each letter grid is about 3-7 px wide and 6 px tall
   // To determine size of letters, multiply the size input by grid size (1 x 6 = 6px tall)

 // Each letter's anchor point (x, y) is at (0,0) of the letter (row 0, column 0)
   // This includes invisible pixels, as every letter has a start of (0,0)
   // Factor this gap in when adding letters

// ------------------------------------------------------------------------------------------------------------------------------

function drawText(str, x, y, size = 1, spacing = 1, c = 0) {
 let cursorX = x;
   
  for (let i = 0; i < str.length; i++) {
   let letter = str[i];

   if (letter === " ") {
     cursorX += 3 * size;
     continue;
    }

   let grid = textData[letter];
   
    if (grid) {
     drawLetter(letter, cursorX, y, size, c);
      
     let letterWidth = grid[0].length * size;
     cursorX += letterWidth + spacing;
    }
  }
}


// ------------------------------------------------------------------------------------------------------------------------------ 
// mouseHover function
// ------------------------------------------------------------------------------------------------------------------------------

function mouseHover(x1, y1, x2, y2) {
 return mouseX >= x1 + offsetX && mouseX <= x2 + offsetX && mouseY >= y1 + offsetY && mouseY <= y2 + offsetY;
}


// ------------------------------------------------------------------------------------------------------------------------------ 
// drawPngGrid function
// ------------------------------------------------------------------------------------------------------------------------------

function drawPngGrid(x1, y1, x2, y2, tileSize = 20) {

 push();
  noStroke();
 
  let cols = floor((x2 - x1) / tileSize);
  let rows = floor((y2 - y1) / tileSize);
 
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
  
       if ((row + col) % 2 === 0) {
        fill(255);
       } else {
        fill(235);
       }
  
       rect(x1 + col * tileSize, y1 + row * tileSize, tileSize, tileSize);
       }
    }
  
   pop(); 
}

function translateDrawing() {
  let translateX = mouseX - offsetX;
  let translateY = mouseY - offsetY;
  let translatePMouseX = pmouseX - offsetX;
  let translatePMouseY = pmouseY - offsetY;

  if (mouseIsPressed && insideDrawArea(translateX, translateY) && insideDrawArea(translatePMouseX, translatePMouseY)) {
    drawingLayer.stroke(0);
    drawingLayer.strokeWeight(2);
    drawingLayer.line(translateX, translateY, translatePMouseX, translatePMouseY);
  }
}

function insideDrawArea(x, y) {
 return(x > penArea.x1 && x < penArea.x2 && y > penArea.y1 && y < penArea.y2);
}