const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//creating variables
var engine, world;
var canvas;
var player,playerBase;
var computerPlayer,computerBase;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Creating Player Base and Computer Base Object

   playerBase = new PlayerBase(300,random(450,height-300),180,150);
   player = new Player(285,playerBase.body.position.y-153,50,180);

   computerBase = new ComputerBase(600,random(450,height-300),180,150);
   computerPlayer = new ComputerPlayer(585,playerBase.body.position.y-153,50,180);


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base
   
   playerBase.display();
   computerBase.display();

   //display Player and computerplayer
   player.display();
   computerPlayer.display();


}
