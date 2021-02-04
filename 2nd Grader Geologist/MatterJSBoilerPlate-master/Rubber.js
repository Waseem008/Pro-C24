class Rubber{
    constructor(x,y,radius){
var options = {
    'restitution':0.3,
    'friction':5,
    'density':1
}
this.body = Bodies.circle(x,y,radius,options);
this.radius = radius; 
}
display(){

    
}
}