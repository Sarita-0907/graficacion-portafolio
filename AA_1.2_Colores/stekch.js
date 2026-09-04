function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill(204, 102, 255);
  stroke(102, 0, 102);
  strokeWeight(4);

  rect(100, 100, 200, 200);

  fill(255, 255, 255);
  stroke(0);
  strokeWeight(2);

  ellipse(150, 160, 40, 40);
  ellipse(250, 160, 40, 40);

  fill(0);
  noStroke();
  ellipse(150, 160, 15, 15);
  ellipse(250, 160, 15, 15);

  stroke(102, 0, 102);
  strokeWeight(4);

  line(150, 240, 250, 240);

  fill(230, 126, 40);
  stroke(0);
  strokeWeight(1);

  triangle(200, 180, 185, 210, 215, 210);

  // Barba sin relleno
  noFill();
  stroke(102, 0, 102);
  strokeWeight(3);

  ellipse(200, 270, 60, 25);

  // Canal alfa
  fill(204, 204, 255, 120);
  noStroke();

  // Esta figura se coloca encima de otras para observar la transparencia
  rect(120, 120, 160, 70);


  // Renderización
  fill(255, 0, 0);
  
  ellipse(330, 350, 30, 30);
}
