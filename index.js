const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstGeneratedPass = document.getElementById("first-password");
let secondGeneratedPass = document.getElementById("second-password");
let passwordLengthField = document.getElementById("password-length");
const defaultPasswordLength = 15;

function generatePasswords(){
    let firstPassword="";
    let secondPassword="";
    if( passwordLengthField.value<10 || passwordLengthField.value>20){
        passwordLength = defaultPasswordLength;
    }else{        
        passwordLength = passwordLengthField.value;
    }

    for(let i = 0; i<passwordLength; i++){
        let randomNumberOne = generateRandomNumber( 0,characters.length-1 );
        let randomNumberTwo = generateRandomNumber( 0,characters.length-1 );
        firstPassword += characters[randomNumberOne];
        secondPassword += characters[randomNumberTwo];
    }
    firstGeneratedPass.value = firstPassword;
    secondGeneratedPass.textContent = secondPassword;
}

function generateRandomNumber(min,max){
    return Math.floor( Math.random() * (max-min +1) +min );
}

// function copyPassword1(){
//     let copiedPassword = document.getElementById("first-password");
//     console.log( copiedPassword.value.length>0);
//     if( copiedPassword.value.length>0){
//         // Copy the text 
//         // navigator.clipboard.writeText(copiedPassword.textContent);

//         // // Alert the copied text
//         // alert("Copied the text: " + copiedPassword.textContent);
        
//          navigator.clipboard
//       .writeText(copiedPassword.value)
//       .then(() => {
//         alert("successfully copied");
//       })
//       .catch(() => {
//         alert("something went wrong");
//       });
//     }
// }

// function copyPassword2(){
//     let copiedPassword = document.getElementById("second-password");
//     console.log( copiedPassword.textContent.length>0);
//     if( copiedPassword.textContent.length>0){
//         // Copy the text 
//         navigator.clipboard.writeText(copiedPassword.textContent);

//         // Alert the copied text
//         alert("Copied the text: " + copiedPassword.textContent);
//     }
// }