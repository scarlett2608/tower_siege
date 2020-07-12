//constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

//variables
var stand1,stand2,ground;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12;
var block13,block14,block15,block16,block17,block18;
var launcher,polygon;
var gameState = 'onSling';

function setup() {
  createCanvas(1600,800);

  engine = Engine.create();
  world = engine.world;

  //stands
  stand1 = new Ground(790,605,300,20,{isStatic:true,friction:3.0});
  stand2 = new Ground(1290,505,300,20,{isStatic:true,friction:3.0});
  ground = new Ground(width/2,height,width,20);


  //pyramid1
    //bottom
  block1 = new Block(730,590,30,40,'purple');
  block2 = new Block(760,590,30,40,'darkcyan');
  block3 = new Block(790,590,30,40,'gold');
  block4 = new Block(820,590,30,40,'purple');
  block5 = new Block(850,590,30,40,'darkcyan');
    //middle
  block6 = new Block(760,550,30,40,'indianred');
  block7 = new Block(790,550,30,40,'purple');
  block8 = new Block(820,550,30,40,'gold');
    //top
  block9 = new Block(790,510,30,40,'indianred');

  //pyramid2
    //bottom
  block10 = new Block(1230,490,30,40,'gold');
  block11 = new Block(1260,490,30,40,'darkcyan');
  block12 = new Block(1290,490,30,40,'gold');
  block13 = new Block(1320,490,30,40,'lightseagreen');
  block14 = new Block(1350,490,30,40,'darkcyan');
    //middle
  block15 = new Block(1260,450,30,40,'darkslateblue');
  block16 = new Block(1290,450,30,40,'indianred');
  block17 = new Block(1320,450,30,40,'darkslateblue');
    //top
  block18 = new Block(1290,410,30,40,'darkcyan');

  //polygon
  polygon = new paper(50,200,20);

  //launcher
  launcher = new Launcher(polygon.body,{x:350,y:450});
  


  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

  Render.run(render);
  Engine.run(engine);

}


function draw() {
  background('darkslategray');  
  
  Engine.update(engine);

  //display
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
  stand1.display();
  stand2.display();
  launcher.display();
  polygon.display();
  ground.display();

}

function mouseDragged(){

  if (gameState !== 'launched') {
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY}); 
  }
 

}

function mouseReleased() {
  
  launcher.fly();
  gameState = 'launched';

}

function keyPressed(){

  if (keyCode == 32) {
    launcher.attach(polygon.body);
    gameState = 'onSling'; 
  }

}