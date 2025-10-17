// Étape 2 : premier code
console.log("Étape 2 : premier code");
let message = "Bonjour !";
console.log(message);
const firstname = "Beyonce";
message = "Bonjour " + firstname + " !";
console.log(message);

// Étape 3 : dans une fonction
console.log("Étape 3 : dans une fonction");
function sayHello(firstname, hour) {
    message = (hour >= 18) ? "Bonsoir " : "Bonjour ";
    message += firstname + " !";
    console.log(message);
}
sayHello(`Beyonce`, 11);
sayHello(`Beyonce`, 18);
sayHello(`Beyonce`, 17);

// Étape 6 : Première manipulation du DOM
console.log("Étape 6 : Première manipulation du DOM");
const userMessage = prompt("Quel est ton prénom ?");
const nowHour = new Date();
console.log(nowHour.getHours());
sayHello(userMessage, nowHour.getHours());
document.querySelector('h1').innerText = message;
