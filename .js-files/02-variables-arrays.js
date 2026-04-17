// ------------------------------------------------------------------------------------------------------------------------------ 
// Declaring Variables & Arrays
// ------------------------------------------------------------------------------------------------------------------------------  

let drawingLayer;

let penInset = 5;

let drawArea = {x1: 350, y1: 80, x2: 990, y2: 600};
let penArea = {x1: drawArea.x1 + penInset, y1: drawArea.y1 + penInset, x2: drawArea.x2 - penInset, y2: drawArea.y2 - penInset};
let gridBVals = {x1: 930, y1: 45, x2: 990, y2: 75, z: 3};
let gridText = {x: 938.5, y: 53, size: 2.5, spacing: 1};

let canvasW = 1000;
let canvasH = 700;
let offsetX, offsetY;

let xPopUpBox = false;
let pngGrid = false;

