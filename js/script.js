// ===========================
// Dark Mode
// ===========================

const darkModeBtn = document.querySelector(".dark-mode-btn");

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const icon = darkModeBtn.querySelector("i");

        if (document.body.classList.contains("dark-mode")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }

    });

}

// ===========================
// Food Search
// ===========================

const searchInput = document.getElementById("searchInput");
const foodCards = document.querySelectorAll(".food-card");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const searchValue = searchInput.value.toLowerCase();

        foodCards.forEach(card => {

            const foodName = card.dataset.name.toLowerCase();

            if (foodName.includes(searchValue)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}

// ===========================
// Food Modal
// ===========================

const modal = document.getElementById("foodModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalPrice = document.getElementById("modalPrice");
const closeBtn = document.querySelector(".close");
const readButtons = document.querySelectorAll(".food-card button");

const foodData = [

    {
        title: "Rice & Curry",
        image: "images/rice-curry.jpg",
        description: "Rice & Curry is the most popular traditional Sri Lankan meal served with rice, vegetable curries, meat or fish, sambol, and papadam.",
        price: "Price : Rs. 1200"
    },

    {
        title: "Kottu Roti",
        image: "images/kottu.jpg",
        description: "Kottu Roti is one of the most famous Sri Lankan street food dishes made with chopped roti, vegetables, eggs, and meat.",
        price: "Price : Rs. 1500"
    },

    {
        title: "Hoppers",
        image: "images/hoppers.jpg",
        description: "Hoppers are bowl-shaped pancakes made from fermented rice flour and coconut milk.",
        price: "Price : Rs. 800"
    }

];

if (modal && closeBtn && readButtons.length > 0) {

    readButtons.forEach((button, index) => {

        button.addEventListener("click", () => {

            modal.style.display = "flex";

            modalImage.src = foodData[index].image;
            modalTitle.textContent = foodData[index].title;
            modalDescription.textContent = foodData[index].description;
            modalPrice.textContent = foodData[index].price;

        });

    });

    closeBtn.addEventListener("click", () => {

        modal.style.display = "none";

    });

    window.addEventListener("click", (event) => {

        if (event.target === modal) {

            modal.style.display = "none";

        }

    });

}

// ===========================
// Gallery Lightbox
// ===========================

const galleryImages = document.querySelectorAll(".gallery-container img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.querySelector(".close-lightbox");

if (galleryImages.length > 0 && lightbox && lightboxImage && closeLightbox) {

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            lightbox.style.display = "flex";
            lightboxImage.src = image.src;

        });

    });

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}

// ===========================
// Back To Top Button
// ===========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

if(topBtn){

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    });

}

// ===========================
// Loading Screen
// ===========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.style.display = "none";

        },1000);

    }

});

// ===========================
// Loader
// ===========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.classList.add("loader-hide");

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }

});