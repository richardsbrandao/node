// docker run --name some-app -p 27017:27017 -d mongo
var interactive = require('./mongoose/interactive')

var question = "Che cosa Desidera?\n1. Creare\n2. Cercare per Id\n3. Cercare per nome\n4. Modificare\n5. Rimuovere\n>> ";
interactive(question);