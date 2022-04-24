const images = [
  "지브리_배경화면_01.jpg",
  "지브리_배경화면_02.jpg",
  "지브리_배경화면_03.jpeg",
  "지브리_배경화면_04.jpg",
  "지브리_배경화면_05.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);

const background = document.querySelector(".background");
background.style.backgroundImage = "url(" + bgImage.src + ")";
