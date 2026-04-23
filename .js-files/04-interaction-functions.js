// 04-interaction-functions.js

// mouseHover function ----------------------------------------------------------------------------------------------------------
function mouseHover(x1, y1, x2, y2) {
 return mouseX >= x1 + offsetX && mouseX <= x2 + offsetX && mouseY >= y1 + offsetY && mouseY <= y2 + offsetY;
}

// mousePressed function -------------------------------------------------------------------------------------------------------- 
function mousePressed() {
  let localX = mouseX - offsetX;
  let localY = mouseY - offsetY;

 if (xPopUpBox) {
   if (mouseHover(popUpBox.x2 - 26, popUpBox.y1 + 6, popUpBox.x2 - 6, popUpBox.y1 + 26)) {
     xPopUpBox = false;
     isDraggingPopUp = false;
     resetPopUpBox();
     blockNextDraw = true;
     return;
   }
 
 if (insidePopUpBoxLButtonArea(localX, localY)) {
     clearCanvasDrawing();
     xPopUpBox = false;
     resetPopUpBox();
     blockNextDraw = true;
     return;
  }

  if (insidePopUpBoxRButtonArea(localX, localY)) {
     xPopUpBox = false;
     resetPopUpBox();
     blockNextDraw = true;
     return;
  }

   if (xPopUpBoxBoundary(localX, localY)) {
     isDraggingPopUp = true;
     dragOffsetX = localX - popUpBox.x1;
     dragOffsetY = localY - popUpBox.y1;
     return;
    }
 
   return;
  }
 
 if (checkColorPaletteClick(localX, localY)) {
  return;
 }

 if(mouseHover(966, 15, 986, 35)) {
   resetPopUpBox();
   xPopUpBox = true;
   return;
  }

 if(mouseHover(940, 45, 990, 70)) {
   pngGrid = !pngGrid;
   return;
  }

 if (mouseHover(undoButtonVals.x1, undoButtonVals.y1, undoButtonVals.x2, undoButtonVals.y2)) {
   undoLastStroke();
   return;
  }

  if (mouseHover(redoButtonVals.x1, redoButtonVals.y1, redoButtonVals.x2, redoButtonVals.y2)) {
    redoLastStroke();
    return;
  }
}

// mouseReleased function ------------------------------------------------------------------------------------------------------- 
function mouseReleased() {
 isDraggingPopUp = false;
 blockNextDraw = false;
 finishStroke();
}

// drag logic:
// ------------------------------------------------------------------------------------------------------------------------------  
// movePopUpDrag Function
// ------------------------------------------------------------------------------------------------------------------------------ 

function movePopUpDrag() {
 if (isDraggingPopUp == true) {
   let localX = mouseX - offsetX;
   let localY = mouseY - offsetY;

   let w = popUpBox.x2 - popUpBox.x1;
   let h = popUpBox.y2 - popUpBox.y1;

   let newX1 = localX - dragOffsetX;
   let newY1 = localY - dragOffsetY;

   newX1 = constrain(newX1, 0, canvasW - w);
   newY1 = constrain(newY1, 0, canvasH - h);

   popUpBox.x1 = newX1;
   popUpBox.y1 = newY1;
   popUpBox.x2 = popUpBox.x1 + w;
   popUpBox.y2 = popUpBox.y1 + h;
  }
}


// boundary functions
// ------------------------------------------------------------------------------------------------------------------------------  
// xPopUpBoxBoundary Function
// ------------------------------------------------------------------------------------------------------------------------------ 

function xPopUpBoxBoundary (x,y) {
  return( x > popUpBox.x1 + 4 && x < popUpBox.x2 - 4 && y > popUpBox.y1 + 4 && y < popUpBox.y1 + 28);
}


// ------------------------------------------------------------------------------------------------------------------------------  
// xPopUpBoxBoundary Function
// ------------------------------------------------------------------------------------------------------------------------------ 

function resetPopUpBox() {
 popUpBox.x1 = popUpStartPos.x1;
 popUpBox.y1 = popUpStartPos.y1;
 popUpBox.x2 = popUpStartPos.x2;
 popUpBox.y2 = popUpStartPos.y2;
}

// ------------------------------------------------------------------------------------------------------------------------------  
// insideColBoxColArea Function
// ------------------------------------------------------------------------------------------------------------------------------ 

function insideColBoxColorArea(mx, my, box, z) {
 return (mx > box.x1 + 2 * z && mx < box.x2 - z && my > box.y1 + 2 * z && my < box.y2 - z);
}

function checkColorPaletteClick(localX, localY) {
 if (!insideColPaletteArea(localX, localY)) return false;

 let totalColBoxes = colBoxCols * colBoxRows;

 for (let i = 0; i < totalColBoxes; i++) {
   let boxColor = primaryPalette[i];
   if (!boxColor) continue;

   let box = getColBoxBounds(i);

   if (insideColBoxColorArea(localX, localY, box, colBoxFrame)) {
     currentPenColor = boxColor;
     return true;
    }
  }

 return false;
}

function insideColPaletteArea(x, y) {
 return (x > colPaletteArea.x1 && x < colPaletteArea.x2 && y > colPaletteArea.y1 && y < colPaletteArea.y2);
}

function insidePopUpBoxLButtonArea(x, y) {
 return (x > popUpBox.x1 + 60 && x < popUpBox.x1 + 185 && y > popUpBox.y1 + 150 && y < popUpBox.y1 + 200);
}

function insidePopUpBoxRButtonArea(x, y) {
 return (x > popUpBox.x1 + 215 && x < popUpBox.x1 + 340 && y > popUpBox.y1 + 150 && y < popUpBox.y1 + 200);
}

function keyPressed() {
  if (key === "z" || key === "Z") {
   undoLastStroke();
  }

  if (key === "y" || key === "Y") {
   redoLastStroke();
  }
}