const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground;

var particles = [];
var plinks = [];
var divisions = [];
var cols = 16;
var rows = 7;
var divisionCols=8;

function setup() {
  var canvas = createCanvas(600, 700);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(0,570,1200,10);
   var spacing = width / cols;

  for (var j = 0; j < rows; j++) {
    for (var i = 2; i < cols - 2; i++) {
      var x = i * spacing;
      if (j % 2 == 0) {
        x += spacing / 2;
        if(i == 2) x -= 3;
        if(i == cols - 3) x += 3;
      }

      var y = 2 * spacing + j * spacing
      var p = new Plink(x, y, 8);
      plinks.push(p);
    }
  }

  spacing = spacing + 61;
  for (var j = 0; j < 1; j++) {
    for (var i = 0; i < divisionCols ; i++) {
      var x = i * spacing ;
      var y = 2 * spacing + j * spacing +290;
      var d = new Division(x, y, 20, 155);
      divisions.push(d);
    }
  }
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);

  ground.display();
  
  for (var i = 0; i < plinks.length; i++) {
    plinks[i].display();
  }

  for (var k = 0; k < divisions.length; k+=1){
    divisions[k].display();
  }

  for (var y = 0; y < particles.length; y+=1){
    particles[y].display();
  }

  if(frameCount % 10 == 0 ){
    particles.push(new Ball(300,20, 10));
  }

  drawSprites();
}