// ------------------------------------------------------------------------------------------------------------------------------ 
// Declaring Variables & Arrays
// ------------------------------------------------------------------------------------------------------------------------------  

let drawingLayer;

// insets penArea boundary so user can't draw on drawArea frame
let penInset = 5;

// creates drawArea and penArea boundaries so users can only create within boundaries
let drawArea = {x1: 350, y1: 80, x2: 990, y2: 615};
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
  "#3cb371", "#b22222", "#4169e1", "#ffd700"];

let currentPenColor = "#000000";
