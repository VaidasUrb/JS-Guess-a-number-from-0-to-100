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
        atsakymas.textContent = `Atspejai, tu spajai: ${cuont} `;
    } else if (spetasSkaicius < randNumber) {
        atsakymas.textContent = "Tavo spetas skaicius mazesnis";
        spejimuSkaicius.textContent = `Spejimai: ${cuont} `;
    } else {
        atsakymas.textContent = "Tavo spetas skaicius didesnis";
        spejimuSkaicius.textContent = `Spejimai: ${cuont} `;
    }
    body.appendChild(atsakymas);
})