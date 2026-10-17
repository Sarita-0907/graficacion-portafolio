// Variable de las siete veladoras
let v1 = true;
let v2 = true;
let v3 = true;
let v4 = true;
let v5 = true;
let v6 = true;
let v7 = true;

// Variable de la imagen institucional
let imagen;

// Variable de la música de fondo
let musica;

// Dirección del audio en GitHub
let rutaMusica =
  "https://raw.githubusercontent.com/Sarita-0907/graficacion-portafolio/main/Unidad%202/Actividad_2.2_Mini_Proyecto/assets/La%20Llorona%20-%20Guitarra.mp3";

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);

  crearImagen();
  agregarMusica();
}

// MÚSICA DE FONDO
function agregarMusica() {
  musica = createAudio(rutaMusica);

  // Volumen al 40 %
  musica.volume(0.4);

  // Repetir la canción
  musica.attribute("loop", "");

  // Ocultar el reproductor
  musica.hide();
}

// REPRODUCIR Y PAUSAR LA MÚSICA
function controlarMusica() {
  if (!musica) {
    return;
  }

  if (musica.elt.paused) {
    let reproduccion = musica.elt.play();

    if (reproduccion && reproduccion.catch) {
      reproduccion.catch(() => {
        // El navegador puede bloquear la reproducción
      });
    }
  } else {
    musica.elt.pause();
  }
}

// LOGOTIPO INSTITUCIONAL
function crearImagen() {
  imagen = createImg(
    "https://sie.carrillopuerto.tecnm.mx/admin/images/230033_logotipo_institucional.png",
    "Logotipo institucional"
  );

  imagen.size(130, 130);
  imagen.style("object-fit", "contain");
  imagen.style("position", "fixed");
  imagen.style("z-index", "10");
  imagen.style("pointer-events", "none");

  imagen.position(windowWidth - 160, 10);
}

function draw() {
  background(231, 215, 193);

  sueloPantalla(); // Piso adaptable a pantalla completa

  push();

  translate(width / 2, height / 2);
  scale(min(width / 1200, height / 800));

  casa();
  altar();
  cruz();
  fotos();
  ofrendas();
  flores();
  tecnologia();
  veladoras();
  catrin();

  pop();

  // Mostrar nota de música
  notaMusica();
}

// NOTA PARA REPRODUCIR Y PAUSAR LA MÚSICA
function notaMusica() {
  push();

  let anchoNota = min(365, width - 20);
  let altoNota = 44;

  // Esquina inferior derecha
  let x = width - anchoNota - 10;
  let y = height - altoNota - 10;

  // Fondo de la nota
  noStroke();
  fill(75, 58, 45, 210);

  rectMode(CORNER);
  rect(x, y, anchoNota, altoNota, 10);

  // Texto
  fill(255, 248, 230);
  textAlign(CENTER, CENTER);
  textSize(min(13, width / 30));
  textStyle(NORMAL);

  let mensaje = "♪ Haz clic en el altar para reproducir la música";

  if (musica && !musica.elt.paused) {
    mensaje = "♫ Haz clic en el altar para pausar la música";
  }

  text(
    mensaje,
    x + 10,
    y + 5,
    anchoNota - 20,
    altoNota - 10
  );

  rectMode(CENTER);

  pop();
}

// SUELO ADAPTABLE A PANTALLA COMPLETA
function sueloPantalla() {
  let escala = min(width / 1200, height / 800);
  let inicioSuelo = height / 2 + 251 * escala;

  noStroke();
  fill(218, 196, 167);

  rectMode(CORNER);
  rect(0, inicioSuelo, width, height - inicioSuelo);

  stroke(199, 173, 145);
  strokeWeight(2);

  line(0, inicioSuelo, width, inicioSuelo);

  // Sombra debajo del altar
  noStroke();
  fill(185, 160, 130, 140);

  ellipse(
    width / 2 - 135 * escala,
    height / 2 + 333 * escala,
    850 * escala,
    35 * escala
  );

  rectMode(CENTER);
}

