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

// ------------------------------------------------------------------------------------------------------------------------------  
// mouseReleased function ------------------------------------------------------------------------------------------------------- 

// -----------------------
function mouseReleased() {
 isDraggingPopUp = false;
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