var rocaImage;

var myPacman;
var font;
var username = "Eduardo";
var song;
//Pacman resources: http://www.classicgaming.cc/classics/pac-man/
function preload() {
  rocaImage = loadImage("images/roca.bmp");
  song = loadSound("assets/pacman_chomp.wav");
//  font = loadFont('assets/SourceSansPro-Regular.otf');
}

function setup() {
  createCanvas(COLUMNS*IMAGE_SIZE, ROWS*IMAGE_SIZE +HEIGHT_TEXT);

  myMaze = new Maze();

  for (var i = 0; i < myMaze.rows; i++)
    for (var j = 0; j < myMaze.columns; j++) {
      if (myMaze.mapa[i][j] == 0) {
       
        
  // Set text characteristics
  textFont
  textSize
  textAlign
  textStyle
}

function draw() {
  background(0);
  //  roca.show();
  //with i i count the rows, with j the columns
  for (var i = 0; i < arrayRocasMapa.length; i++) {
    console.log("Imprimo una roca:" + i);
    arrayRocasMapa[i].show();
  }
  

  drawtext();
//  addSound();
  comprovar_victoria
  comprovar_derrota

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

}


function keyPressed() {
//  console.log("Algo pasa nenn");
    if (key === 'd' || keyCode === RIGHT_ARROW) //Letra d
    {
      console.log("Estoy dentro de mover derecha");
      myPacman.moveRight();
      //console.log("Estoy dentro de mover derecha");
    }
    
  //Altres moviments
  }
