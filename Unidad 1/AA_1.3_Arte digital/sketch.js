function setup() {
  createCanvas(600, 700);
}

function draw() {

  background("#F2E58C");
  
  // Mesa
  noStroke();
  fill("#C9A916");
  rect(0, 560, 600, 140);

  stroke("#867117");
  strokeWeight(3);
  line(0, 560, 600, 560);
  
  // Tallos
  stroke("#4E702C");
  strokeWeight(6);

  line(300, 500, 90, 170);
  line(300, 500, 180, 110);
  line(300, 500, 290, 85);
  line(300, 500, 400, 140);
  line(300, 500, 500, 200);

  line(300, 500, 125, 285);
  line(300, 500, 220, 235);
  line(300, 500, 350, 245);
  line(300, 500, 460, 300);

  line(300, 500, 175, 390);
  line(300, 500, 275, 365);
  line(300, 500, 390, 390);

  // Hojas
  noStroke();

  fill("#4D712D");

  ellipse(140, 320, 65, 25);
  ellipse(185, 350, 60, 25);
  ellipse(380, 325, 65, 25);
  ellipse(440, 350, 60, 25);

  ellipse(210, 410, 65, 25);
  ellipse(390, 415, 65, 25);

  fill("#315426");

  triangle(150, 280, 110, 300, 145, 315);
  triangle(430, 280, 480, 300, 440, 315);

  triangle(190, 375, 145, 390, 185, 410);
  triangle(410, 380, 465, 395, 420, 410);

  // Girasol 1 - Superior izquierdo
  noStroke();

  fill("#D7A817");

  ellipse(90, 135, 28, 70);
  ellipse(90, 205, 28, 70);

  ellipse(55, 170, 70, 28);
  ellipse(125, 170, 70, 28);

  ellipse(65, 145, 35, 65);
  ellipse(115, 145, 35, 65);

  ellipse(65, 195, 35, 65);
  ellipse(115, 195, 35, 65);

  fill("#A26D13");
  ellipse(90, 170, 68, 68);

  fill("#604516");
  ellipse(90, 170, 38, 38);

  // Girasol 2 - superior
  fill("#C99C13");

  ellipse(180, 110, 115, 115);

  fill("#AD8914");
  ellipse(180, 110, 90, 90);

  fill("#69742B");
  ellipse(180, 110, 35, 35);

  fill("#547126");
  ellipse(180, 110, 15, 15);

  // Girasol 3 - superior central
  fill("#C99C13");
  ellipse(290, 85, 125, 125);

  fill("#AD8914");
  ellipse(290, 85, 100, 100);

  fill("#75681B");
  ellipse(290, 85, 38, 38);

  fill("#547126");
  ellipse(290, 85, 16, 16);

  // Girasol 4 - superior derecho
  fill("#D7A817");

  ellipse(400, 105, 25, 70);
  ellipse(400, 175, 25, 70);

  ellipse(365, 140, 70, 25);
  ellipse(435, 140, 70, 25);

  ellipse(375, 115, 35, 60);
  ellipse(425, 115, 35, 60);

  ellipse(375, 165, 35, 60);
  ellipse(425, 165, 35, 60);

  fill("#A26D13");
  ellipse(400, 140, 65, 65);

  fill("#604516");
  ellipse(400, 140, 35, 35);

  // Girasol 5 - derecho
  fill("#C99C13");
  ellipse(500, 205, 90, 90);

  fill("#AD8914");
  ellipse(500, 205, 70, 70);

  fill("#777027");
  ellipse(500, 205, 30, 30);

  fill("#547126");
  ellipse(500, 205, 13, 13);

  // Girasol 6 - centro izquierdo
  fill("#C99C13");
  ellipse(215, 220, 110, 110);

  fill("#AD8914");
  ellipse(215, 220, 88, 88);

  fill("#667425");
  ellipse(215, 220, 34, 34);

  fill("#547126");
  ellipse(215, 220, 14, 14);

  // Girasol 7 - centro
  fill("#D7A817");

  ellipse(320, 195, 25, 65);
  ellipse(320, 275, 25, 65);

  ellipse(280, 235, 65, 25);
  ellipse(360, 235, 65, 25);

  ellipse(292, 205, 30, 60);
  ellipse(348, 205, 30, 60);

  ellipse(292, 265, 30, 60);
  ellipse(348, 265, 30, 60);

  fill("#A26D13");
  ellipse(320, 235, 65, 65);

  fill("#6E4517");
  ellipse(320, 235, 38, 38);

  // Girasol 8 - izquierdo
  fill("#D7A817");

  ellipse(120, 250, 23, 65);
  ellipse(120, 320, 23, 65);

  ellipse(85, 285, 65, 23);
  ellipse(155, 285, 65, 23);

  ellipse(95, 260, 30, 55);
  ellipse(145, 260, 30, 55);

  ellipse(95, 310, 30, 55);
  ellipse(145, 310, 30, 55);

  fill("#9A6D15");
  ellipse(120, 285, 60, 55);

  fill("#604516");
  ellipse(120, 285, 30, 28);

  // Girasol 9 - derecho central
  fill("#D7A817");

  ellipse(455, 265, 25, 65);
  ellipse(455, 335, 25, 65);

  ellipse(420, 300, 65, 25);
  ellipse(490, 300, 65, 25);

  ellipse(430, 275, 30, 55);
  ellipse(480, 275, 30, 55);

  ellipse(430, 325, 30, 55);
  ellipse(480, 325, 30, 55);

  fill("#A26D13");
  ellipse(455, 300, 60, 60);

  fill("#654617");
  ellipse(455, 300, 32, 32);

  // Girasol 10 - grande interior 
  fill("#C99C13");
  ellipse(235, 365, 130, 130);

  fill("#AD8914");
  ellipse(235, 365, 105, 105);

  fill("#667428");
  ellipse(235, 365, 42, 42);

  fill("#547126");
  ellipse(235, 365, 17, 17);

  // Girasol 11 - inferior derecho

  fill("#C99C13");
  ellipse(355, 390, 120, 120);

  fill("#AD8914");
  ellipse(355, 390, 95, 95);

  fill("#6C7627");
  ellipse(355, 390, 38, 38);

  fill("#547126");
  ellipse(355, 390, 16, 16);

  // Flor caída izquierda
  fill("#C79712");

  ellipse(150, 410, 70, 35);
  ellipse(130, 425, 55, 25);
  ellipse(170, 430, 60, 25);

  fill("#604516");
  ellipse(155, 420, 45, 35);

  fill("#56712C");

  triangle(
    120, 410,
    90, 395,
    115, 430
  );

  triangle(
    185, 415,
    215, 405,
    190, 435
  );

  // Flor caída derecha
  fill("#C79712");

  ellipse(445, 425, 75, 35);
  ellipse(425, 440, 55, 25);
  ellipse(465, 440, 55, 25);

  fill("#604516");
  ellipse(445, 430, 45, 35);

  fill("#56712C");

  triangle(
    410, 425,
    380, 410,
    405, 445
  );

  triangle(
    480, 425,
    510, 415,
    485, 445
  );

  // Jarrón
  stroke("#8A6724");
  strokeWeight(3);

  fill("#D2AE47");

  // Boca
  ellipse(300, 500, 125, 32);

  // Cuerpo
  rect(245, 500, 110, 115);

  // Parte inferior
  ellipse(300, 615, 110, 38);

  // Decoración del jarrón
  noStroke();

  fill("#B88725");
  ellipse(300, 550, 90, 45);

  fill("#D5B34C");
  ellipse(300, 550, 65, 25);

}