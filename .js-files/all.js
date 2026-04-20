// ------------------------------------------------------------------------------------------------------------------------------ 
// Declaring Variables & Arrays
// ------------------------------------------------------------------------------------------------------------------------------  

let drawingLayer;

// insets penArea boundary so user can't draw on drawArea frame
let penInset = 5;

// creates drawArea and penArea boundaries so users can only create within boundaries
let drawArea = {x1: 350, y1: 80, x2: 990, y2: 625};
let penArea = {x1: drawArea.x1 + penInset, y1: drawArea.y1 + penInset, x2: drawArea.x2 - penInset, y2: drawArea.y2 - penInset};

// grid button/text values, simplifies button hover mechanics
let gridBVals = {x1: 930, y1: 45, x2: 990, y2: 75, z: 3};
let gridText = {x: 938.5, y: 53, size: 2.5, spacing: 1};

// creates array for popUpBox boundaries, allows box to be moved around
const popUpStartPos = {x1: 300, y1: 200, x2: 700, y2: 425}
let popUpBox = {x1: 300, y1: 200, x2: 700, y2: 425};

let isDraggingPopUp = false;
let dragOffsetX = 0;
let dragOffsetY = 0;

// defines width/height of program for x/y offset 
let canvasW = 1000;
let canvasH = 700;

// creates x/y offset variables
let offsetX, offsetY;

// defaults UI functions to false
let xPopUpBox = false;
let pngGrid = false;

let colBoxCols = 4;
let colBoxRows = 13;

let colBoxSize = 40;
let colBoxGap = 5;
let colBoxFrame = 3;

let colBoxStartX = 170;
let colBoxStartY = 80;

let colPaletteW = colBoxCols * colBoxSize + (colBoxCols - 1) * colBoxGap;
let colPaletteH = colBoxRows * colBoxSize + (colBoxRows - 1) * colBoxGap;

let colPaletteArea = {x1: colBoxStartX, y1: colBoxStartY, x2: colBoxStartX + colPaletteW, y2: colBoxStartY + colPaletteH};

// Color palette data:
let primaryPalette = ["#c91f96", "#06402b", "#0040ff", "#FF0000", "#ff9900", "#ffe600", "#00cc66", "#00ffff",
  "#6633ff", "#ff66cc", "#999999", "#ffffff",
  "#000000", "#7a3b00", "#4b0082", "#6b8e23",
  "#4682b4", "#8b0000", "#ff1493", "#20b2aa",
  "#daa520", "#708090", "#adff2f", "#ff4500",
  "#2f4f4f", "#9932cc", "#dc143c", "#1e90ff",
  "#228b22", "#ff69b4", "#b8860b", "#00ced1",
  "#cd5c5c", "#556b2f", "#483d8b", "#8fbc8f",
  "#ba55d3", "#f4a460", "#a0522d", "#5f9ea0",
  "#c0c0c0", "#87ceeb", "#d2691e", "#ffb6c1",
  "#3cb371", "#b22222", "#4169e1", "#ffd700",
  "#8a2be2", "#f08080", "#00fa9a", "#191970"];

let currentPenColor = "#000000";

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

function getColBoxBounds(index) {
  let col = index % colBoxCols;
  let row = floor(index / colBoxCols);

  let x1 = colBoxStartX + col * (colBoxSize + colBoxGap);
  let y1 = colBoxStartY + row * (colBoxSize + colBoxGap);
  let x2 = x1 + colBoxSize;
  let y2 = y1 + colBoxSize;

  return { x1, y1, x2, y2 };
}

function drawColorPalette() {
 let totalColBoxes = colBoxCols * colBoxRows;

  for (let i = 0; i < totalColBoxes; i++) {
   let col = i % colBoxCols;
   let row = floor(i / colBoxCols);

   let x1 = colBoxStartX + col * (colBoxSize + colBoxGap);
   let y1 = colBoxStartY + row * (colBoxSize + colBoxGap);
   let x2 = x1 + colBoxSize;
   let y2 = y1 + colBoxSize;
   let boxColor = primaryPalette[i];

   if (boxColor) {
     drawColBox(x1, y1, x2, y2, colBoxFrame, {
       fill: boxColor,
       shadow: 200,
       highlight: 150
      });
    }
  }
}

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

if (checkColorPaletteClick(localX, localY)) {
   if (!insideColPaletteArea(localX, localY)) 
    return false;
    
    let totalColBoxes = colBoxCols * colBoxRows;

    for (let i = 0; i < totalColBoxes; i++) {
     let boxColor = paletteColors[i];
     if (!boxColor) continue;
     
     let box = getColBoxBounds(i);

     if (insideColBoxColArea(localX, localY, box, colBoxFrame)) {
        currentPenColor = boxColor;
        return true;
      }
    }

   return false;
 }



function insideColBoxColorArea(mx, my, box, z) {
 return (mx > box.x1 + 2 * z && mx < box.x2 - z && my > box.y1 + 2 * z && my < box.y2 - z);
}

function checkColorPaletteClick(localX, localY) {
 if (!insideColPaletteArea(localX, localY)) return false;

 let totalColBoxes = colBoxCols * colBoxRows;

 for (let i = 0; i < totalColBoxes; i++) {
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
 return (x > insideColPaletteArea.x1 && x < insideColPaletteArea.x2 && y > insideColPaletteArea.y1 && y < insideColPaletteArea.y2);
}

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
   drawingLayer.stroke(currentPenColor);
   drawingLayer.strokeWeight(5);
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
    
   // Left/right popup buttons:
   // if mouse hovers over the left popup window button, it darkens
    // otherwise, it stays neutral
    if (mouseHover(popUpBox.x1 + 50, popUpBox.y1 + 150, popUpBox.x1 + 175, popUpBox.y1 + 200)) {
      drawFrame(popUpBox.x1 + 50, popUpBox.y1 + 150, popUpBox.x1 + 175, popUpBox.y1 + 200, 3, {
       fill: 100,
       shadow: 40,
       highlight: 150,
      });
    } else {
     drawFrame(popUpBox.x1 + 50, popUpBox.y1 + 150, popUpBox.x1 + 175, popUpBox.y1 + 200, 3);
    }

   // if mouse hovers over the right popup window button, it darkens
    // otherwise, it stays neutral
    if (mouseHover(popUpBox.x1 + 225, popUpBox.y1 + 150, popUpBox.x1 + 350, popUpBox.y1 + 200)) {
     drawFrame(popUpBox.x1 + 225, popUpBox.y1 + 150, popUpBox.x1 + 350, popUpBox.y1 + 200, 3, {
       fill: 100,
       shadow: 40,
       highlight: 150,
      });
    } else {
     drawFrame(popUpBox.x1 + 225, popUpBox.y1 + 150, popUpBox.x1 + 350, popUpBox.y1 + 200, 3);
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
   fill(currentPenColor);
   circle(mouseX, mouseY, 10);
   pop();
  }

 // tranlates user drawing
 translateDrawing();

}