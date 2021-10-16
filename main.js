
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
}
function modelLoaded() {
    console.log('model is loaded');
}
function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
    }
}