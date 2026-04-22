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
 
 if (xPopUpBox && insidePopUpBoxLButtonArea(localX, localY)) {
     xPopUpBox = false;
     resetPopUpBox();
     blockNextDraw = true;
     return;
  }

  if (xPopUpBox && insidePopUpBoxRButtonArea(localX, localY)) {
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

}

// mouseReleased function ------------------------------------------------------------------------------------------------------- 
function mouseReleased() {
 isDraggingPopUp = false;
 blockNextDraw = false;
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

// 06-sketch.js

// ------------------------------------------------------------------------------------------------------------------------------ 
// Setup() Function
// ------------------------------------------------------------------------------------------------------------------------------ 

function setup() {
  createCanvas(1400, 800);
  
 // Sets x/y offset to center of canvas to accomodate white space on sides
  offsetX = (width - canvasW) / 2;
  offsetY = (height - canvasH) / 2;

 // Creates clear graphics layer so user drawing doesn't get rewritten every frame
  drawingLayer = createGraphics(width, height);
  drawingLayer.clear();

// cursor("none");

}

// ------------------------------------------------------------------------------------------------------------------------------ 
// Draw() Function
// ------------------------------------------------------------------------------------------------------------------------------  


function draw() {
  background(255);

 movePopUpDrag();

 let blockBackgroundUI = xPopUpBox;

// translates everything by offset x/y distance
 push();
 translate(offsetX, offsetY);

// draws "window," or background frame
 drawFrame(0, 0, 1000, 700, 6);

// draws main blue tab on canvas
 drawTab(10, 10, 990, 40, "#01017A");

 drawColorPalette();

// drawArea frame
 drawFrame(drawArea.x1, drawArea.y1, drawArea.x2, drawArea.y2, 5, {
    fill: 255,
    shadow: 90, 
    highlight: 128
  });

// text for file name
  drawText("New Project - No_File_Name", 15, 18, 2.5, 1.5, 255);

// if mouse hovers over minimize button, it turns green
 // otherwise, it stays neutral
 if (!blockBackgroundUI && mouseHover(918, 15, 938, 35)) {
   drawFrame(918, 15, 938, 35, 2, {
     fill: "#03AC13", 
     shadow: "#354A21", 
     highlight: "#98Bf64"
    });
   drawMinSymbol(922, 30, 934, 30, 2, 255);
  } else {
   drawFrame(918, 15, 938, 35, 2);
   drawMinSymbol(922, 30, 934, 30, 2, 0);
  }

// if mouse hovers over maximize button, it turns yellow
 // otherwise, it stays neutral
 if (!blockBackgroundUI && mouseHover(942, 15, 962, 35)) {
   drawFrame(942, 15, 962, 35, 2, {
     fill: "#FFDA03",
     shadow: "#C49102",
     highlight: "#FDE992",
    });
   drawMaxSymbol(947, 20, 957, 30, 2, 255, 3);
  } else {
   drawFrame(942, 15, 962, 35, 2);
   drawMaxSymbol(947, 20, 957, 30, 2, 0, 3);
  }

// if mouse hovers over x button, it turns red
 // otherwise, it stays neutral
 if (!blockBackgroundUI && mouseHover(966, 15, 986, 35)) {
   drawFrame(966, 15, 986, 35, 2, {
     fill: "#D0312D",
     shadow: "#4E0707",
     highlight: "#BC544B",
    });
   drawText("X", 971, 19, 2, 1, 255);
  } else {
   drawFrame(966, 15, 986, 35, 2);
   drawText("X", 971, 19, 2, 1, 0);
  }

 // if the grid button is pressed, the pngGrid + frame appears in the drawing area (see mousePressed/pngGrid functions)
 if (pngGrid == true) {
   drawPngGrid(drawArea.x1, drawArea.y1, drawArea.x2, drawArea.y2);
   drawFrame(drawArea.x1, drawArea.y1, drawArea.x2, drawArea.y2, 5, {
     fill: 255,
     fillAlpha: 0,
     shadow: 90,
     highlight: 128,
    });
  }
  
 // sets up a variable that is true whenever the mouse hovers over the grid button
  // simplifies hover button color changes
 let pngHover = !blockBackgroundUI && mouseHover(gridBVals.x1, gridBVals.y1, gridBVals.x2, gridBVals.y2);
  
 // if mouse hovers over grid button and pngGrid is off, it darkens
  if(pngHover && pngGrid == false) {
   drawFrame(gridBVals.x1, gridBVals.y1, gridBVals.x2, gridBVals.y2, gridBVals.z, {
     fill: 100,
     shadow: 40,
     highlight: 150,
    });
   drawText("GRID", gridText.x, gridText.y, gridText.size, gridText.spacing, 255);
  
   // if mouse hovers over grid button and pngGrid is on, it turns light blue
  } else if (pngHover && pngGrid == true) {
   drawFrame(gridBVals.x1, gridBVals.y1, gridBVals.x2, gridBVals.y2, gridBVals.z, {
     fill: "#3030ef",
     shadow: "#19308f",
     highlight: "#4d76e7"
    });
   drawText("GRID", gridText.x, gridText.y, gridText.size, gridText.spacing, 255);

   // if mouse is NOT hovering over grid button and pngGrid is on, it turns dark blue
  } else if (pngGrid == true) {
   drawFrame(gridBVals.x1, gridBVals.y1, gridBVals.x2, gridBVals.y2, gridBVals.z, {
     fill: "#01017A",
     shadow: "#131622",
     highlight: "#0732aa"
    });
   drawText("GRID", gridText.x, gridText.y, gridText.size, gridText.spacing, 255);
     
   // if mouse is NOT hovering and pngGrid is off, it stays neutral
  } else {
   drawFrame(gridBVals.x1, gridBVals.y1, gridBVals.x2, gridBVals.y2, gridBVals.z);
   drawText("GRID", gridText.x, gridText.y, gridText.size, gridText.spacing, 0);
  }

// creates drawingLayer for user drawing
  image(drawingLayer, 0, 0);

// if the x button is pressed, a popup window appears (see function mousePressed)
  if (xPopUpBox == true) {

   // keeps x button red (activated) in background window 
    drawFrame(966, 15, 986, 35, 2, {
      fill: "#D0312D",
      shadow: "#4E0707",
      highlight: "#BC544B",
     });
    drawText("X", 971, 19, 2, 1, 255);
 
   // draws popup window + shadow
    drawPopUpShadow(popUpBox.x1 + 10, popUpBox.y1 + 10, popUpBox.x2 + 10, popUpBox.y2 + 10);
    drawFrame(popUpBox.x1, popUpBox.y1, popUpBox.x2, popUpBox.y2, 3);
    drawTab(popUpBox.x1 + 4, popUpBox.y1 + 4, popUpBox.x2 - 4, popUpBox.y1 + 28, "#01017A");
    drawText("Message", popUpBox.x1 + 10, popUpBox.y1 + 10, 2, 1, 255); 
    drawText("Are you sure you want to continue?", popUpBox.x1 + 35, popUpBox.y1 + 60, 2, 1, 0);
    drawText("All unsaved changes will be lost!", popUpBox.x1 + 45, popUpBox.y1 + 100, 2, 1, 0);
    
   // Left/right popup buttons:
   // if mouse hovers over the left popup window button, it darkens
    // otherwise, it stays neutral
    if (mouseHover(popUpBox.x1 + 60, popUpBox.y1 + 150, popUpBox.x1 + 185, popUpBox.y1 + 200)) {
      drawFrame(popUpBox.x1 + 60, popUpBox.y1 + 150, popUpBox.x1 + 185, popUpBox.y1 + 200, 3, {
       fill: 100,
       shadow: 40,
       highlight: 150,
      });
     drawText("OK", popUpBox.x1 + 110, popUpBox.y1 + 169, 2, 1, 255);

    } else {

     drawFrame(popUpBox.x1 + 60, popUpBox.y1 + 150, popUpBox.x1 + 185, popUpBox.y1 + 200, 3);
     drawText("OK", popUpBox.x1 + 110, popUpBox.y1 + 169, 2, 1, 0);
    }

   // if mouse hovers over the right popup window button, it darkens
    // otherwise, it stays neutral
    if (mouseHover(popUpBox.x1 + 215, popUpBox.y1 + 150, popUpBox.x1 + 340, popUpBox.y1 + 200)) {
     drawFrame(popUpBox.x1 + 215, popUpBox.y1 + 150, popUpBox.x1 + 340, popUpBox.y1 + 200, 3, {
       fill: 100,
       shadow: 40,
       highlight: 150,
      });
     drawText("Cancel", popUpBox.x1 + 247, popUpBox.y1 + 169, 2, 1, 255);
    
    } else {

     drawFrame(popUpBox.x1 + 215, popUpBox.y1 + 150, popUpBox.x1 + 340, popUpBox.y1 + 200, 3);
     drawText("Cancel", popUpBox.x1 + 247, popUpBox.y1 + 169, 2, 1, 0);
    }
 
   // if mouse hovers over popup x button, it turns red
    // otherwise, it stays neutral
    if (mouseHover(popUpBox.x1 + 374, popUpBox.y1 + 6, popUpBox.x1 + 394, popUpBox.y1 + 26)) {
     drawFrame(popUpBox.x1 + 374, popUpBox.y1 + 6, popUpBox.x1 + 394, popUpBox.y1 + 26, 2, {
       fill: "#D0312D",
       shadow: "#4E0707",
       highlight: "#BC544B",
      });
     drawText("X", popUpBox.x1 + 379, popUpBox.y1 + 10, 2, 1, 255);
    } else {
     drawFrame(popUpBox.x1 + 374, popUpBox.y1 + 6, popUpBox.x1 + 394, popUpBox.y1 + 26, 2);
     drawText("X", popUpBox.x1 + 379, popUpBox.y1 + 10, 2, 1, 0);
    }
  }

 // pop button for x/y translation
 pop(); 

 if (insideDrawArea(mouseX - offsetX, mouseY - offsetY) && xPopUpBox == false) {
   push();
   
   if (mouseIsPressed) {
     stroke(currentPenColor);
     fill(currentPenColor);
   } else {
     stroke(currentPenColor);
     noFill(); 
   }

   strokeWeight(2);
   circle(mouseX, mouseY, 10);
   pop();
  }

 // tranlates user drawing
 translateDrawing();

}

