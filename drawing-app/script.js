// 1.
// Initial references

// canvas, colors, btns, inputs, tool type

// eraser = false and  drawing = false initially
// eraseBool = false, drawingBool = false;

// context for canvas
// context = canvas.getContent("2d")

// initially mouse position are 0
// mouseX = 0, mouseY = 0;

// Getting Left and top of canvas
// rectLeft = canvas.getBoundingClientRect().left
// rectLeft = canvas.getBoundingClientRect().top

// 2.
// set inital features
// const init= () => {
//  context.strokeStyle = "black";
// ===Set canvas height to parent div height===
// context.lineWidth = 1;
// canvas.style.width = "100%"
// canvas.style.height = "100%"
// canvas.width = canvas.offsetWidth
// canvas.height = canvas.offsetHeight
// ===Set range title to pen size===
// toolType.innetHtml = "pen"
// ===Set bgc and color inputs initially
// canvas.style.bacgkroundColor = "#ffffff"
// bgInput.value = "#ffffff"
// penButton.input = context.strokeStyle
//}

//3.
// Detecti if it is a touch device
//
// const isTouchDevice = () => {
//
// try {
// ===Try to create TouchEvent (it would fail for sektops)===
//    document.createEvent("TouchEvent");
//    return true
//  } catch (e) {
//    return false
//  }
//}

// 4.
// Get X & Y position for mouse
// const getXY = (e) {
//  mouseX = (!isTouchDevice() ? e.pageX : e.touches?.[0].pageX) - rectLeft;
//  mouseY = (!isTouchDevice() ? e.pageY : e.touches?.[0].pageY) - rectTop;
//}

// 5. Define the start Drawing
// const startDrawing = (e) => {
//  drawBool = true'
//  getXY(e);
//  context.beginPath();
//  context.moveTo(mouseX, mouseY);
//}

// 7.
// Define stopDrawing
// const stopDrawing = () => {
//    context.beginPath();
//    drawBool = false;
//
// }

// when mouse clock stops/ touch stops -> stop drawing and begin a new path
// canvas.addEventListener("mouseup", stopDrawing);
// canvas.addEventListener("touchend", stopDrawing);

// when mouse leaves the canvas
// canvas.addEventListener("mouseleave", stopDrawing);

// 6.Add Listener for pen & erase btn
// penBtn.addEventlistener(click, () => {
//  ===Set range title to pen size===
//  toolType.innerHTML = "Pen";
//  eraseBool = false
//})

// button for eraser mode
// eraseBtn.addEventListener(click, () => {
//   eraseBool = true;
//  ===Set range title to erase size===
// toolType.innerHtml = "Eraser"
// })

// 8.
// Define drawOnCanvas
// const drawOnCanvas = (e) => {
//  if(!isTouchDevice()) {
//    e.preventDefault()'
//  }
//  getXY(e);
// === if user is drawing ===
// if (drawBool) {
//    ===create a line to x and y positions of cursor===
//    context.lineTo(mouseX, mouseY);
//    context.stoke();
//    if (eraseBool) {
//        === Destination-out draws new shapes behind the existing canvas context
//        context.globalCompositeOparation = "destination-out"
//     }
//      else {
//        context.globalCompositeOparation = "source-over"
//    }
//  }
//}

// ===MOuse down/touch start inside canvas===
// canvas.addEventListener("mousedown", startDrawing);
// canvas.addEventListener("touchstart", startDrawing);

// ===Start drawing whe mouse.touch moves ===
// canvas.addEventListener("mouseDown", drawOnCanvas);
// canvas.addEventListener("touchstart", drawOnCanvas);

// 9.
//create functions to change pen size, color, bgc

// adjust pern size
// penSize.addEventListener("input" ,() {
//    context.LineWidth = penSize.value;
//})

// change color
// colorBtn.addEventListener("change" ,() {
//    context.stokeStyle = colorBtn.value;
//})

// change bgcolor
// bgBtn.addEventListener("change" ,() {
//   canvas.style.backgroundColor = bgBtn.value;
//})

// 10.
// Clear Function
// clearBtn.addEventListener("click", () => {
// context.clearRect(0, 0, canvas.width, canvas.height);
// canvas.style.bacgkgroundColor = "#fff";
// backgroundBtn.value = "#fff";
//})

// window.onload = init();
