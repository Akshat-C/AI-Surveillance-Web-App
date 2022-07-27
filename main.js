video = "";
status1 = false;
objects = [];

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

    if (status1 != "")
    {
        od.detect(video, gotResult);
        document.getElementById("status").innerHTML = "Objects Detected";
        document.getElementById("num_obj").innerHTML = objects.length;

        for (i=0; i<objects.length; i++)
        {
            n = objects[i].label;
            per = Math.floor(objects[i].confidence*100);
            fill('red');
            text(n + " " + per + " %", objects[i].x+15, objects[i].y+15);
            noFill();
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function gotResult(error, results)
{
    if (error)
    {
        console.error(error);
    } else 
    {
        console.log(results);
        objects = results;
    }
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

















