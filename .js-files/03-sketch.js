// ------------------------------------------------------------------------------------------------------------------------------ 
// Setup() Function
// ------------------------------------------------------------------------------------------------------------------------------ 

function setup() {
  createCanvas(1000, 700);
}

// ------------------------------------------------------------------------------------------------------------------------------ 
// Draw() Function
// ------------------------------------------------------------------------------------------------------------------------------  

function draw() {
  background(210);

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

// TEXT -----------------------------------------------------------------------------------------------------------------------
 // Text on tab bar at top of screen
  // drawText(str, x, y, size, spacing) 
   // Input:
    // str = text string (refer to textData for object keys)
    // (x,y) = x/y coordinates of text
    // size = text size
    // spacing = distance between letters
   drawText("New Canvas'1'", 15, 19, 2, 12);

// BOXES -----------------------------------------------------------------------------------------------------------------------
 // Creates background boxes
  // drawBox(x1, y1, x2, y2, c = "gray") 
   // Input:
    // (x1, y1) = top left corner
    // (x2, y2) = bottom right corner
    // c = fill color  
  
    // Minimize box
//    drawBox(918, 15, 938, 35, 210);
// 
//   // Maximize box
//    drawBox(942, 15, 962, 35, 210);
// 
//   // X box
//    drawBox(966, 15, 986, 35, 210);

// FRAMES -----------------------------------------------------------------------------------------------------------------------
 // Frame for background of screen
  // drawFrame(x1, y1, x2, y2, z)
   // Input:
    // (x1, y1) = top left corner
    // (x2, y2) = bottom right corner
    // z = frame thickness
   drawFrame(918, 15, 938, 35, 2);
   drawFrame(942, 15, 962, 35, 2);
   drawFrame(966, 15, 986, 35, 2);
  
}