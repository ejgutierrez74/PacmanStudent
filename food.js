function Food( x,y)
{
  this.x=x;
  this.y=y;

  this.show = function(){
    //Nota: first in sketch.js preload we have to implement: img = loadImage('assets/laDefense.jpg');
    // Top-left corner of the img is at (x, y)
    // Width and height are the img's original width and heigh
    image(foodImage,this.x,this.y);
    // Top-left corner of the img is at (10, 10)
  // Width and height are 50 x 50
  //image(img, 10, 10, 50, 50);
  };
}
