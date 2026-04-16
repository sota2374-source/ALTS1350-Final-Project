// ------------------------------------------------------------------------------------------------------------------------------ 
// Setup() Function
// ------------------------------------------------------------------------------------------------------------------------------ 

function setup() {
  createCanvas(1400, 800);
  offsetX = (width - canvasW) / 2;
  offsetY = (height - canvasH) / 2;
}

// ------------------------------------------------------------------------------------------------------------------------------ 
// Draw() Function
// ------------------------------------------------------------------------------------------------------------------------------  

function draw() {
  background(255);

 push();
 translate(offsetX, offsetY);

// BKGD FRAME -----------------------------------------------------------------------------------------------------------------------
 // Frame for background of screen
  // drawFrame(x1, y1, x2, y2, z)
   // Input:
    // (x1, y1) = top left corner
    // (x2, y2) = bottom right corner
    // z = frame thickness
  drawBkgdFrame(0, 0, 1000, 700, 6);

// TABS -----------------------------------------------------------------------------------------------------------------------
 // Colored tab bar at top of screen
  // drawTab( x1, y1, x2, y2, c = "blue")
   // Input:
    // (x1, y1) = top left corner
    // (x2, y2) = bottom right corner
    // c = fill color
   drawTab(10, 10, 990, 40, "#01017A");

  drawAreaFrame(350, 45, 990, 550, 5);

// TEXT -----------------------------------------------------------------------------------------------------------------------
 // Text on tab bar at top of screen
  // drawText(str, x, y, size, spacing, c = 255) 
   // Input:
    // str = text string (refer to textData for object keys)
    // (x,y) = x/y coordinates of text
    // size = text size
    // spacing = distance between letters
    // c = color (defaults to white)
   drawText("New Project - No_File_Name", 15, 18, 2.5, 1.5, 255);

// BOXES -----------------------------------------------------------------------------------------------------------------------
 // Creates background boxes
  // drawBox(x1, y1, x2, y2, c = "gray") 
   // Input:
    // (x1, y1) = top left corner
    // (x2, y2) = bottom right corner
    // c = fill color  
  

// FRAMES -----------------------------------------------------------------------------------------------------------------------
 // Frame for background of screen
  // drawFrame(x1, y1, x2, y2, z)
   // Input:
    // (x1, y1) = top left corner
    // (x2, y2) = bottom right corner
    // z = frame thickness
   
   
  if (mouseHover(918, 15, 938, 35)) {
   drawFrameMin(918, 15, 938, 35, 2);
   drawMinSymbol(922, 30, 934, 30, 2, 255);
  } else {
    drawFrame(918, 15, 938, 35, 2);
    drawMinSymbol(922, 30, 934, 30, 2, 0);
  }


  if (mouseHover(942, 15, 962, 35)) {
   drawFrameMax(942, 15, 962, 35, 2);
   drawMaxSymbol(947, 20, 957, 30, 2, 255, 3);
  } else {
    drawFrame(942, 15, 962, 35, 2);
    drawMaxSymbol(947, 20, 957, 30, 2, 0, 3);
  }
  

 if (mouseHover(966, 15, 986, 35)) {
   drawFrameX(966, 15, 986, 35, 2);
   drawText("X", 971, 19, 2, 1, 255);
  } else {
   drawFrame(966, 15, 986, 35, 2);
   drawText("X", 971, 19, 2, 1, 0);
  }

  if (xPopUpBox == true) {
    drawFrameX(966, 15, 986, 35, 2);
    drawText("X", 971, 19, 2, 1, 255);

    drawPopUpShadow(310, 210, 710, 510);
    drawPopUpBox(300, 200, 700, 500, 3);
    drawTab(304, 204, 696, 228, "#01017A");
    
   if(mouseHover(674, 206, 694, 226)) {
     drawFrameX(674, 206, 694, 226, 2);
     drawText("X", 679, 210, 2, 1, 255);
    } else {
     drawFrame(674, 206, 694, 226, 2);
     drawText("X", 679, 210, 2, 1, 0);
  }
 }
 
 pop(); 

}


