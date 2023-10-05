

var budget = 100;
var product = prompt("Hoeveel kost het product dat je wilt kopen?");

let result = document.getElementById("result");
if (product <= budget) {
    result.innerHTML = "U heeft genoeg geld!"
    result.style.color = "green";
} else {
    result.innerHTML = "Helaas, te weinig geld"
    result.style.color = "red";
}