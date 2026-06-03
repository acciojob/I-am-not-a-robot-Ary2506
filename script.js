//your code here
const imageContainer = document.getElementById("image-container");
const resetBtn = document.getElementById("reset");
const verifyBtn = document.getElementById("verify");
const para = document.getElementById("para");

const classes = ["img1", "img2", "img3", "img4", "img5"];

// Random duplicate image
const duplicate = classes[Math.floor(Math.random() * classes.length)];

// Create 6 images (5 unique + 1 duplicate)
let images = [...classes, duplicate];

// Shuffle images
images.sort(() => Math.random() - 0.5);

let selected = [];

// Render images
images.forEach((cls, index) => {
  const img = document.createElement("img");

  img.classList.add(cls);
  img.dataset.type = cls;
  img.dataset.index = index;

  img.addEventListener("click", function () {
    // Prevent selecting same image twice
    if (selected.includes(img) || selected.length === 2) return;

    img.classList.add("selected");
    selected.push(img);

    resetBtn.style.display = "inline-block";

    if (selected.length === 2) {
      verifyBtn.style.display = "inline-block";
    }
  });

  imageContainer.appendChild(img);
});

// Reset functionality
resetBtn.addEventListener("click", () => {
  selected.forEach((img) => img.classList.remove("selected"));

  selected = [];

  para.textContent = "";

  resetBtn.style.display = "none";
  verifyBtn.style.display = "none";
});

// Verify functionality
verifyBtn.addEventListener("click", () => {
  const first = selected[0].dataset.type;
  const second = selected[1].dataset.type;

  if (first === second) {
    para.textContent = "You are a human. Congratulations!";
  } else {
    para.textContent =
      "We can't verify you as a human. You selected the non-identical tiles.";
  }

  verifyBtn.style.display = "none";
});