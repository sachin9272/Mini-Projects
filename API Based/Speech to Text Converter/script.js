const textarea = document.querySelector('textarea');
const button = document.querySelector('button');

function speechToText(){
    let speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener('result',e=>{
        const transcript = Array.from(e.results)
        .map(result =>result[0])
        .map(result =>result.transcript)

        convert.innerHTML = transcript;

    })

    if(speech == true){
        recognition.start();
    }

}
button.addEventListener('click',speechToText)