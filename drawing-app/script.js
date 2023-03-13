// 1.
// Initial references
const canvas = document.querySelector("canvas");
const colorInput = document.querySelector(".tools__color-input");
const backgroundColorInput = document.querySelector(".tools__background-input");
const toolType = document.querySelector(".tools__type");
const btnClear = document.querySelector(".tools__btn-clear");
const btnPen = document.querySelector(".tools__btn-pen");
const btnErase = document.querySelector(".tools__btn-erase");

const penSize = document.querySelector(".tools__pen-slide");

// eraser = false and  drawing = false initially
let isEraser = false;
let isDrawing = false;

// context for canvas
let context = canvas.getContext("2d");

// initially mouse position are 0
let mouseX = 0;
let mouseY = 0;

// Getting Left and top of canvas
let rectLeft = canvas.getBoundingClientRect().left;
let rectTop = canvas.getBoundingClientRect().top;

// 2. set inital features
const init = () => {
  context.strokeStyle = "black";
  context.lineWidth = 1;
  //Set canvas height to parent div height
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  //Set range title to pen size
  toolType.innerHTML = "Pen";
  //Set background and color inputs initially
  canvas.style.backgroundColor = "#ffffff";
  backgroundColorInput.value = "#ffffff";
  btnPen.value = context.strokeStyle;
};

//3.
// Detecti if it is a touch device
//
const isTouchDevice = () => {
  try {
    //===Try to create TouchEvent (it would fail for sektops)===
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
};

// 4.
// Get X & Y position for mouse
const getXY = (e) => {
  mouseX = (!isTouchDevice() ? e.pageX : e.touches?.[0].pageX) - rectLeft;
  mouseY = (!isTouchDevice() ? e.pageY : e.touches?.[0].pageY) - rectTop;
};

// 5. Define the start Drawing
const startDrawing = (e) => {
  isDrawing = true;
  getXY(e);
  context.beginPath();
  context.moveTo(mouseX, mouseY);
};

// 7.
// Define stopDrawing
const stopDrawing = () => {
  context.beginPath();
  isDrawing = false;
};

// 8.
// Define drawOnCanvas
const drawOnCanvas = (e) => {
  if (!isTouchDevice()) {
    e.preventDefault();
  }
  getXY(e);
  //=== if user is drawing ===
  if (isDrawing) {
    // ===create a line to x and y positions of cursor===
    context.lineTo(mouseX, mouseY);
    context.stroke();
    if (isEraser) {
      //=== Destination-out draws new shapes behind the existing canvas context
      context.globalCompositeOperation = "destination-out";
    } else {
      context.globalCompositeOperation = "source-over";
    }
  }
};

//Mouse down/touch start inside canvas
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("touchstart", startDrawing);
//Start drawing when mouse.touch moves
canvas.addEventListener("mousemove", drawOnCanvas);
canvas.addEventListener("touchmove", drawOnCanvas);
//when mouse click stops/touch stops stop drawing and begin a new path
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("touchend", stopDrawing);
//When mouse leaves the canvas
canvas.addEventListener("mouseleave", stopDrawing);

// 6.Add Listener for pen & erase btn
btnPen.addEventListener("click", () => {
  //===Set range title to pen size===
  toolType.innerHTML = "Pen ";
  isEraser = false;
});

// button for eraser mode
btnErase.addEventListener("click", () => {
  isEraser = true;
  //===Set range title to erase size===
  toolType.innerHTML = "Eraser ";
});

// 9.
//create functions to change pen size, color, bgc

// adjust pern size
penSize.addEventListener("input", () => {
  context.lineWidth = penSize.value;
});

// change color
colorInput.addEventListener("change", () => {
  context.strokeStyle = colorInput.value;
});

// change bgcolor
backgroundColorInput.addEventListener("change", () => {
  canvas.style.backgroundColor = backgroundColorInput.value;
});

// 10.
// Clear Function
btnClear.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  canvas.style.backgroundColor = "#fff";
  backgroundColorInput.value = "#fff";
});

window.onload = init();
