leftWristX = "";
rightWristX = "";

function preload(){}

function setup()
{
    video = createCapture(VIDEO);
    video.size(500,550);

    canvas = createCanvas(500, 450);
    canvas.position(700,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{   
    var colory = "";
    var wordy = "";
    background("#896ded");
    text(wordy, 50, 400);
    fill(colory);
}
function modelLoaded()
{
    console.log("PoseNet is Initialized");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX =  results[0].pose.rightWrist.x;
        console.log(" leftwristX = " +leftWristX+ " rightwristX = " +rightWristX);
    }
}