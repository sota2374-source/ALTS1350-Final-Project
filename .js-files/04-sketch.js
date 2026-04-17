// ------------------------------------------------------------------------------------------------------------------------------ 
// Setup() Function
// ------------------------------------------------------------------------------------------------------------------------------ 

function setup() {
  createCanvas(1400, 800);
  offsetX = (width - canvasW) / 2;
  offsetY = (height - canvasH) / 2;

  drawingLayer = createGraphics(width, height);
  drawingLayer.clear();
}

// ------------------------------------------------------------------------------------------------------------------------------ 
// Draw() Function
// ------------------------------------------------------------------------------------------------------------------------------  

function draw() {
  background(255);

 push();
 translate(offsetX, offsetY);

// background frame
    drawFrame(0, 0, 1000, 700, 6);

// TABS -----------------------------------------------------------------------------------------------------------------------
 // Colored tab bar at top of screen
  // drawTab( x1, y1, x2, y2, c = "blue")
   // Input:
    // (x1, y1) = top left corner
    // (x2, y2) = bottom right corner
    // c = fill color
   drawTab(10, 10, 990, 40, "#01017A");

 // drawArea frame
  drawFrame(drawArea.x1, drawArea.y1, drawArea.x2, drawArea.y2, 5, {
    fill: 255,
    shadow: 90, 
    highlight: 128
  });

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

// hover minimize frame
    drawFrame(918, 15, 938, 35, 2, {
    fill: "#03AC13", 
    shadow: "#354A21", 
    highlight: "#98Bf64"
  });
   drawMinSymbol(922, 30, 934, 30, 2, 255);
  } else {

// neutral minimize frame 
    drawFrame(918, 15, 938, 35, 2);
    drawMinSymbol(922, 30, 934, 30, 2, 0);
  }


  if (mouseHover(942, 15, 962, 35)) {

// hover maximize frame
   drawFrame(942, 15, 962, 35, 2, {
    fill: "#FFDA03",
    shadow: "#C49102",
    highlight: "#FDE992",
  });
   drawMaxSymbol(947, 20, 957, 30, 2, 255, 3);
  } else {

// neutral maximize frame
    drawFrame(942, 15, 962, 35, 2);
    drawMaxSymbol(947, 20, 957, 30, 2, 0, 3);
  }
  

 if (mouseHover(966, 15, 986, 35)) {

// hover x frame
   drawFrame(966, 15, 986, 35, 2, {
    fill: "#D0312D",
    shadow: "#4E0707",
    highlight: "#BC544B",
   });
   drawText("X", 971, 19, 2, 1, 255);
  } else {

// neutral x frame
   drawFrame(966, 15, 986, 35, 2);
   drawText("X", 971, 19, 2, 1, 0);
  }

  if (xPopUpBox == true) {

// x is pressed frame
    drawFrame(966, 15, 986, 35, 2, {
    fill: "#D0312D",
    shadow: "#4E0707",
    highlight: "#BC544B",
   });
    drawText("X", 971, 19, 2, 1, 255);
    drawPopUpShadow(310, 210, 710, 510);

// popup frame
    drawFrame(300, 200, 700, 500, 3);
    drawTab(304, 204, 696, 228, "#01017A");  

  if(mouseHover(674, 206, 694, 226)) {

// hover popup x frame
    drawFrame(674, 206, 694, 226, 2, {
     fill: "#D0312D",
     shadow: "#4E0707",
     highlight: "#BC544B",
   });
     drawText("X", 679, 210, 2, 1, 255);
   } else {

// neutral popup x frame
     drawFrame(674, 206, 694, 226, 2);
     drawText("X", 679, 210, 2, 1, 0);
   }
  }

 if (pngGrid == true) {
   drawPngGrid(drawArea.x1, drawArea.y1, drawArea.x2, drawArea.y2);

// hollow pngGrid frame
   drawFrame(drawArea.x1, drawArea.y1, drawArea.x2, drawArea.y2, 5, {
    fill: 255,
    fillAlpha: 0,
    shadow: 90,
    highlight: 128,
   });
  }
  
 let pngHover = mouseHover(gridBVals.x1, gridBVals.y1, gridBVals.x2, gridBVals.y2);

  if(pngHover && pngGrid == false) {

// hover grid button false
   drawFrame(gridBVals.x1, gridBVals.y1, gridBVals.x2, gridBVals.y2, gridBVals.z, {
    fill: 100,
    shadow: 40,
    highlight: 150,
   });
   drawText("GRID", gridText.x, gridText.y, gridText.size, gridText.spacing, 255);

  } else if (pngHover && pngGrid == true) {

// hover grid button true
   drawFrame(gridBVals.x1, gridBVals.y1, gridBVals.x2, gridBVals.y2, gridBVals.z, {
    fill: "#3030ef",
    shadow: "#19308f",
    highlight: "#4d76e7"
   });
   drawText("GRID", gridText.x, gridText.y, gridText.size, gridText.spacing, 255);

  } else if (pngGrid == true) {

// neutral grid button true
   drawFrame(gridBVals.x1, gridBVals.y1, gridBVals.x2, gridBVals.y2, gridBVals.z, {
    fill: "#01017A",
    shadow: "#131622",
    highlight: "#0732aa"
   });
   drawText("GRID", gridText.x, gridText.y, gridText.size, gridText.spacing, 255);
     
  } else {

// neutral grid button false
   drawFrame(gridBVals.x1, gridBVals.y1, gridBVals.x2, gridBVals.y2, gridBVals.z);
   drawText("GRID", gridText.x, gridText.y, gridText.size, gridText.spacing, 0);
  }

image(drawingLayer, 0, 0);

 pop(); 

 translateDrawing();

}


