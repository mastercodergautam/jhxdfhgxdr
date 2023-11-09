difference=0;
leftwristX=0;
rightwristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(800,800);
  canvas=createCanvas(800,700)  ;
canvas.position(900,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPose);

}
function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}
function draw(){
    background('#969A97');
    textSize(difference);
  fill("lightyellow");
  stroke("black");
  text("Gautam",50,300);

}
function gotPose(results){
    if(results.length>0){
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX)

    }
}