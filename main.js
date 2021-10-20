noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup() {
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,500);
    canvas.position(560,200);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw() {
    background("#46435C");
    document.getElementById("square_side").innerHTML="width and height of the square is = "+difference+"px";
    fill("#6AEAB0");
    stroke("#6AEAB0");
    square(noseX,noseY,difference);
}
function modelLoaded() {
    console.log('model is loaded');
}
function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("noseX="+noseX+", noseY="+noseY);
        console.log("leftWristX="+leftWristX+", rightWristX="+rightWristX);
        difference=floor(leftWristX-rightWristX);
    }
}