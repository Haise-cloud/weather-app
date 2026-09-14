let kota = "tegal";
let suhu = 30;

console.log("cuaca di " + kota + " adalah " + suhu + "°C");

kota = "Jakarta";
suhu = 32;

console.log(kota);
console.log(suhu);

let judul = document.querySelector("h1");

judul.textContent = "Cuaca Hari Ini";

let elemenSuhu = document.querySelector(".temperature");

console.log(elemenSuhu);

elemenSuhu.textContent = "32°C";

let tombolCari = document.querySelector("button");
let inputKota = document.querySelector("input");
let namaKota = document.querySelector("h2");
let pesan = document.querySelector(".message")

tombolCari.addEventListener("click", function() {

    if (inputKota.value === "") {
        pesan.textContent = "kota belum diisi!" 
    } else {
        namaKota.textContent = inputKota.value;
        pesan.textContent = "";
    }

});