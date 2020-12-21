const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var block1;
var slingshot;
var score=0;
var bgImage;
var bg="bg.png"

function preload(){

  getBg();

  
}

function setup(){
    var canvas = createCanvas(1300,600);

    engine = Engine.create();
    world = engine.world;

    ground1=new Ground (650,590,1300,20)
    ground2=new Ground (500,400,300,10)
    ground3=new Ground (1000,270,250,10)

// levels:
    block1=new Box(395,235,30,40)
    block2=new Box(425,235,30,40)
    block3=new Box(455,235,30,40)
    block4=new Box(485,235,30,40)
    block5=new Box(515,235,30,40)
    block6=new Box(545,235,30,40)
    block7=new Box(575,235,30,40)
    block8=new Box(605,235,30,40)
    block10=new Box(425,195,30,40)
    block11=new Box(455,195,30,40)
    block12=new Box(485,195,30,40)
    block13=new Box(515,195,30,40)
    block14=new Box(545,195,30,40)
    block15=new Box(575,195,30,40)
    block16=new Box(455,165,30,40)
    block17=new Box(485,165,30,40)
    block18=new Box(515,165,30,40)
    block19=new Box(545,165,30,40)
    block20=new Box(500,125,30,40)

    // second pyramid levels:
    block21=new Box(915,170,30,40)
    block22=new Box(945,170,30,40)
    block23=new Box(975,170,30,40)
    block24=new Box(1005,170,30,40)
    block25=new Box(1035,170,30,40)
    block26=new Box(1065,170,30,40)

    block27=new Box(960,140,30,40)
    block28=new Box(990,140,30,40)
    block29=new Box(1020,140,30,40)

    

    block30=new Box(990,110,30,40)

   // var rope={
		//bodyA:polygon1.body,
		//pointB:{x:100,y:300},
		//stiffness:0.04,
		//length:20
	//}
  //c=Constraint.create(rope);
 // World.add(world,c)

 polygon = new Polygon(150,200,30,30);

 launcher = new Slingshot(polygon.body,{x:100, y:300})




}
function draw(){
  if (bgImage)
  background(bgImage);
  
        noStroke ();
        textSize(20);
        fill("orange")
        text("SCORE:"+score,750,40);
        textSize(15);
        fill("red")
        text("Press space to play multiple times! ",50,40)

        Engine.update(engine);

       stroke("black");

        ground1.display();
        ground2.display();
        ground3.display();
        fill ("pink")
        block1.display();
        block1.score();
        fill ("lightBlue")
        block2.display();
        block2.score();
        fill ("pink")
        block3.display();
        block3.score();
        fill ("lightBlue")
        block4.display();
        block4.score();
        fill ("pink")
        block5.display();
        block5.score();
        fill ("lightBlue")
        block6.display();
        block6.score();
        fill ("pink")
        block7.display();
        block7.score();
        fill ("lightBlue")
        block8.display();
        block8.score();
        fill ("pink")
        block10.display();
        block10.score();
        fill ("pink")
        block11.display();
        block11.score();
        fill ("lightBlue")
        block12.display();
        block12.score();
        fill ("pink")
        block13.display();
        block13.score();
        fill ("lightBlue")
        block14.display();
        block14.score();
        fill ("pink")
        block15.display();
        block15.score();
        fill ("lightBlue")
        block16.display();
        block16.score();
       fill ("pink")
       block17.display();
       block17.score();
       fill ("lightBlue");
       block18.display();
       block18.score();
       fill ("pink")
       block19.display();
       block19.score();
       fill ("lightBlue")
       block20.display();
       block20.score();
       fill ("yellow")
       block21.display();
       block21.score();
       fill ("lightBlue")
       block22.display();
       block22.score();
       fill ("yellow")
       block23.display();
       block23.score();
       fill ("lightBlue")
       block24.display();
       block24.score();
       fill ("yellow")
       block25.display();
       block25.score();
       fill ("lightBlue")
       block26.display();
       block26.score();
       fill ("yellow")
       block27.display();
       block27.score();
       fill ("lightBlue")
       block28.display();
       block28.score();
       fill ("yellow")
       block29.display();
       block29.score();
       fill ("yellow")
       block30.display();
       block30.score();
  



   polygon.display();
   launcher.display();



        drawSprites();

       
}
function mouseDragged()  {
    Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY})
  }
  
  function mouseReleased()  {
    launcher.fly()
    
  
  }
  
  function keyPressed()  {
    if(keyCode===32)  {
      Matter.Body.setPosition(polygon.body,{x:150, y:200})
      launcher.attach(polygon.body);
  
    }
  
  }
  async function getBg(){
    var a=await  fetch ("http://worldclockapi.com/api/json/est/now")
    var a1=await a.json();
    console.log( a1.currentDateTime)
    var date=a1.currentDateTime
    var hour=date.slice(11,13)
    if(hour>=06 && hour<=19){
        bg="bg.png"

    }
    else{
        bg="bg2.jpg"
    }
    bgImage=loadImage(bg)
}
