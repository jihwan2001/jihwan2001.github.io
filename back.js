const images = ["england.jpeg", "france.jpg", "seoul.png", "us.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `picture/${chosenImage}`;

document.body.appendChild(bgImg);
