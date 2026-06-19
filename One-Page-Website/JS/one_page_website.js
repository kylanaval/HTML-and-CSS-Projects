const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const caption = document.getElementById("caption");

const galleryImages = document.querySelectorAll(".gallery img");
const thumbnails = document.querySelectorAll(".thumb");

const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

// Open Lightbox
galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        lightbox.style.display = "block";
        showImage();
    });
});

// Show Image
function showImage() {

    lightboxImg.src = galleryImages[currentIndex].src;
    caption.textContent = galleryImages[currentIndex].alt;

    thumbnails.forEach(thumb => {
        thumb.classList.remove("active-thumb");
    });

    thumbnails[currentIndex].classList.add("active-thumb");
}

// Next
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showImage();
});

// Previous
prevBtn.addEventListener("click", () => {
    currentIndex =
        (currentIndex - 1 + galleryImages.length) %
        galleryImages.length;
    showImage();
});

// Thumbnail Click
thumbnails.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
        currentIndex = index;
        showImage();
    });
});

// Close
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Click Outside
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

// Keyboard Controls
document.addEventListener("keydown", (e) => {

    if (lightbox.style.display !== "block") return;

    if (e.key === "ArrowRight") {
        nextBtn.click();
    }

    if (e.key === "ArrowLeft") {
        prevBtn.click();
    }

    if (e.key === "Escape") {
        lightbox.style.display = "none";
    }
});