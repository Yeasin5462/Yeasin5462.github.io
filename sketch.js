function setup() {
  let canvas = createCanvas(windowWidth, 200);
  canvas.parent('p5-canvas'); // Attaching the canvas to the div
  noStroke();
}

function draw() {
  background(255);

  // Draw a simple car
  fill(255, 0, 0);
  rect(mouseX, height - 40, 60, 30);
  ellipse(mouseX + 15, height - 10, 20, 20);
  ellipse(mouseX + 45, height - 10, 20, 20);
}

function windowResized() {
  resizeCanvas(windowWidth, 200);
}