// CASA CON TECHO TRAPEZOIDAL DE HUANO
function casa() {
  // Postes de madera
  stroke(128, 91, 56);
  strokeWeight(18);

  line(-530, -295, -530, 309);
  line(242, -295, 242, 309);

  // Techo trapezoidal
  stroke(116, 82, 49);
  strokeWeight(3);
  fill(161, 117, 71);

  quad(
    -545, -295,
    -500, -377,
    200, -377,
    257, -295
  );

  // Detalles del huano
  stroke(113, 79, 48);
  strokeWeight(2);

  for (let i = 0; i < 30; i++) {
    let x = -505 + i * 24;
    line(x, -375, x - 15, -299);
  }

  // Viga frontal
  stroke(130, 89, 51);
  strokeWeight(10);

  line(-570, -295, 280, -295);

  // Cuerda de la fila trasera
  stroke(116, 82, 49);
  strokeWeight(3);

  line(-515, -270, 225, -270);

  // Papel picado del fondo
  papelFondo(-450, -247, 212, 147, 108);
  papelFondo(-366, -247, 107, 164, 162);
  papelFondo(-282, -247, 209, 113, 150);
  papelFondo(-198, -247, 219, 176, 91);
  papelFondo(-114, -247, 114, 159, 193);
  papelFondo(-30, -247, 211, 138, 108);
  papelFondo(54, -247, 113, 168, 141);
  papelFondo(138, -247, 211, 147, 108);

  // Cuerda de la fila delantera
  stroke(104, 72, 48);
  strokeWeight(3);

  line(-515, -235, 225, -235);

  // Papel picado delantero
  papel(-430, -211, 213, 77, 129);
  papel(-346, -211, 67, 164, 173);
  papel(-262, -211, 238, 181, 53);
  papel(-178, -211, 88, 175, 109);
  papel(-94, -211, 222, 76, 143);
  papel(-10, -211, 75, 162, 178);
  papel(74, -211, 238, 181, 53);
  papel(158, -211, 213, 77, 129);
}

// PAPEL PICADO DELANTERO
function papel(x, y, r, g, b) {
  push();

  translate(x, y - 24);

  // Movimiento según el cursor y frameCount
  rotate(
    (mouseX - width / 2) / width * 65 +
    sin(frameCount * 4 + x) * 15
  );

  // Cuerda individual
  stroke(104, 72, 48);
  strokeWeight(2);

  line(0, 0, 0, 24);
  translate(0, 24);

  // Papel
  stroke(r, g, b);
  strokeWeight(2);
  fill(r, g, b);

  rect(0, 0, 63, 48);

  // Decoraciones
  noStroke();
  fill(231, 215, 193);

  ellipse(0, 0, 10, 10);
  ellipse(-17, 0, 8, 13);
  ellipse(17, 0, 8, 13);
  ellipse(0, -14, 12, 8);
  ellipse(0, 14, 12, 8);

  pop();
}

// PAPEL PICADO DEL FONDO
function papelFondo(x, y, r, g, b) {
  push();

  translate(x, y - 24);

  // Movimiento independiente
  rotate(
    (mouseX - width / 2) / width * 35 +
    sin(frameCount * 2.5 + x) * 10
  );

  // Tamaño menor para generar profundidad
  scale(0.80);

  stroke(118, 85, 63);
  strokeWeight(2);

  line(0, 0, 0, 24);
  translate(0, 24);

  stroke(r, g, b);
  strokeWeight(2);
  fill(r, g, b);

  rect(0, 0, 63, 48);

  // Decoraciones
  noStroke();
  fill(231, 215, 193);

  ellipse(0, 0, 10, 10);
  ellipse(-17, 0, 8, 13);
  ellipse(17, 0, 8, 13);
  ellipse(0, -14, 12, 8);
  ellipse(0, 14, 12, 8);

  pop();
}

// ALTAR DE TRES NIVELES
function altar() {
  stroke(119, 109, 83);
  strokeWeight(4);

  // Nivel inferior
  fill(132, 146, 115);
  rect(-155, 238, 733, 148);

  // Nivel intermedio
  fill(145, 159, 124);
  rect(-155, 120, 600, 115);

  // Nivel superior
  fill(153, 166, 131);
  rect(-155, 11, 444, 112);

  // Manteles blancos
  stroke(212, 198, 169);
  strokeWeight(2);
  fill(250, 243, 229);

  rect(-155, 163, 726, 22);
  rect(-155, 62, 592, 18);
  rect(-155, -49, 439, 17);

  // Mantel frontal sin bordados
  fill(245, 236, 215);

  rect(-155, 279, 720, 55);
}

