let symmetry = 6;   
let angle = 360 / symmetry;
let saveButton, clearButton, mouseButton, keyboardButton;
let slider;


function setup() { 
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(250);
  saveButton = createButton('Save');
  saveButton.mousePressed(saveFile);
  brushSizeSlider = createButton('Brush Size');
  sizeSlider = createSlider(1, 32, 4, 0.1);
  brushSizeSlider = createButton('Red');
  redSlider = createSlider(0, 255, 0, 1);
  brushSizeSlider = createButton('Green');
  greenSlider = createSlider(0, 255, 0, 1);
  brushSizeSlider = createButton('Blue');
  blueSlider = createSlider(0, 255, 0, 1);
}

function saveFile() {
  save('design.jpg');
}

function clearScreen() {
  background(255);
}

function screenFull() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function draw() {
  translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;
    
    if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        let sw = sizeSlider.value();
        strokeWeight(sw);
        let red = redSlider.value();
        let green = greenSlider.value();
        let blue = blueSlider.value();
        stroke(red, green, blue);
        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  }
}
