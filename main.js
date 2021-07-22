var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();
//To create a new web speech API//
var camera = document.getElementById('camera');


function start()
{
    document.getElementById('text-box').innerHTML = "";
    Recognition.start();
    //pre defined function to convert speech to text//
}

Recognition.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById('text-box').innerHTML = content;
    if (content == "take my selfie")
    {
        Speak()
    }
}

function Speak()
{
    var synth = window.speechSynthesis;
    speakData = "Taking your Selfie in 5 seconds"
    utterthis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        takeSnapShot();
        save();
    },5000);
    console.log('Working');
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

function takeSnapShot()
{
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = '<img id="selfie" src="' + data_uri + '">';
    })
}

function save(){
    link = document.getElementById('link')
    image = document.getElementById('selfie').src;
    link.href = image;
    link.click() 
}