// CRUZ
function cruz() {
  push();

  translate(-155, -112);

  stroke(23, 93, 43);
  strokeWeight(3);
  fill(37, 118, 58);

  rect(0, 0, 22, 91);
  rect(0, -17, 68, 21);

  pop();
}

// RETRATOS
function fotos() {
  retrato(-260, -104);
  retrato(-50, -104);
}

// FOTOGRAFÍAS EN BLANCO Y NEGRO
function retrato(x, y) {
  push();

  translate(x, y);

  // Marco de madera
  stroke(174, 126, 72);
  strokeWeight(5);
  fill(96, 63, 45);

  rect(0, 0, 88, 105);

  // Fondo de fotografía
  stroke(85, 81, 76);
  strokeWeight(2);
  fill(198, 198, 192);

  rect(0, 0, 70, 87);

  // Cabello
  fill(64, 64, 66);
  ellipse(0, -12, 43, 47);

  // Rostro
  fill(225, 222, 213);
  ellipse(0, -7, 34, 40);

  // Ojos
  fill(60, 60, 60);
  ellipse(-8, -10, 4, 4);
  ellipse(8, -10, 4, 4);

  // Vestimenta
  fill(80, 79, 79);
  ellipse(0, 35, 59, 42);

  pop();
}

// OFRENDAS ORGANIZADAS POR NIVELES
function ofrendas() {
  // SEGUNDO NIVEL: PIB Y JÍCARAS
  jicara(-355, 48); // Jícara izquierda
  pib(-272, 47, 0.45); // Pib izquierdo
  pib(-155, 46, 0.82); // Pib principal
  pib(-38, 47, 0.45); // Pib derecho
  jicara(45, 48); // Jícara derecha

  // TERCER NIVEL: FRUTAS Y DULCES
  frutas(-355, 149); // Naranjas y mandarinas
  dulcesRegion(-255, 149); // Dulces regionales
  platano(-155, 149); // Plátanos en el centro
  panMuerto(-65, 149, 0.8); // Pan de muerto
  jicama(20, 149); // Jícama
  calabaza(90, 143, 0.70); // Calabaza
}

//  PIB
function pib(x, y, s) {
  push();

  translate(x, y);
  scale(s);

  stroke(95, 52, 32);
  strokeWeight(3);

  fill(109, 64, 42); // Plato
  ellipse(0, 5, 160, 36);

  fill(163, 91, 41); // Base del pib
  ellipse(0, -14, 141, 52);

  // Superficie
  fill(219, 143, 65);
  ellipse(0, -22, 125, 37);

  fill(234, 172, 92);
  ellipse(0, -27, 103, 23);

  // Marcas de horneado
  stroke(139, 76, 34);
  strokeWeight(2);
  fill(165, 91, 42);
  fill(125, 69, 35);

  pop();
}

// JÍCARAS
function jicara(x, y) {
  push();

  translate(x, y);

  stroke(95, 54, 34);
  strokeWeight(3);
  fill(136, 81, 47);

  ellipse(0, 0, 62, 27);

  fill(235, 200, 190); // Bebida
  ellipse(0, -7, 55, 13);

  pop();
}

// FRUTAS DE TEMPORADA
function frutas(x, y) {
  push();

  translate(x, y);

  // Plato
  stroke(98, 63, 40);
  strokeWeight(2);
  fill(130, 75, 45);

  ellipse(0, 0, 105, 22);

  // Naranjas
  fill(242, 151, 34);
  ellipse(-30, -13, 27, 27);
  ellipse(-5, -15, 26, 26);

  // Mandarina
  fill(238, 180, 52);
  ellipse(18, -13, 25, 25);

  // Mandarina verde
  fill(132, 161, 65);
  ellipse(38, -12, 22, 24);

  // Hojas
  stroke(52, 115, 53);
  strokeWeight(2);
  fill(71, 138, 63);

  ellipse(-30, -29, 12, 7);
  ellipse(18, -28, 12, 7);

  pop();
}

