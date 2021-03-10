const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var polygon;

var polygonimg;

var slingShot;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;

var block17,block18,block19,block20,block21,block22,block23,block24,block25,block26,block27,block28,block29,block30,block31,block32;

var ground, ground2, ground3;

function preload()
{
	polygonimg = loadImage("polygon.png");


}

function setup() {
	createCanvas(1600, 700);
    engine = Engine.create()
    world = engine.world;


	//Create the Bodies Here.
    polygon = Bodies.circle(250,200,20);
    World.add(world,polygon)



	ground = new Ground(800,height,1600,20);

    ground2 = new Ground(1190,330,280,10);
    
    ground3 = new Ground(700,500,280,10);

    //level one
    block1= new Box(1100,275,30,40);
    block2= new Box(1130,275,30,40);
    block3= new Box(1160,275,30,40);
    block4= new Box(1190,275,30,40);
    block5= new Box(1220,275,30,40);
    block6= new Box(1250,275,30,40);
    block7= new Box(1280,275,30,40);
    //level two
    block8= new Box(1130,235,30,40);
    block9= new Box(1160,235,30,40);
	block10= new Box(1190,235,30,40);
	block11= new Box(1220,235,30,40);
	block12= new Box(1250,235,30,40);
    //level three
    block13= new Box(1160,195,30,40);
    block14= new Box(1190,195,30,40);
    block15= new Box(1220,195,30,40);
    //top
	block16= new Box(1190,155,30,40);

    //Pyramid Two
    //level one
    block17= new Box(610,460,30,40);
    block18= new Box(640,460,30,40);
    block19= new Box(670,460,30,40);
    block20= new Box(700,460,30,40);
    block21= new Box(730,460,30,40);
    block22= new Box(760,460,30,40);
    block23= new Box(790,460,30,40);
    //level two
    block24= new Box(640,420,30,40);
    block25= new Box(670,420,30,40);
    block26= new Box(700,420,30,40);
    block27= new Box(730,420,30,40);
    block28= new Box(760,420,30,40);
    //level three
    block29= new Box(670,380,30,40);
    block30= new Box(700,380,30,40);
    block31= new Box(730,380,30,40);
    //top
    block32= new Box(700,340,30,40);

    


    slingShot= new SlingShot(this.polygon,{x:250,y:200});



	Engine.run(engine);
  
}


function draw() {
  background(0);

    //polygon.display();
    image(polygonimg ,polygon.position.x,polygon.position.y,40,40);
  ground.display();

ground2.display();

ground3.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
block26.display();
block27.display();
block28.display();
block29.display();
block30.display();
block31.display();
block32.display();
 

slingShot.display();


}

function mouseDragged(){ Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY}); }

function mouseReleased (){
    slingShot.fly();
    //flyingBird.play();
     gameState="launched";
    
}
function keyPressed(){
    if(keyCode === 32   && gameState==="launched"){
        Matter.Body.setPosition(polygon.body,{x:200,y:50})
        slingShot.attach(polygon.body);
        gameState="onSling";
    }
}