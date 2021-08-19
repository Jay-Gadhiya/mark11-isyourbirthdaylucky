var birthdate = document.querySelector("#myBirthday");
var button = document.querySelector("#button");
var luckyNumber = document.querySelector("#lucky-number");
var outputText = document.querySelector("#outputText");

var sum = 0;




button.addEventListener("click", function () { //20000428
    var birthString = birthdate.value.replaceAll('-', '');
    var birthNumber = Number(birthString);

    // for (let index = 0; index < birthString.length; index++) {   //using simple for loop
    //     sum = sum + Number(birthString[index]);

    // }

    for(let element of birthString) {                               //using simple for..of loop
        sum = sum + Number(element);
    }

    if ((sum % luckyNumber.value) === 0) {
        outputText.innerText = "your birthday is lucky 😃🎂";
        console.log("your birthday is lucky");
    }
    else {
        outputText.innerText = `${luckyNumber.value} is not that lucky 🤒`;
        console.log("your birthday is not lucky");


    }



})