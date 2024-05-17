let ika = document.getElementById("ika");
let mail = document.getElementById("mail");
let nimi = document.getElementById("nimi");
let aika = document.getElementById("aika");
let kuva = document.getElementById("kuva");
var kuvienNimet = ['tiger.jpg', 'car.jpg', 'bird.jpg', 'droplets.jpg'];

function vaihdaaika() {
    let kellonaika = new Date().toLocaleTimeString();
    aika.textContent = kellonaika;
}

function submit() {
    if (nimi.value.trim() == "") {
        alert("Nimi on tyhjä");
    } else if (mail.value.trim() == "") {
        alert("Sahkoposti on tyhjä")
    } else if (ika.value == 0) {
        alert("Ika on tyhjä")
    } else {
        alert("Kiitos!")
        nimi.value = "";
        mail.value = "";
        ika.value = "";
    }
}

function painike() {
    alert("Hei maailma!");
}

function vaihdakuva() {
    var satunnainenKuva = kuvienNimet[Math.floor(Math.random() * kuvienNimet.length)];
    kuva.src = "kuvat/" + satunnainenKuva
}

function poistatodo() {

}

function todolista() {
    if (document.querySelector("#todo input").value == "") {
        alert("Kirjoita ensin mitä lisätään!")
    } else {
        var tehtava = document.querySelector("#todo input").value;
        var tehtavaElementti = document.createElement("li");
        tehtavaElementti.textContent = tehtava;
        
        var poistaNappi = document.createElement("button");
        poistaNappi.textContent = "Poista tämä";
        poistaNappi.className = "poistaNappi";
        poistaNappi.onclick = function() {
            this.parentElement.remove();
        };
        
        tehtavaElementti.appendChild(poistaNappi);
        
        lista.appendChild(tehtavaElementti);
        
        document.querySelector("#todo input").value = "";
    }
}





setInterval(vaihdaaika, 1000);
