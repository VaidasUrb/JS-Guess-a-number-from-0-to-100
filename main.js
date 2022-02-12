function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let randNumber = rand(0, 100);
console.log(randNumber);
let cuont = 0;
let atsakymas = document.createElement("p");
let spejimuSkaicius = document.querySelector("h4");
let body = document.querySelector("body");

let forma = document.querySelector("form");
forma.addEventListener("submit", function (e) {
    cuont++
    e.preventDefault();
    let spetasSkaicius = +forma["number"].value;
    console.log(spetasSkaicius);
    if (randNumber === spetasSkaicius) {
        atsakymas.textContent = `Well Done! It took you ${cuont} attempts to guess this number:  `;
    } else if (spetasSkaicius < randNumber) {
        atsakymas.textContent = "My invented number is higher";
        spejimuSkaicius.textContent = `Guesses: ${cuont} `;
    } else {
        atsakymas.textContent = "My invented number is lower";
        spejimuSkaicius.textContent = `Guesses: ${cuont} `;
    }
    spejimuSkaicius.appendChild(atsakymas);
})