// DULCES TRADICIONALES DE LA REGIÓN
function dulcesRegion(x, y) {
  push();

  translate(x, y);

  // Plato
  stroke(100, 65, 42);
  strokeWeight(2);
  fill(132, 81, 47);

  ellipse(0, 0, 70, 18);

  // Dulce de calabaza
  fill(225, 142, 48);
  stroke(177, 104, 39);

  rect(-19, -10, 17, 16);

  // Dulce de camote
  fill(159, 91, 64);
  stroke(119, 71, 49);

  ellipse(2, -11, 18, 16);

  // Dulce de coco
  fill(243, 227, 198);
  stroke(187, 163, 133);

  ellipse(22, -12, 17, 17);

  pop();
}

// PLÁTANOS
function platano(x, y) {
  push();

  translate(x, y);

  // Plato
  stroke(113, 74, 42);
  strokeWeight(2);
  fill(145, 91, 49);

  ellipse(0, 0, 75, 14);

  // Plátanos
  stroke(168, 123, 36);
  strokeWeight(2);

  // Primer plátano
  fill(244, 204, 75);
  arc(-13, -20, 72, 38, 5, 170);

  // Segundo plátano
  fill(235, 189, 54);
  arc(10, -18, 72, 38, 5, 170);

  // Tercer plátano
  fill(248, 216, 95);
  arc(0, -26, 69, 37, 5, 170);

  pop();
}

// PAN DE MUERTO
function panMuerto(x, y, s) {
  push();

  translate(x, y);
  scale(s);

  // Plato
  stroke(100, 65, 42);
  strokeWeight(3);
  fill(127, 76, 46);

  ellipse(0, 8, 115, 27);

  // Pan
  stroke(169, 101, 45);
  strokeWeight(2);
  fill(224, 157, 76);

  ellipse(0, -7, 99, 45);

  // Decoraciones de masa
  fill(241, 192, 114);

  ellipse(-23, -12, 40, 11);
  ellipse(23, -12, 40, 11);
  ellipse(0, -21, 13, 13);

  pop();
}

// JÍCAMA
function jicama(x, y) {
  push();

  translate(x, y);

  stroke(139, 108, 75);
  strokeWeight(3);
  fill(193, 159, 116);

  ellipse(0, -15, 50, 43);

  fill(214, 188, 150);
  ellipse(-8, -20, 20, 16);

  stroke(88, 121, 66);
  strokeWeight(3);

  line(0, -37, 0, -47);

  pop();
}

// CALABAZA
function calabaza(x, y, s) {
  push();

  translate(x, y);
  scale(s);

  stroke(155, 86, 34);
  strokeWeight(3);
  fill(227, 131, 40);

  ellipse(-26, 0, 47, 62);
  ellipse(26, 0, 47, 62);
  ellipse(0, 0, 65, 70);

  fill(238, 149, 48);
  ellipse(0, 0, 37, 67);

  stroke(73, 112, 54);
  strokeWeight(5);

  line(0, -33, 3, -51);

  pop();
}

// FLORES SOBRE LOS NIVELES
function flores() {
  // Nivel superior
  ramo(-354, -80, 0.54);
  ramo(44, -80, 0.54);

  // Nivel intermedio
  ramo(-420, 28, 0.59);
  ramo(110, 28, 0.59);

  // Nivel de frutas
  ramo(-485, 129, 0.59);

  // Florero derecho
  ramo(185, 129, 0.59);
}

// RAMOS DE FLORES
function ramo(x, y, s) {
  push();

  translate(x, y);
  scale(s);

  // Florero
  stroke(88, 62, 50);
  strokeWeight(3);
  fill(153, 97, 72);

  rect(0, 23, 58, 69);
  ellipse(0, -12, 75, 18);

  // Movimiento de las flores
  push();

  translate(0, -12);

  rotate(
    sin(frameCount * 2.5 + x) * 12
  );

  // Flores
  flor(-42, -70, 0.86);
  flor(0, -95, 0.96);
  flor(43, -70, 0.86);

  flor(-24, -41, 0.86);
  flor(26, -41, 0.86);
  flor(0, -50, 0.88);

  pop();
  pop();
}

