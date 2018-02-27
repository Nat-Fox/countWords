const call1 = require('./call1.json')

let partsList = call1[0].results.map(part => part.alternatives[0].transcript);
let conversation = partsList.join(' ')
let words = conversation.split(' ')

console.log(JSON.stringify(words, null, 4))
//console.log(conversation.join(' ').split(' ').length)