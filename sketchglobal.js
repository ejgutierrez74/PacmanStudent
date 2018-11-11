var s = function( sketch ) {

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

sketch.preload = function() {
  rocaImage = sketch.loadImage("images/roca.bmp");
  foodImage = sketch.loadImage("images/food.png");
  grapeImage = sketch.loadImage("images/grape.png");
  pacManImage = sketch.loadImage("images/pac.png");
};

sketch.setup = function() {
  sketch.createCanvas(600, 600);
  roca = new Roca(200, 300);
  myMaze = new Maze();

  for (var i = 0; i < myMaze.rows; i++)
    for (var j = 0; j < myMaze.columns; j++) {
      if (myMaze.mapa[i][j] == 0) {
        arrayRocasMapa.push(new Roca(j * 32, i * 32));
      } else if (myMaze.mapa[i][j] == 1) {
        arrayComidaMapa.push(new Food(j * 32, i * 32));
      } else if (myMaze.mapa[i][j] == 2) {
        arrayGrapesMapa.push(new Grapes(j * 32, i * 32));
      } else if (myMaze.mapa[i][j] == 3) {
        myPacman = new Pacman(j * 32, i * 32);
      }
    }
};

sketch.draw = function() {
  sketch.background(0);
  roca.show();

  //with i i count the rows, with j the columns
  for (var i = 0; i < arrayRocasMapa.length; i++) {
    console.log("Imprimo una roca:" + i);
    arrayRocasMapa[i].show();
  }
  i = 0;
  for (i = 0; i < arrayComidaMapa.length; i++) {
    console.log("Imprimo una bola de comida:" + i);
    arrayComidaMapa[i].show();
  }
  i = 0;
  for (i = 0; i < arrayGrapesMapa.length; i++) {
    console.log("Imprimo una uva de poder:" + i);
    arrayGrapesMapa[i].show();
  }

  myPacman.show();
};
}; //Declare s
