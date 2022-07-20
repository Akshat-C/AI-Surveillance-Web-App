video = "";
status1 = false;

function preload()
{
    video = createVideo("video.mp4");
    console.log("video loaded");
    video.hide();
    console.log("video hidden successfully");
}

function setup()
{
    canvas = createCanvas(580, 430);
    canvas.center();
}

function draw()
{
    image(video, 0, 0, 580, 430);
}

function start()
{
   od = ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelLoaded()
{
    console.log("Model loaded");
    status1 = true;
    video.loop();
    video.speed(1);
    video.volume(1);
}

















