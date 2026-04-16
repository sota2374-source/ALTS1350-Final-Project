// ------------------------------------------------------------------------------------------------------------------------------ 
// drawBkgdFrame Function
// ------------------------------------------------------------------------------------------------------------------------------ 

// Function that draws the highlight/shadow frame around text boxes

function drawBkgdFrame(x1, y1, x2, y2, z) {
// Input:
  // (x1, y1) = top left corner
  // (x2, y2) = bottom right corner
// z = frame thickness

push();
 noStroke();
  
// Fill
  push();
   fill(210);
     beginShape();
     vertex(x1, y1);
     vertex(x2, y1);
     vertex(x2, y2);
     vertex(x1, y2);
    endShape(CLOSE);
  pop();

// Shadow
  push();
   fill("gray");
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
   fill("#e5e5e5");
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
// drawFrameX Function
// ------------------------------------------------------------------------------------------------------------------------------ 

// Function that draws the highlight/shadow frame around text boxes
 
function drawFrameX(x1, y1, x2, y2, z) {
// Input:
  // (x1, y1) = top left corner
  // (x2, y2) = bottom right corner
// z = frame thickness 

  
push();
 noStroke();
  
// Fill
  push();
   fill("#D0312D");
     beginShape();
     vertex(x1, y1);
     vertex(x2, y1);
     vertex(x2, y2);
     vertex(x1, y2);
    endShape(CLOSE);
  pop();

// Shadow
  push();
   fill("#4E0707");
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
   fill("#BC544B");
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
// drawFrameMax Function
// ------------------------------------------------------------------------------------------------------------------------------ 

// Function that draws the highlight/shadow frame around text boxes
 
function drawFrameMax(x1, y1, x2, y2, z) {
// Input:
  // (x1, y1) = top left corner
  // (x2, y2) = bottom right corner
// z = frame thickness
  
push();
 noStroke();
  
// Fill
  push();
   fill("#FFDA03");
     beginShape();
     vertex(x1, y1);
     vertex(x2, y1);
     vertex(x2, y2);
     vertex(x1, y2);
    endShape(CLOSE);
  pop();

// Shadow
  push();
   fill("#C49102");
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
   fill("#FDE992");
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
// drawFrameMin Function
// ------------------------------------------------------------------------------------------------------------------------------ 

// Function that draws the highlight/shadow frame around text boxes
 
function drawFrameMin(x1, y1, x2, y2, z) {
// Input:
  // (x1, y1) = top left corner
  // (x2, y2) = bottom right corner
// z = frame thickness
  
push();
 noStroke();
  
// Fill
  push();
   fill("#03AC13");
     beginShape();
     vertex(x1, y1);
     vertex(x2, y1);
     vertex(x2, y2);
     vertex(x1, y2);
    endShape(CLOSE);
  pop();

// Shadow
  push();
   fill("#354A21");
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
   fill("#98Bf64");
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
// drawFrame Function
// ------------------------------------------------------------------------------------------------------------------------------ 

// Function that draws the highlight/shadow frame around text boxes
 
function drawFrame(x1, y1, x2, y2, z) {
// Input:
  // (x1, y1) = top left corner
  // (x2, y2) = bottom right corner
// z = frame thickness
  
push();
 noStroke();
  
// Fill
  push();
   fill(210);
     beginShape();
     vertex(x1, y1);
     vertex(x2, y1);
     vertex(x2, y2);
     vertex(x1, y2);
    endShape(CLOSE);
  pop();

// Shadow
  push();
   fill("gray");
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
   fill("#e5e5e5");
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
// Tab Function
// ------------------------------------------------------------------------------------------------------------------------------ 

// Draws the tab bar at the top

function drawTab (x1, y1, x2, y2, c = "blue") {

 push();
  fill(c); 
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
// drawPopUpBox Function
// ------------------------------------------------------------------------------------------------------------------------------ 

function drawPopUpBox(x1, y1, x2, y2, z) {
// Input:
  // (x1, y1) = top left corner
  // (x2, y2) = bottom right corner
// z = frame thickness

push();
 noStroke();
  
// Fill
  push();
   fill(210);
     beginShape();
     vertex(x1, y1);
     vertex(x2, y1);
     vertex(x2, y2);
     vertex(x1, y2);
    endShape(CLOSE);
  pop();

// Shadow
  push();
   fill("gray");
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
   fill("#e5e5e5");
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
// drawPopUpShadow Function
// ------------------------------------------------------------------------------------------------------------------------------ 

function drawPopUpShadow (x1, y1, x2, y2, c = 80, a = 200) {

 push();
  fill(c); 
  alpha(a);
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
 if(mouseHover(966, 15, 986, 35)) {
   xPopUpBox = true;
 }

 if (xPopUpBox == true && mouseHover(674, 206, 694, 226, 2)) {
   xPopUpBox = false;
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
// drawAreaFrame function
// ------------------------------------------------------------------------------------------------------------------------------

function drawAreaFrame(x1, y1, x2, y2, z) {
// Input:
  // (x1, y1) = top left corner
  // (x2, y2) = bottom right corner
// z = frame thickness

push();
 noStroke();
  
// Fill
  push();
   fill(255);
     beginShape();
     vertex(x1, y1);
     vertex(x2, y1);
     vertex(x2, y2);
     vertex(x1, y2);
    endShape(CLOSE);
  pop();

// Shadow
  push();
   fill(90);
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
   fill("gray");
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