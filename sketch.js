var rocaImage;
var foodImage;
var grapeImage;
var pacManImage;
var roca;
var myMaze;
var arrayRocasMapa = [];
var arrayComidaMapa = [];
var arrayGrapesMapa = [];
var myPacman;
var font;
var username = "Eduardo";
var song;
//Pacman resources: http://www.classicgaming.cc/classics/pac-man/
function preload() {
  rocaImage = loadImage("images/roca.bmp");
  foodImage = loadImage("images/food.png");
  grapeImage = loadImage("images/grape.png");
  pacManImage = loadImage("images/pac.png");
  song = loadSound("assets/pacman_chomp.wav");
//  font = loadFont('assets/SourceSansPro-Regular.otf');
}

function setup() {
  createCanvas(COLUMNS*IMAGE_SIZE, ROWS*IMAGE_SIZE +HEIGHT_TEXT);
  roca = new Roca(200, 300);
  myMaze = new Maze();

  for (var i = 0; i < myMaze.rows; i++)
    for (var j = 0; j < myMaze.columns; j++) {
      if (myMaze.mapa[i][j] == 0) {
        arrayRocasMapa.push(new Roca(j * IMAGE_SIZE, i * IMAGE_SIZE));
      } else if (myMaze.mapa[i][j] == 1) {
        arrayComidaMapa.push(new Food(j * IMAGE_SIZE, i * IMAGE_SIZE));
      } else if (myMaze.mapa[i][j] == 2) {
        arrayGrapesMapa.push(new Grapes(j * IMAGE_SIZE, i * IMAGE_SIZE));
      }
     else if (myMaze.mapa[i][j] == 3) {
        myPacman = new Pacman(j * IMAGE_SIZE, i * IMAGE_SIZE);
      }
    }
  // Set text characteristics
  textFont("monospace"); //https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#Web_safe_fonts
  textSize(14);
  textAlign(LEFT, CENTER); // 	Constant:horizontal alignment, vertical aligntment either LEFT, CENTER, or RIGHT
  textStyle(NORMAL); //Italic o Bold
}

function draw() {
  background(0);
  //  roca.show();
  //with i i count the rows, with j the columns
  for (var i = 0; i < arrayRocasMapa.length; i++) {
    console.log("Imprimo una roca:" + i);
    arrayRocasMapa[i].show();
  }
  i=0;
  for ( i = 0; i < arrayComidaMapa.length; i++) {
    console.log("Imprimo una bola de comida:" + i);
    arrayComidaMapa[i].show();
  }
  i=0;
  for (i = 0; i < arrayGrapesMapa.length; i++) {
    console.log("Imprimo una uva de poder:" + i);
    arrayGrapesMapa[i].show();
  }

  myPacman.show();

  for ( i = 0; i < arrayComidaMapa.length; i++) {
    console.log("Compruebo si hay comida en la :" + i);
    if ( myPacman.eatFood( arrayComidaMapa[i]) )
      {
        arrayComidaMapa.splice(i,1);
      }
  }

  for (i = 0; i < arrayGrapesMapa.length; i++) {
    if ( myPacman.eatGrapes( arrayGrapesMapa[i]) )
      {
        arrayGrapesMapa.splice(i,1);
      }
  }

  for (i = 0; i < arrayRocasMapa.length; i++) {
    if ( myPacman.eatRock( arrayRocasMapa[i]) )
      {
        //arrayRocaMapa.splice(i,1);
      }
  }


  drawtext();
//  addSound();
if( arrayGrapesMapa.length == 0 && arrayComidaMapa.length == 0 )
{

  alert("Victory !!!");
  remove();
}

if( myPacman.lives == 0 )
{

  alert("Defeat !!!");
  remove();
}
}

function addSound() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean

  } else {
    song.play(); // playback will resume from the pause position

  }
}

function drawtext()
{
//  textSize(18);
  var textCoordY=ROWS*IMAGE_SIZE+HEIGHT_TEXT/2;
  var txtUser = "User :" + username;
  var txtScore = "Score :" + myPacman.score;
  var txtLives = "Lives :" + myPacman.lives;

  fill('white');
  text(txtUser, 30, textCoordY);
  var cWidthUser = textWidth(txtUser) + 10 + 30;

  fill('blue');
  text(txtScore, cWidthUser, textCoordY);

  cWidthScore = textWidth(txtScore) + 10 ;
  fill('red');
  text(txtLives, cWidthUser+cWidthScore, textCoordY);
// /*
//   textSize(24);
//   text('User', 30, ROWS*32+HEIGHT_TEXT/2);
//   fill(0, 102, 153);
//   text('Score', 100, ROWS*32+HEIGHT_TEXT/2);
//   fill(0, 102, 153, 51);
//   fill(0);
//   text('Lives', 250, ROWS*32+HEIGHT_TEXT/2);
}

function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.pause();
    background(255,0,0);
  } else {
    song.play(); // playback will resume from the pause position
    background(0,255,0);
  }
}

function keyPressed() {
//  console.log("Algo pasa nenn");
    if (key === 'd' || keyCode === RIGHT_ARROW) //Letra d
    {
      console.log("Estoy dentro de mover derecha");
      myPacman.moveRight();
      //console.log("Estoy dentro de mover derecha");
    }
    if (keyCode === 65 || keyCode === LEFT_ARROW) // Letra a
    {
      console.log("Estoy dentro de mover izquierda");
      myPacman.moveLeft();
      //console.log("Estoy dentro de mover derecha");
    }
    if (keyCode === 87 || keyCode === UP_ARROW) // Letra W
    {
      console.log("Estoy dentro de mover arriba");
      myPacman.moveUp();
      //console.log("Estoy dentro de mover derecha");
    }
    if (keyCode === 88 || keyCode === DOWN_ARROW) // Letra X
    {
      console.log("Estoy dentro de mover abajo");
      myPacman.moveDown();
      //console.log("Estoy dentro de mover derecha");
    }
  }
