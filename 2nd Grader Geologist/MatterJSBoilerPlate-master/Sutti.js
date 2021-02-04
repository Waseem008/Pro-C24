class Sutti {
    constructor(x,y,width,height){
var options = {
'density':2,
'friction':1,
'restitution': 0.5
}
this.body = Bodies.rectangle(x, y, width, height, options);
this.width = width;
this.height = height;
World.add(world, this.body);
}
display(){

    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    
    push();
    rectMode(CENTER)
    translate(this.body.position.x, this.body.position.y);
    rect(this.width,this.height);
    fill ("pink");
    strokeWeight(4)
    pop()
}
 }