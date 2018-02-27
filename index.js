// Transcripciones obtenidas por Google Speech API
const call1 = require('./call1-google.json');
const call2 = require('./call2-google.json');
const call2Google = require ('./2-google.json');


// Transcripciones realizadas de forma manual
const call1Manual = require('./call1-manual.json');
const call2Manual = require('./call2-manual.json');
const Manual2 = require('./2-google-manual.json');

googleSpeechWords = (googleTranscription) => {
    let partsList = googleTranscription[0].results.map(part => part.alternatives[0].transcript);
    let conversation = partsList.join(' ');
    let words = conversation.split(' ');    
    let long = words.length;
    
    return long
}

manualTranscriptionWords = (manualTranscription) => {
    let partsListManual = manualTranscription[0].resultsManual.map(part => part.line[0].transcript);
    let conversationManual = partsListManual.join(' ');
    let wordsManual = conversationManual.split(' ');
    let longManual = wordsManual.length;   

    return longManual;
}

googleSpeechCharacters = (googleTranscription) => {
    let partsList = googleTranscription[0].results.map(part => part.alternatives[0].transcript);
    return partsList.join('').split('').length;    
}

manualTranscriptionCharacters = (manualTranscription) => {
    let partsListManual = manualTranscription[0].resultsManual.map(part => part.line[0].transcript);
    return partsListManual.join('').split('').length;
} 


// call1.flac
console.log('call1.flac')
console.log('Words call1.flac [Google Speech API] ->', googleSpeechWords(call1));
console.log('Characters call1.flac [Google Speech API] -> ', googleSpeechCharacters(call1))

console.log('Words call1.flac [MANUAL] ->', manualTranscriptionWords(call1Manual));
console.log('Characters call1.flac [MANUAL]', manualTranscriptionCharacters(call1Manual));

// call2.flac
console.log('call2.flac')
console.log('Words call2.flac [Google Speech API] ->', googleSpeechWords(call2));
console.log('Characters call2.flac [Google Speech API] -> ', googleSpeechCharacters(call2));

console.log('Words call2.flac [MANUAL] ->', manualTranscriptionWords(call2Manual));
console.log('Characters call2.flac [MANUAL]', manualTranscriptionCharacters(call2Manual));

// 2.flac
console.log('2.flac')
console.log('Words 2.flac [Google Speech API] ->', googleSpeechWords(call2Google));
console.log('Characters call2.flac [Google Speech API] -> ', googleSpeechCharacters(call2Google));

console.log('Words 2.flac [MANUAL] ->', manualTranscriptionWords(Manual2));
console.log('Characters 2.flac [MANUAL]', manualTranscriptionCharacters(Manual2));




