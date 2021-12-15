Webcam.set({
    height: 300,
    width: 350,
    image_format: 'jpeg',
    jpeg_quality: 90,
});

camera = document.getElementById('camera');

Webcam.attach(camera);   

function take_snapshot(){
    Webcam.snap(function(data_uri) {
       document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">'; 
    });
}
console.log("ml5 version = " + ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/cejqx6bhZ/.model.json",modelLoaded);

function modelLoaded(){
    console.log("Model Loaded")
}

function check(){
    img = document.getElementById('capture_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, result){
    if(error){
    console.log(error);
    }else{
    console.log(result);
    document.getElementById("result1").innerHTML=results[0].label;
    document.getElementById("result2").innerHTML=results[0].confidence.toFixed(3);
}
}