// FLOR INDIVIDUAL
function flor(x, y, s) {
  push();

  translate(x, y);

  rotate(
    sin(frameCount * 3 + x) * 14
  );

  scale(
    s * (1 + sin(frameCount * 3 + x) * 0.06)
  );

  stroke(209, 100, 22);
  strokeWeight(2);
  fill(248, 153, 37);

  // Pétalos
  ellipse(0, -18, 26, 38);
  ellipse(0, 18, 26, 38);

  ellipse(-18, 0, 38, 26);
  ellipse(18, 0, 38, 26);

  ellipse(-14, -14, 28, 28);
  ellipse(14, -14, 28, 28);

  ellipse(-14, 14, 28, 28);
  ellipse(14, 14, 28, 28);

  // Centro
  fill(172, 82, 22);
  ellipse(0, 0, 19, 19);

  fill(255, 198, 76);
  ellipse(0, 0, 9, 9);

  pop();
}

// SIETE VELADORAS NEGRAS EN EL SUELO
function veladoras() {
  // Tres veladoras a la izquierda
  vela(-335, 344, 0.85, v1);
  vela(-275, 344, 0.85, v2);
  vela(-215, 344, 0.85, v3);

  // Veladora central
  vela(-155, 344, 0.85, v7);

  // Tres veladoras a la derecha
  vela(-95, 344, 0.85, v4);
  vela(-35, 344, 0.85, v5);
  vela(25, 344, 0.85, v6);
}

// DIBUJAR VELADORA NEGRA
function vela(x, y, s, prendida) {
  push();

  translate(x, y);
  scale(s);

  // Cuerpo negro
  stroke(35, 30, 35);
  strokeWeight(2);
  fill(43, 40, 44);

  rect(0, 0, 28, 53);

  // Parte superior
  fill(65, 60, 63);
  ellipse(0, -26, 28, 7);

  // Mecha
  stroke(95, 76, 55);
  strokeWeight(2);
  line(0, -27, 0, -34);

  // Llama
  if (prendida == true) {
    push();

    translate(0, -47);

    // Parpadeo
    scale(
      1 + sin(frameCount * 8 + x) * 0.13
    );

    // Resplandor
    stroke(255, 175, 45);
    fill(255, 157, 40, 70);

    ellipse(0, 0, 30, 45);

    // Llama naranja
    fill(252, 157, 51);
    ellipse(0, 0, 20, 32);

    // Centro amarillo
    fill(255, 231, 138);
    ellipse(0, 3, 10, 18);

    pop();
  }

  pop();
}

// COMPONENTES TECNOLÓGICOS Y COPALES
function tecnologia() {
  servidor(305, 122); // Servidor en la pared
  pc(-365, 230); // Computadora
  cpu(-180, 235); // CPU
  ram(-1, 240); // RAM
  copal(-485, 365); // Copal izquierda
  copal(170, 365); // Copal derecha
}

// SERVIDOR GRANDE EN LA PARED
function servidor(x, y) {
  push();

  translate(x, y);
  scale(1.28);

  // Sombra
  noStroke();
  fill(181, 161, 140);

  rect(9, 8, 80, 279);

  // Gabinete
  stroke(38, 41, 45);
  strokeWeight(4);
  fill(65, 69, 75);

  rect(0, 0, 72, 265);

  // Interior
  stroke(100, 105, 112);
  strokeWeight(2);
  fill(48, 52, 58);

  rect(0, 0, 60, 248);

  // Módulos del servidor
  for (let i = 0; i < 7; i++) {
    let py = -108 + i * 35;

    stroke(32, 36, 40);
    strokeWeight(2);
    fill(29, 33, 38);

    rect(0, py, 52, 27);

    // Indicadores verdes
    noStroke();
    fill(75, 225, 121);

    ellipse(-18, py, 7, 7);

    // Luces intermitentes
    if ((frameCount + i * 12) % 40 < 20) {
      fill(255, 208, 65);
    } else {
      fill(75, 75, 75);
    }

    ellipse(18, py, 7, 7);
  }

  pop();
}

