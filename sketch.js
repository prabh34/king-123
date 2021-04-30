const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rectangle;
var box;
var ball;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rectangle = new Rectangle(600,400,125,125);
    box=new Box(300,470,80,50);
    ball=new Ball(700,370,20,10);

    ball1=new Ball(250,470);
   ball2=new Ball(270,470);
   ball3=new Ball(390,470);
   ball4=new Ball(400,470);
   ball5=new Ball(410,470);
   ball6=new Ball(280,470);


  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    //text(mouseX+","+mouseY,mouseX,mouseY);


    plane.display();
    hammer.display();
    rectangle.display();
    box.display();
    ball.display();
    ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();

    
 
}