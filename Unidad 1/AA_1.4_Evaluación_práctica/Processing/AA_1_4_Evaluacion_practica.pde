void setup() {
  size(600, 600);
  smooth();
}
 
void draw() {
  background(255);
 
  // Sombrero del hongo
  stroke(25);
  strokeWeight(12);
  fill(205, 35, 15);
  ellipse(300, 245, 470, 390);
 
  // Manchas blancas
  fill(255);
  noStroke();
  ellipse(300, 155, 180, 190);
  ellipse(115, 245, 65, 150);
  ellipse(485, 245, 65, 150);
 
  // Rostro
  stroke(25);
  strokeWeight(12);
  fill(255, 215, 170);
  rect(155, 340, 290, 170, 65);
 
  // Ojos
  noStroke();
  fill(25);
  ellipse(240, 420, 28, 85);
  ellipse(360, 420, 28, 85);
}
