var speechrecognition = window.webkitspeechrecognition;

var recognition = new speechrecognition();

function start()

{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresults = function run (Event){
console.log(Event);

var content = Event.results[0] [0].transcript;
console.log(content);

document.getElementById("textbox").innerHTML = content;
}