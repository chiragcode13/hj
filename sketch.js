const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var hour;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg( )
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg)
    }


    Engine.update(engine);
     textSize(30)
     fill("white")
    // write code to display time in correct format here
    if(hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
    }
    else if(hour===0){
        text("Time : 12 AM",100,100);
    }
    else{
        text("Time : "+ hour%12 + " AM", 50,100);
    }
}

async function getBackgroundImg(){

    var res=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

        var json=await res.json();

        var dt=json.datetime;

        console.log(dt);

         hour=dt.slice(11,13)

        if(hour>=04&&hour<=6){
            bg="sunriset1.png"
        }
        else if(hour>=06&&hour<=08){
            bg="sunset2.png"
        }
        else if(hour>=23&&hour<=0){
            bg="sunset10.png"
        }
        else if(hour>=0&&hour<=03){
            bg="sunset11.png"
        }
        else{
            bg="sunset12.png" 
        }
        backgroundImg=loadImage(bg)


}

