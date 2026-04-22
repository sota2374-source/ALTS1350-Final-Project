// 05-drawArea-functions.js

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
 if (xPopUpBox || blockNextDraw) return;
   let localX = mouseX - offsetX;
   let localY = mouseY - offsetY;

  if (mouseIsPressed && insideDrawArea(localX, localY)) {
    if (!currentStroke) {
      startStroke(localX, localY);
    } else {
      AddPointToStroke(localX, localY);
    }

    redrawDrawingLayer();
     
   if (currentStroke) {
      drawingLayer.stroke(currentStroke.color);
      drawingLayer.strokeWeight(currentStroke.weight);
      drawingLayer.noFill();

     for (let i = 1; i < currentStroke.points.length; i++) {
       let p1 = currentStroke.points[i - 1];
       let p2 = currentStroke.points[i];
       drawingLayer.line(p1.x, p1.y, p2.x, p2.y);
      }
    }
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

function redrawDrawingLayer() {
  drawingLayer.clear();

 for (let i = 0; i < strokes.length; i++) {
   drawingLayer.stroke(strokeData.color);
   drawingLayer.strokeWeight(strokeData.weight);
   drawingLayer.noFill();

   for (let j = 1; j < strokeData.points.length; j++) {
     let p1 = strokeData.points[j - 1];
     let p2 = strokeData.points[j];
     drawingLayer.line(p1.x, p1.y, p2.x, p2.y);
    }
  }
}

function startStroke(x, y) {
  currentStroke = {
    color: currentPenColor,
    weight: currentPenWeight,
    points: [{x: x, y: y}]
  };
}

function AddPointToStroke(x, y) {
 if (currentStroke) {
   currentStroke.points.push({ x: x, y: y});
  }
}

function finishStroke() {
  if (currentStroke && currentStroke.points.length > 0) {
   strokes.push(currentStroke);
   currentStroke = null;
   undoStrokes = [];
   redrawDrawingLayer();
  }
}

function undoLastStroke() {
  if (strokes.length > 0) {
    let removedStroke = strokes.pop();
    undoStrokes.push(removedStroke);
    redrawDrawingLayer();
  }
}

function redoLastStroke() {
 if (undoStrokes.length > 0) {
   let restoredStroke = undoStrokes.pop();
   strokes.push(restoredStroke);
   redrawDrawingLayer();
  }
}

function clearCanvasDrawing() {
 strokes = [];
 currentStroke = null;
 drawingLayer.clear();
}