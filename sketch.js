const Engine= Matter.Engine
const Bodies= Matter.Bodies
const Constraint= Matter.Constraint
const World= Matter.World 

var engine, world

function preload(){
    polygonImg=loadImage("polygon.png")
}

function setup(){
createCanvas(900,400)
engine=Engine.create()
world= engine.world
Engine.run(engine)

ground= new Ground(450,380,900,20)
stand1= new Ground(390,300,250,10)
stand2= new Ground(700,200,200,10)
block1 = new Block(300,275,30,40)
block2= new Block(330,275,30,40)
block3= new Block(360,275,30,40)
block4= new Block(390,275,30,40)
block5= new Block(420,275,30,40)
block6= new Block(450,275,30,40)
block7= new Block(480,275,30,40)

block8= new Block(330,235,30,40)
block9= new Block(360,235,30,40)
block10= new Block(390,235,30,40)
block11= new Block(420,235,30,40)
block12= new Block(450,235,30,40)

block13= new Block(360,195,30,40)
block14= new Block(390,195,30,40)
block15= new Block(420,195,30,40)

block16= new Block(390,155,30,40)

block17= new Block(635,160,30,40)
block18= new Block(665,160,30,40)
block19= new Block(695,160,30,40)
block20= new Block(725,160,30,40)
block21= new Block(755,160,30,40)

block22= new Block(665,145,30,40)
block23= new Block(695,145,30,40)
block24= new Block(725,145,30,40)

block25= new Block(695,130,30,40)



polygon= Bodies.circle(50,200,20)
World.add(world,polygon)


slingShot= new SlingShot(this.polygon,{x:100,y:200})

}

function draw(){
    background("black")
    textSize(20)
    fill("lightYellow")
    text("DRAG THE POLYGON TO RELEASE IT, TO LAUNCH IT TOWARDS THE BLOCKS", 100,30)

    ground.display();
    stand1.display();
    stand2.display();
    fill("pink")
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
    

   

    slingShot.display();

         
    imageMode(CENTER)
    image(polygonImg,polygon.position.x,polygon.position.y,40,40)



}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingShot.fly()
}