// 02-variables-arrays.js

// ------------------------------------------------------------------------------------------------------------------------------ 
// Declaring Variables & Arrays
// ------------------------------------------------------------------------------------------------------------------------------  

// drawArea ---------------------------------------------------------------------------------------------------------------------  

// Creates drawing layer for user drawing
let drawingLayer;

// Blocks drawing first press after popup window closes to prevent accidental pen strokes from closing the popup box
let blockNextDraw = false;

// Default pen strokeweight
let currentStrokeWeight = 2;

// creates drawArea and penArea boundaries so users can only create within boundaries
let drawArea = {x1: 350, y1: 80, x2: 990, y2: 615};
let penArea = {x1: drawArea.x1 + 5 + currentStrokeWeight, y1: drawArea.y1 + 5 + currentStrokeWeight, x2: drawArea.x2 - currentStrokeWeight, y2: drawArea.y2 - currentStrokeWeight};

// grid button/text values, simplifies button hover mechanics
let gridBVals = {x1: 930, y1: 45, x2: 990, y2: 75, z: 3};
let gridText = {x: 938.5, y: 53, size: 2.5, spacing: 1};

let undoButtonVals = {x1: 840, y1: 45, x2: 880, y2: 75, z: 3};
let redoButtonVals = {x1: 885, y1: 45, x2: 925, y2: 75, z: 3};

// creates array for popUpBox boundaries, allows box to be moved around
const popUpStartPos = {x1: 300, y1: 200, x2: 700, y2: 425}
let popUpBox = {x1: 300, y1: 200, x2: 700, y2: 425};

// Sets default settings for popup window
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

// Setup for color grid
let colBoxCols = 4;
let colBoxRows = 12;

let colBoxSize = 40;
let colBoxGap = 5;
let colBoxFrame = 3;

let colBoxStartX = 170;
let colBoxStartY = 80;

let colPaletteW = colBoxCols * colBoxSize + (colBoxCols - 1) * colBoxGap;
let colPaletteH = colBoxRows * colBoxSize + (colBoxRows - 1) * colBoxGap;

let colPaletteArea = {x1: colBoxStartX, y1: colBoxStartY, x2: colBoxStartX + colPaletteW, y2: colBoxStartY + colPaletteH};

// Color palette data:
let primaryPalette = [
  "#ffffff", "#d9d9d9", "#808080", "#000000",
  "#fff2cc", "#ffe599", "#ffd966", "#f1c232",
  "#fce5cd", "#f9cb9c", "#f6b26b", "#e69138",
  "#f4cccc", "#ea9999", "#e06666", "#cc0000",
  "#f4cccc", "#f4b6c2", "#ff66cc", "#cc3399",
  "#d9d2e9", "#b4a7d6", "#8e7cc3", "#674ea7",
  "#cfe2f3", "#9fc5e8", "#6fa8dc", "#3d85c6",
  "#d0e0e3", "#a2c4c9", "#76a5af", "#45818e",
  "#d9ead3", "#b6d7a8", "#93c47d", "#6aa84f",
  "#fff2cc", "#ffe599", "#d9b26b", "#bf9000",
  "#ead1dc", "#d5a6bd", "#c27ba0", "#a64d79",
  "#c9daf8", "#a4c2f4", "#6d9eeb", "#1155cc"
];

// Secondary palette of pastel colors
let pastelsPalette = [
  "#ffd9d9", "#ffdcd9", "#ffdfd9", "#ffe2d9",
  "#ffe6d9", "#ffe9d9", "#ffecd9", "#fff0d9",
  "#fff3d9", "#fff6d9", "#fff9d9", "#fffdd9",
  "#f9ffd9", "#f6ffd9", "#f3ffd9", "#efffd9",
  "#ecffd9", "#e9ffd9", "#e6ffd9", "#e2ffd9",
  "#dfffd9", "#dcffd9", "#d9ffd9", "#d9ffdc",
  "#d9ffdf", "#d9ffe2", "#d9ffe6", "#d9ffe9",
  "#d9ffec", "#d9fff0", "#d9fff3", "#d9fff6",
  "#d9fff9", "#d9fffd", "#d9f9ff", "#d9f6ff",
  "#d9f3ff", "#d9efff", "#d9ecff", "#d9e9ff",
  "#d9e6ff", "#dce2ff", "#dfdfff", "#e2dcff",
  "#e6d9ff", "#e9d9ff", "#ecd9ff", "#f0d9ff"
];

// Defaults pen color to black
let currentPenColor = "#000000";

// Arrays to store user strokes
let strokes = [];
let undoStrokes = [];
let currentStroke = null;