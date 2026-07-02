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

function myFunction() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("numb").value.trim();

    // Check if any field is empty
    if (name === "" || email === "" || phone === "") {
        alert("Input is incomplete. Please fill out all fields.");
        return false; // Prevent form submission
    }

    // Check if phone number contains only digits
    if (isNaN(phone)) {
        alert("Phone number is not valid. Please enter numbers only.");
        return false;
    }

    // Optional: Check phone number length
    if (phone.length < 10 || phone.length > 15) {
        alert("Phone number is not valid. It should be between 10 and 15 digits.");
        return false;
    }

    alert("Form submitted successfully!");
    return true; // Allow form submission
}


function openForm() {
    document.getElementById("popupForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}

function submitForm() {
    let name = document.getElementById("pname").value.trim();
    let email = document.getElementById("pemail").value.trim();
    let phone = document.getElementById("pphone").value.trim();

    if (name === "" || email === "" || phone === "") {
        alert("Please complete all required fields.");
        return false;
    }

    if (isNaN(phone)) {
        alert("Phone number is not valid.");
        return false;
    }

    alert("Thank you! Your order/request has been submitted.");
    closeForm();
    return false; // prevents page refresh
}

// Open popup
function openForm(){
    document.getElementById("contactPopup").style.display="block";
}

// Close popup
function closeForm(){
    document.getElementById("contactPopup").style.display="none";
}

// Submit form
function submitForm(){

    let name=document.getElementById("name").value.trim();
    let email=document.getElementById("email").value.trim();
    let phone=document.getElementById("phone").value.trim();

    if(name==="" || email==="" || phone===""){
        alert("Please complete all required fields.");
        return false;
    }

    if(isNaN(phone)){
        alert("Phone number is not valid.");
        return false;
    }

    alert("Thank you for contacting Kylz Food Corner!\n\nWe have received your order/request.");

    closeForm();

    document.querySelector("#contactPopup form").reset();

    return false;
}

// Close popup when clicking outside
window.onclick=function(event){
    let popup=document.getElementById("contactPopup");

    if(event.target===popup){
        closeForm();
    }
}