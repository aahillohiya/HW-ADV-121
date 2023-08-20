x = 0;
y = 0;

Draw_circle = "";
Draw_rectangle = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function setup() {
    canvas = createCanvas(900,600);
}

function preload() {
    
}

function draw() {
    if (Draw_circle == "set"){
        radius = Math.floor(Math.random() * 100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle is drawn!";
        Draw_circle = "";
    }
    if (Draw_rectangle == "set"){
        rect(x,y,100,23);
        document.getElementById("status").innerHTML = "Rectangle is drawn!";
        Draw_rectangle = "";
    }
}

function start() {
    document.getElementById("status").innerHTML = "Systerm is listening Please Speak!";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    var content = event.results[0][0].transcript; 
    document.getElementById("status").innerHTML = "The speech has been recognised as " + content;
     
    x = Math.floor(Math.random() * 900);
    y = Math.floor(Math.random() * 600);

    if (content == "Circle."){
        document.getElementById("status").innerHTML = "Started drawing Circle";
        Draw_circle = "set";
    }
    if (content == "Rectangle."){
        document.getElementById("status").innerHTML = "Started drawing Rectangle";
        Draw_rectangle= "set";
    }
}
