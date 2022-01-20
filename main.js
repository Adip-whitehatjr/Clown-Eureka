NoseX = 0;
NoseY = 0;
function preload() {
  Clown_nose = loadImage('https://i.postimg.cc/Gmw4Kq5b/Clown-nose-large-1.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(Clown_nose, NoseX, NoseY, 30, 35);
}

function take_snapshot() {
   save('myFilterImage.png');
   
}

function modelLoaded() {
    console.log('poseNet is initialized');
}

function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        NoseX = results[0].pose.nose.x - 15;
        NoseY = results[0].pose.nose.y - 15;
        console.log("Nose x =" + results[0].pose.nose.x);
        console.log("Nose y =" + results[0].pose.nose.y);
    }
}