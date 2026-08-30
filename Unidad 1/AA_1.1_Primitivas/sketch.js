function setup() {
  createCanvas(400, 400);

  background(0, 51, 102);

  stroke(35);
  strokeWeight(3);
  strokeCap(ROUND);

  // Brazos
  stroke(30);
  strokeWeight(3);
  fill(245);
  ellipse(130, 250, 35, 100); // Izquierda
  ellipse(270, 250, 35, 100); // Derecha
  
  // Cuerpo
  fill(250);
  ellipse(200, 245, 125, 190);

  // Cuello
  stroke(35);
  strokeWeight(3);
  fill(245);
  ellipse(200, 170, 75, 45);
  
  // Cabeza
  fill(250);
  ellipse(200, 120, 155, 110);

  // Visor negro
  fill(8, 12, 18);
  stroke(25);
  strokeWeight(2);
  ellipse(200, 122, 120, 72);

  // Ojos
  // Parte azul exterior de los dos ojos
  noStroke();
  fill(0, 130, 220);
  ellipse(174, 120, 32, 15);
  ellipse(226, 120, 32, 15);

  // Azul más claro colocado encima para simular luminosidad
  fill(40, 210, 255);
  ellipse(176, 119, 24, 10);
  ellipse(224, 119, 24, 10);

  // Pequeños reflejos claros que hacen que los ojos parezcan brillantes
  fill(210, 250, 255);
  ellipse(181, 117, 7, 4);
  ellipse(229, 117, 7, 4);

  // Planta 
  //Tallo
  stroke(40, 150, 70);
  strokeWeight(7);
  line(200, 235, 200, 260);

  //Hojas
  noStroke();
  fill(40, 150, 70);
  triangle(200, 245, 180, 235, 195, 255); // Izquierda
  triangle(200, 250, 220, 238, 205, 258); // Derecha

  //Panel
  // Detalles del panel
  stroke(35);
  strokeWeight(2);

  // Indicador izquierdo
  fill(35);
  rect(180, 280, 15, 8, 0);

  // Indicador derecho
  fill(35);
  rect(205, 280, 15, 8, 0);

  // Línea del panel
  stroke(35);
  line(180, 295, 220, 295);
}