// PC CON CÓDIGO BINARIO
function pc(x, y) {
  push();

  translate(x, y);
  scale(0.95);

  // Marco del monitor
  stroke(69, 137, 149);
  strokeWeight(3);
  fill(48, 70, 78);

  rect(0, 0, 115, 82);

  // Pantalla
  fill(24, 42, 49);
  rect(0, -5, 98, 62);

  // Código binario
  noStroke();
  fill(114, 233, 190);

  textAlign(CENTER, CENTER);
  textSize(13);

  text("00101101", 0, -19);
  text("01010011", 0, -2);
  text("00101101", 0, 15);

  // Base del monitor
  stroke(135, 142, 144);
  strokeWeight(3);
  fill(135, 142, 144);

  rect(0, 48, 12, 16);
  rect(0, 57, 70, 7);

  pop();
}

// CPU
function cpu(x, y) {
  push();

  translate(x, y);

  // Efecto de pulsación
  scale(
    0.95 * (1 + sin(frameCount * 3) * 0.035)
  );

  stroke(45, 135, 104);
  strokeWeight(4);
  fill(81, 179, 146);

  rect(0, 0, 67, 67);

  // Centro
  fill(237, 240, 231);
  rect(0, 0, 46, 46);

  noStroke();
  fill(37, 49, 49);

  textAlign(CENTER, CENTER);
  textSize(16);
  text("CPU", 0, 1);

  // Conectores
  stroke(206, 165, 68);
  strokeWeight(4);

  line(-20, -33, -20, -44);
  line(0, -33, 0, -44);
  line(20, -33, 20, -44);

  line(-20, 33, -20, 44);
  line(0, 33, 0, 44);
  line(20, 33, 20, 44);

  pop();
}

// RAM
function ram(x, y) {
  push();

  translate(x, y);
  scale(1.00);

  // Tarjeta
  stroke(43, 105, 60);
  strokeWeight(3);
  fill(79, 162, 85);

  rect(0, 0, 138, 54);

  // Chips de memoria
  fill(69, 64, 78);

  rect(-43, 0, 24, 34);
  rect(-14, 0, 24, 34);
  rect(15, 0, 24, 34);
  rect(44, 0, 24, 34);

  // Contactos dorados
  stroke(229, 187, 88);
  strokeWeight(3);

  for (let i = -60; i <= 60; i += 12) {
    line(i, 27, i, 34);
  }

  pop();
}

// COPAL CON HUMO
function copal(x, y) {
  push();

  translate(x, y);

  // Recipiente
  stroke(105, 62, 43);
  strokeWeight(3);
  fill(151, 86, 57);

  rect(0, -10, 16, 28);
  ellipse(0, -25, 65, 23);

  // Movimiento según la posición del cursor
  let dx = (mouseX - width / 2) / width * 25;

  // Primera nube
  noStroke();
  fill(110, 108, 108, 230);

  ellipse(
    dx * 0.2 + sin(frameCount * 2) * 4,
    -50,
    19,
    28
  );

  // Segunda nube
  fill(125, 122, 122, 215);

  ellipse(
    dx * 0.5 + sin(frameCount * 2 + 30) * 6,
    -80,
    24,
    35
  );

  // Tercera nube
  fill(140, 137, 137, 190);

  ellipse(
    dx + sin(frameCount * 2 + 60) * 8,
    -112,
    29,
    40
  );

  // Cuarta nube
  fill(155, 152, 152, 155);

  ellipse(
    dx * 1.2 + sin(frameCount * 2 + 90) * 9,
    -146,
    33,
    45
  );

  pop();
}

