// ------------------------------------------------------------------------------------------------------------------------------ 
// Frame Shadow Function
// ------------------------------------------------------------------------------------------------------------------------------ 

// Function that draws the highlight/shadow frame around text boxes
 
// Input:
  // (x1, y1) = top left corner
  // (x2, y2) = bottom right corner
  // z = frame thickness
function drawFrame(x1, y1, x2, y2, z) {
  
push();
 noStroke();
  
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
// MinMax Box Function
// ------------------------------------------------------------------------------------------------------------------------------ 

function drawBox(x1, y1, x2, y2, c = "gray") {
  
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
// DrawLetter Function
// ------------------------------------------------------------------------------------------------------------------------------

function drawLetter(letter, x, y, size) {
 push();
  noStroke();
  fill("white");
  
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

function drawText(str, x, y, size, spacing) {
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    
      if (textData[letter])
       drawLetter(letter, x + i * spacing, y, size);  
   }
 }