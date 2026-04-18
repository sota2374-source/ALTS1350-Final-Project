// contains functions related to the drawing area

// ------------------------------------------------------------------------------------------------------------------------------ 
// insideDrawArea function
// ------------------------------------------------------------------------------------------------------------------------------

function insideDrawArea(x, y) {
 return(x > penArea.x1 && x < penArea.x2 && y > penArea.y1 && y < penArea.y2);
}


// ------------------------------------------------------------------------------------------------------------------------------ 
// translateDrawing function
// ------------------------------------------------------------------------------------------------------------------------------

function translateDrawing() {
 if (xPopUpBox) return;
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
