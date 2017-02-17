function Ball (x, y) {

this.position = {x:x, y:y}

this.draw = function () {
  this.position.x ++; //same as adding +1 to "this.position.x"
  this.position.y++;
  ellipse (this.position.x, this.position.y, 10, 10);
}

}