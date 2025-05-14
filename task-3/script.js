// Image Carousel
let index = 0;
const images = document.querySelectorAll(".carousel img");

function showImage(i) {
  images.forEach(img => img.classList.remove("active"));
  images[i].classList.add("active");
}

function next() {
  index = (index + 1) % images.length;
  showImage(index);
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
}

// Joke API
async function getJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: { "Accept": "application/json" }
  });
  const data = await response.json();
  document.getElementById("joke").innerText = data.joke;
}
