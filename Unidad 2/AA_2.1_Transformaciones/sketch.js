function setup() {
  createCanvas(700, 300);
  angleMode(DEGREES);
}

function draw() {
  background(225, 242, 235);

  // Etapa 1: Huevo
  push();
  translate(60, 155);
  scale(0.75);
  rotate(-3);
  drawEgg();
  pop();

  // Etapa 2: Cría
  push();
  translate(180, 155);
  scale(0.60);
  rotate(-4);
  drawTurtle("cria");
  pop();

  // Etapa 3: Joven
  push();
  translate(320, 155);
  scale(0.70);
  rotate(3);
  drawTurtle("joven");
  pop();

  // Etapa 4: Adulto
  push();
  translate(470, 155);
  scale(0.78);
  rotate(-2);
  drawTurtle("adulto");
  pop();

  // Etapa 5: Provecto
  push();
  translate(620, 155);
  scale(0.78);
  rotate(4);
  drawTurtle("provecto");
  pop();
}

// HUEVO
function drawEgg() {

  // Arena
  noStroke();
  fill(218, 190, 130);
  ellipse(0, 35, 85, 28);

  // Huevo
  stroke(125, 115, 90);
  strokeWeight(2);
  fill(250, 245, 215);
  ellipse(0, 0, 48, 62);

  // Manchas
  noStroke();
  fill(220, 210, 175);
  ellipse(-8, -12, 6, 4);
  ellipse(10, 3, 5, 4);
  ellipse(-4, 15, 4, 3);
}

// TORTUGA DE FRENTE
function drawTurtle(etapa) {

  let piel;
  let caparazon;
  let caparazonClaro;

  // Colores de cada etapa
  if (etapa == "cria") {
    piel = "#A9D66F";
    caparazon = "#80A94F";
    caparazonClaro = "#B2D87D";
  }

  if (etapa == "joven") {
    piel = "#86B955";
    caparazon = "#668E3D";
    caparazonClaro = "#8EAE59";
  }

  if (etapa == "adulto") {
    piel = "#648E3E";
    caparazon = "#496C2D";
    caparazonClaro = "#6E914A";
  }

  if (etapa == "provecto") {
    piel = "#899482";
    caparazon = "#687263";
    caparazonClaro = "#929A8B";
  }

  // Cola
  stroke(45, 65, 40);
  strokeWeight(2);
  fill(piel);
  triangle(-7, 68, 7, 68, 0, 85);

  // Patas traseras
  fill(piel);
  ellipse(-27, 62, 28, 38);
  ellipse(27, 62, 28, 38);

  // Patas delanteras
  ellipse(-46, 15, 27, 55);
  ellipse(46, 15, 27, 55);

  // Cabeza
  fill(piel);
  if (etapa == "cria") {
    ellipse(0, -48, 58, 52);
  } else {
    ellipse(0, -48, 53, 48);
  }

  // Caparazón
  stroke(45, 65, 40);
  strokeWeight(2);
  fill(caparazon);

  if (etapa == "cria") {
    ellipse(0, 25, 72, 90);
  }

  else if (etapa == "joven") {
    ellipse(0, 25, 78, 98);
  }

  else if (etapa == "adulto") {
    ellipse(0, 25, 85, 105);
  }

  else if (etapa == "provecto") {
    ellipse(0, 25, 84, 103);
  }

  // Diseño del caparazón
  noFill();
  stroke(caparazonClaro);
  strokeWeight(3);
  ellipse(0, 25, 58, 76);
  line(-28, 0, 0, 20);
  line(28, 0, 0, 20);
  line(-28, 50, 0, 30);
  line(28, 50, 0, 30);
  line(0, -10, 0, 60);

  // CARA
  // Ojos
  fill(255);
  stroke(50);
  strokeWeight(1.5);

  if (etapa == "cria") {
    ellipse(-13, -52, 16, 18);
    ellipse(13, -52, 16, 18);
  } else {
    ellipse(-12, -52, 13, 15);
    ellipse(12, -52, 13, 15);
  }

  // Pupilas
  fill(35);
  ellipse(-12, -51, 6, 8);
  ellipse(12, -51, 6, 8);

  // Brillo de los ojos
  noStroke();
  fill(255);
  ellipse(-10, -54, 2.5, 2.5);
  ellipse(14, -54, 2.5, 2.5);

  // Nariz
  fill(70, 85, 55);
  ellipse(-3, -38, 3, 3);
  ellipse(3, -38, 3, 3);

  // Sonrisa
  // Solo la cría y el joven sonríen
  if (etapa == "cria" || etapa == "joven") {
    noFill();
    stroke(55);
    strokeWeight(3);
    arc(0, -34, 20, 12, 10, 170);
  }

  // CRÍA
  // Juguete
  if (etapa == "cria") {

    // Mejillas
    noStroke();
    fill(255, 60, 60, 200);
    ellipse(-20, -38, 8, 5);
    ellipse(20, -38, 8, 5);

    // Pelota
    stroke(100, 90, 50);
    strokeWeight(2);
    fill("#D8C36A");
    ellipse(-60, 48, 28, 28);

    // Diseño de la pelota
    noFill();
    stroke("#7F8F47");
    arc(-60, 48, 22, 22, 30, 150);
    arc(-60, 48, 22, 22, 210, 330);
  }

  // JOVEN
  // Lentes de sol
  if (etapa == "joven") {
    stroke("#263D2B");
    strokeWeight(3);
    fill("#31483A");
    rectMode(CENTER);
    rect(-13, -52, 21, 13, 4);
    rect(13, -52, 21, 13, 4);

    // Puente
    line(-3, -52, 3, -52);

    // Patillas
    line(-24, -52, -29, -49);
    line(24, -52, 29, -49);

  }

  // ADULTO
  // Lentes normales y bigote
  if (etapa == "adulto") {

    // Lentes
    noFill();
    stroke("#69583C");
    strokeWeight(2.5);
    ellipse(-13, -52, 22, 18);
    ellipse(13, -52, 22, 18);

    // Puente
    line(-2, -52, 2, -52);
    // Patillas
    line(-24, -52, -28, -49);
    line(24, -52, 28, -49);

    // Bigote
    noStroke();
    fill("#51402C");
    ellipse(-8, -32, 18, 8);
    ellipse(8, -32, 18, 8);
  }

  // PROVECTO
  if (etapa == "provecto") {

    // Cejas gruesas
    stroke("#4A4A42");
    strokeWeight(5);
    line(-21, -61, -7, -56);
    line(7, -56, 21, -61);

    // Boca molesta
    noFill();
    stroke("#525A4D");
    strokeWeight(3);
    arc(0, -27, 20, 10, 190, 350);

    // Bastón
    stroke("#80613A");
    strokeWeight(6);
    line(58, 25, 58, 87);
    noFill();

    arc(50, 25, 16, 16, 180, 360);
  }
}