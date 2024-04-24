var random1 = Math.floor(Math.random() * 6) + 1;
var imagesoucre = "images/dice" + random1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", imagesoucre);

var random2 = Math.floor(Math.random() * 6) + 1;
var imagesoucre = "images/dice" + random2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imagesoucre);

if (random1 > random2) {
  document.querySelector("h1").innerHTML = "Taphataan 1ffaan injifateera";
} else if (random2 > random1) {
  document.querySelector("h1").innerHTML = "Taphataan 2ffaan injifateera";
} else {
  document.querySelector("h1").innerHTML =
    "wal qixa waan taheef irra deebihuun taphadhaa ";
}
