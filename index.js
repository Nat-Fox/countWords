// Transcripciones obtenidas por Google Speech API
const call1 = require('./call1-google.json');
const call2 = require('./call2-google.json');
const call2Google = require ('./2-google.json');


// Transcripciones realizadas de forma manual
const call1Manual = require('./call1-manual.json');
const call2Manual = require('./call2-manual.json');
const Manual2 = require('./2-google-manual.json');

googleSpeech = (googleTranscription) => {
    let partsList = googleTranscription[0].results.map(part => part.alternatives[0].transcript);
    let conversation = partsList.join(' ');
    let words = conversation.split(' ');
    let long = words.length;
    //console.log(conversation.join(' ').split(' ').length)
    //console.log(JSON.stringify(words, null, 4))
    
    return long
}

manualTranscription = (manualTranscription) => {
    let partsListManual = manualTranscription[0].resultsManual.map(part => part.line[0].transcript);
    let conversationManual = partsListManual.join(' ');
    let wordsManual = conversationManual.split(' ');
    let longManual = wordsManual.length;   

    return longManual;
}


console.log('Call 1 Google Speech API ->', googleSpeech(call1));
console.log('Call 1 Manual ->', manualTranscription(call1Manual));

console.log('Call 2 Google Speech API  ->', googleSpeech(call2));
console.log('Call 2 Manual ->', manualTranscription(call2Manual));

console.log('2 Google Speech API ->', googleSpeech(call2Google));
console.log('2 Manual ->', manualTranscription(Manual2))