// CATRÍN YUCATECO CON AMBAS MANOS
function catrin() {
  push();

  translate(455, 75);

  // Pantalón
  stroke(86, 92, 112);
  strokeWeight(3);
  fill(151, 163, 176);

  rect(-30, 225, 46, 115);
  rect(30, 225, 46, 115);

  // Zapatos
  fill(53, 48, 51);

  rect(-30, 289, 59, 19);
  rect(30, 289, 59, 19);

  // Camisa blanca
  stroke(183, 179, 164);
  strokeWeight(3);
  fill(248, 244, 231);

  rect(0, 92, 129, 186);

  // Cuello
  fill(232, 221, 204);
  rect(0, -16, 38, 45);

  // Pañuelo rojo
  fill(190, 54, 56);
  stroke(165, 43, 43);

  ellipse(0, 13, 63, 23);
  rect(11, 44, 19, 59);

  // Brazo izquierdo
  fill(246, 242, 229);
  stroke(189, 184, 173);

  rect(-79, 95, 35, 124);

  // Mano izquierda
  push();

  translate(-79, 163);

  stroke(70, 60, 63);
  strokeWeight(2);
  fill(75, 64, 68);

  ellipse(0, 0, 28, 34);
  ellipse(-10, 12, 8, 22);
  ellipse(0, 14, 8, 25);
  ellipse(10, 12, 8, 22);

  pop();

  // Cabeza
  push();

  translate(0, -95);
  rotate(sin(frameCount * 2) * 8);

  // Rostro de calavera
  fill(245, 233, 213);
  stroke(94, 79, 65);
  strokeWeight(3);

  ellipse(0, 0, 104, 120);

  // Ojos
  fill(49, 43, 47);

  ellipse(-23, -10, 29, 37);
  ellipse(23, -10, 29, 37);

  // Nariz
  ellipse(0, 18, 14, 18);

  // Boca
  rect(0, 40, 57, 18);

  // Dientes
  fill(244, 237, 219);

  rect(-19, 40, 9, 14);
  rect(-6, 40, 9, 14);
  rect(7, 40, 9, 14);
  rect(20, 40, 9, 14);

  // Sombrero
  stroke(134, 113, 81);
  strokeWeight(3);
  fill(244, 231, 195);

  ellipse(0, -65, 153, 25);
  rect(0, -92, 100, 55);

  // Banda negra
  fill(44, 42, 44);
  rect(0, -75, 99, 13);

  pop();

  // Brazo derecho que saluda
  push();

  translate(65, 27);
  rotate(-37 + sin(frameCount * 3) * 18);

  stroke(187, 182, 170);
  strokeWeight(3);
  fill(248, 244, 231);

  rect(0, -51, 36, 109);

  // Mano derecha
  push();

  translate(0, -107);
  rotate(sin(frameCount * 4) * 13);

  stroke(70, 60, 63);
  strokeWeight(2);
  fill(75, 64, 68);

  ellipse(0, 0, 29, 41);
  ellipse(-10, -18, 8, 25);
  ellipse(0, -22, 8, 28);
  ellipse(10, -18, 8, 25);

  pop();
  pop();
  pop();
}

// INTERACTIVIDAD DE LAS SIETE VELADORAS
function mousePressed() {
  // Reproducir o pausar música al hacer clic dentro del lienzo
  if (
    mouseX >= 0 &&
    mouseX <= width &&
    mouseY >= 0 &&
    mouseY <= height
  ) {
    controlarMusica();
  }

  let s = min(width / 1200, height / 800);

  let x = (mouseX - width / 2) / s;
  let y = (mouseY - height / 2) / s;

  // Veladoras de la izquierda
  if (cerca(x, y, -335, 344, 0.85)) {
    v1 = !v1;

  } else if (cerca(x, y, -275, 344, 0.85)) {
    v2 = !v2;

  } else if (cerca(x, y, -215, 344, 0.85)) {
    v3 = !v3;

  // Veladora central
  } else if (cerca(x, y, -155, 344, 0.85)) {
    v7 = !v7;

  // Veladoras de la derecha
  } else if (cerca(x, y, -95, 344, 0.85)) {
    v4 = !v4;

  } else if (cerca(x, y, -35, 344, 0.85)) {
    v5 = !v5;

  } else if (cerca(x, y, 25, 344, 0.85)) {
    v6 = !v6;
  }
}

// DETECTAR CLIC SOBRE UNA VELADORA
function cerca(x, y, vx, vy, s) {
  return (
    x > vx - 24 * s &&
    x < vx + 24 * s &&
    y > vy - 82 * s &&
    y < vy + 29 * s
  );
}

// ADAPTABILIDAD A DIFERENTES PANTALLAS
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  // Mantener la imagen en la esquina superior derecha
  if (imagen) {
    imagen.position(windowWidth - 160, 10);
  }
}