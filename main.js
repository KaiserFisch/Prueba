var img = "";
var status = "";

function setup() {
canvas=createCanvas(800,600);
canvas.center();

function modelLoaded() {
console.log("Modelo cargado");
status = true;
objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
       console.log(error);
    }
    console.log(results);
}

objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "status: Detectando Objetos";
}

function preload() {
img=loadImage("dogandcat.jpg");
}

function draw() {
image(img,0,0,800,600);
fill('red');
text("Estatua",300,20);
noFill();
stroke("red");
rect(300,10,160,390);

text("Arboles",500,380);
noFill();
stroke("red");
rect(500,370,250,100);
}