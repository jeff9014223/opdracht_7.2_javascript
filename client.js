var budget = 100;
var product = 60;

let result = document.getElementById("result");
if (product <= budget) {
    result.innerHTML = "U heeft genoeg geld!"
    result.style.color = "green";
} else {
    result.innerHTML = "Helaas, te weinig geld"
    result.style.color = "red";
}