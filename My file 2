class MovingCircle {
    constructor() {
      this.x = random(width);
      this.y = random(height);
      this.diameter = random(10, 30);
      this.speedX = random(-2, 2);
      this.speedY = random(-2, 2);
    }
  
    move() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > width) this.speedX *= -1;
      if (this.y < 0 || this.y > height) this.speedY *= -1;
    }
  
    display() {
      fill(255, 204, 0);
      noStroke();
      ellipse(this.x, this.y, this.diameter, this.diameter);
    }
  }
  
  let circles = [];
  
  function setup() {
    let canvas = createCanvas(windowWidth, 200);
    canvas.parent('p5-canvas');
    for (let i = 0; i < 50; i++) {
      circles.push(new MovingCircle());
    }
  }
  
  function draw() {
    background(255);
    for (let circle of circles) {
      circle.move();
      circle.display();
    }
  }
  
