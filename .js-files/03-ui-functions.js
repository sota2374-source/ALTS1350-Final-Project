// drawFrame function ----------------------------------------------------------------------------------------------------------- 
  // drawFrame(x1, y1, x2, y2, z)
   // Input:
    // (x1, y1) = top left corner
    // (x2, y2) = bottom right corner
    // z = frame thickness
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

// drawColBox function --------------------------------------------------------------------------------------------------------------
function drawColBox(x1, y1, x2, y2, z, colors = {}) {

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

  push();
   fill(0);
     rect(x1 + z, y1 + z, x2 - x1 - 2 * z, z);
     rect(x1 + z, y1 + z, z ,y2 - y1 - 2 * z);
  pop();    
 
 pop();
}

// drawMinSymbol function ------------------------------------------------------------------------------------------------------- 
function drawMinSymbol(x1, y1, x2, y2, z, c = 0) {

  push();
   strokeCap(SQUARE);
   strokeWeight(z);
   stroke(c);
  
   line(x1, y1, x2, y2); 

  pop();

}

// drawMaxSymbol function ------------------------------------------------------------------------------------------------------- 
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

// drawPopUpShadow function -----------------------------------------------------------------------------------------------------  
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

// drawLetter function ---------------------------------------------------------------------------------------------------------- 
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

// drawTab function -------------------------------------------------------------------------------------------------------------
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

// drawText function ------------------------------------------------------------------------------------------------------------ 
 // Note: size = the size of each value (0 or 1) in the grid
   // size = 1 means each value is going to be 1 x 1 pixel
   // Each letter grid is about 3-7 px wide and 6 px tall
   // To determine size of letters, multiply the size input by grid size (1 x 6 = 6px tall)

 // Each letter's anchor point (x, y) is at (0,0) of the letter (row 0, column 0)
   // This includes invisible pixels, as every letter has a start of (0,0)
   // Factor this gap in when adding letters

// ------------------------------------------------------------------------------------------------------------------------------

// Text on tab bar at top of screen
  // drawText(str, x, y, size, spacing, c = 255) 
   // Input:
    // str = text string (refer to textData for object keys)
    // (x,y) = x/y coordinates of text
    // size = text size
    // spacing = distance between letters
    // c =
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