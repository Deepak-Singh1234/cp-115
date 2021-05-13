function preload(){}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Model wants to eat chole bhature , butter chicken and chicken biriyani");

}

function draw(){
    image(video,0,0,300,300);
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        console.log("nosex = "+results[0].pose.nose.x);
        console.log("nosey = "+results[0].pose.nose.y);

        console.log("wristx = "+results[0].pose.wrist.x);
        console.log("wristy = "+results[0].pose.wrist.y);

        console.log("right eyex = "+results[0].pose.righteye.x);
        console.log("right eyey = "+results[0].pose.righteye.y);
    }
}

function take_snapshot(){
    save('myimage.jpg');
}

function take_snapshot(){
    save('myimage.jpg');
}

