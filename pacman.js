function Pacman( x,y)
{
  this.x=x;
  this.y=y;
  /* La imagen pacman contiene una animación con diferentes frames ( 7 frames diferentes
    en cada dirección. Cambiando los frames daremos sensacion de movimiento)
    Iniciamos el pacman en la posicion 0 del frame
    */

  this.frame =1;

  // Las direcciones de Pacman seran : ( es arbitrario y hemos elegido
  //estas por las imagen= la fila cero son el pacman hacia derecha
  // fila 1 son pacman hacia abajo..y asi... ver pac.png)
  // 0 -> pacman va hacia derecha
  // 1 -> pacman va hacia abajo
  // 2 -> pacman va hacia izuierda
  // 3 -> pacman va hacia arriba

  this.direction=2;
  this.score =0;
  this.lives = 3;

  this.show = function(){
//
// image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight])
//
// img: la imagen a mostrar
//
// dx 	Número: la coordenada x en el lienzo de destino donde se ubicará la esquina superior izquierda de la imagen
// dy 	Número: la coordenada y en el lienzo de destino donde se ubicará la esquina superior izquierda de la imagen
// dWidth 	Número: ancho de la imagen a dibujar en el lienzo de destino
// dHeight 	Número: altura de la imagen a dibujar en el lienzo de destino
// sx 	Número: la coordenada x de la esquina superior izquierda del subrectángulo de la imagen original a dibujar en el lienzo de destino
// sy 	Número: la coordenada y de la esquina superior izquierda del subrectángulo de la imagen original a dibujar en el lienzo de destino
// sWidth 	Número: el ancho del subrectángulo de la imagen original a dibujar en el lienzo de destino
// sHeight 	Número: la altura del subrectángulo de la imagen original a dibujar en el lienzo de destino
    //this.frame++;
  //  image(pacManImage, 32*this.frame++, 32*this.direction, 32, 32, this.x, this.y, 32,32);
    image(pacManImage, this.x,this.y, IMAGE_SIZE, IMAGE_SIZE, IMAGE_SIZE*this.frame, IMAGE_SIZE*this.direction, IMAGE_SIZE,IMAGE_SIZE);
  console.log("Frame actual pacman:" + this.frame);
  console.log("Direccion actual pacman:" + this.direction);
  console.log("Posicion X pacman:" + this.x);
  console.log("Posicion Y pacman:" + this.y);
    //El numero de frames es major que 5 torno a cero ( es podria fer modul 5 amb la resta i
    //continuar sumant)
    this.frame++;
    if ( this.frame == 5) this.frame =0;
    // noLoop();
  };

  this.moveRight = function(){

  //Update the direction
    this.direction = 0;
  //Update the x Position
    this.x = this.x + IMAGE_SIZE;
   
  };


  this.eatFood = function( comida){

  var distanceFoodPacman = dist( this.x, this.y, comida.x, comida.y);
    if ( distanceFoodPacman < 16)
        {
          this.score++; //Update the scores
          return true;
          //this.score++; //Update the scores
        }
    else //Distance is largerthan
    {
      return false;
    }

  };

  this.eatGrapes = function( grape){

  var distanceGrapePacman = dist( this.x, this.y, grape.x, grape.y);
    

  };

  this.eatRock = function( rock){

  var distanceRockPacman = dist( this.x, this.y, rock.coordX, rock.coordY);
   

  };
}
