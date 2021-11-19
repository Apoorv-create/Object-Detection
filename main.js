objectdetector="";

img="";
status = "";
objects = [];

function preload(){
    img = loadImage("human.jpg");
}

function setup(){
    canvas = createCanvas(600, 450);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd', modalLoaded);
}

function modalLoaded(){
    console.log( "Modal has been Loaded");
    status = true;
    objectdetector.detect(img, gotResult)
}