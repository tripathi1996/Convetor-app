// Access the values of the elements

let from = document.getElementById("from") //for selecting --> from option
let to = document.getElementById("to") //for selecting --> to option
let inputNumber = document.getElementById("input-number") //for selecting --> Input value
let resultBox = document.getElementById("result-box") //for selecting --> Output value
let reset = document.getElementById("reset"); //for selecting --> Reset Button



document.getElementById("convert").addEventListener("click", () => {

    let fromValue = from.value //check from

    let toValue = to.value //check to

    let inputValue = inputNumber.value //check input no

    let result = convertBase(fromValue, toValue, inputValue) //convert input no "from" to "to"

    resultBox.innerText = result //show result in result box
})

function convertBase(fromBase, toBase, num) {
    let d = parseInt(num, fromBase) //converting no into base10
    let res = d.toString(toBase) //converting base10 to required base
    return res
}


//---------------------------------------------------------------------------------------

//Adding Event on Swap Button

document.getElementById("swap").addEventListener("click", () => {

    let temp = from.value //grab value from "from"
    from.value = to.value
    to.value = temp
})

//--------------------------------------------------------------------------------------

//Adding Event on Reset Button

reset.addEventListener("click", () => {
    inputNumber.value = "";
    resultBox.value = "";


});

//For Day and Night theme

var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function() {
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})