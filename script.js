```javascript
// ===========================
// Dark Mode
// ===========================

const darkModeBtn = document.querySelector(".dark-mode-btn");

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const icon = darkModeBtn.querySelector("i");

        if (icon) {

            if (document.body.classList.contains("dark-mode")) {

                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");

            } else {

                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");

            }

        }

    });

}


// ===========================
// Food Search
// ===========================

const searchInput = document.getElementById("searchInput");
const foodCards = document.querySelectorAll(".food-card");

if (searchInput) {

    searchInput.addEventListener("input", () => {

        const searchValue =
            searchInput.value.toLowerCase().trim();

        foodCards.forEach(card => {

            const foodName =
                (card.dataset.name || "").toLowerCase();

            if (foodName.includes(searchValue)) {

                card.style.display = "";

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

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalPrice =
    document.getElementById("modalPrice");

const closeBtn =
    document.querySelector(".close");

const readButtons =
    document.querySelectorAll(".food-card button");


// ===========================
// Food Information
// ===========================

const foodData = {

    "Rice Curry": {

        title: "Rice & Curry",

        image: "images/rice-curry.jpg",

        description:
            "Rice & Curry is the most popular traditional Sri Lankan meal. It is usually served with rice, several vegetable curries, meat or fish curry, sambol and papadam.",

        price: "Price : Rs. 1200"

    },


    "Kottu Roti": {

        title: "Kottu Roti",

        image: "images/kottu.jpg",

        description:
            "Kottu Roti is one of Sri Lanka's most famous street foods. It is made by chopping godhamba roti together with vegetables, eggs, meat and spices.",

        price: "Price : Rs. 1500"

    },


    "Hoppers": {

        title: "Hoppers",

        image: "images/hoppers.jpg",

        description:
            "Hoppers are bowl-shaped Sri Lankan pancakes made from fermented rice flour and coconut milk. They can be enjoyed with curry, sambol or an egg in the center.",

        price: "Price : Rs. 800"

    },


    "String Hoppers": {

        title: "String Hoppers",

        image: "images/string-hoppers.jpg",

        description:
            "String Hoppers are soft steamed rice flour noodles. They are traditionally served with coconut sambol, dhal curry or other Sri Lankan curries.",

        price: "Price : Rs. 700"

    },


    "Lamprais": {

        title: "Lamprais",

        image: "images/lamprais.jpg",

        description:
            "Lamprais is a delicious rice meal influenced by Sri Lanka's Dutch Burgher heritage. Rice, meat curry, sambol and accompaniments are wrapped in a banana leaf and baked.",

        price: "Price : Rs. 1800"

    },


    "Pittu": {

        title: "Pittu",

        image: "images/pittu.jpg",

        description:
            "Pittu is a traditional Sri Lankan steamed dish made from rice flour and grated coconut. It is commonly served with coconut milk, curry or katta sambol.",

        price: "Price : Rs. 700"

    },


    "Fish Curry": {

        title: "Fish Curry",

        image: "images/fish-curry.jpg",

        description:
            "Sri Lankan Fish Curry is prepared with fresh fish, coconut milk or spices, curry leaves and aromatic ingredients. It is known for its rich and spicy flavor.",

        price: "Price : Rs. 1400"

    },


    "Pol Sambol": {

        title: "Pol Sambol",

        image: "images/pol-sambol.jpg",

        description:
            "Pol Sambol is a traditional Sri Lankan coconut sambol made with freshly grated coconut, chili, onion, lime and salt.",

        price: "Price : Rs. 500"

    },


    "Watalappam": {

        title: "Watalappam",

        image: "images/watalappam.jpg",

        description:
            "Watalappam is a traditional Sri Lankan coconut custard dessert made with coconut milk, jaggery, eggs and aromatic spices such as cardamom.",

        price: "Price : Rs. 600"

    },


    "Milk Tea": {

        title: "Milk Tea",

        image: "images/milk-tea.jpg",

        description:
            "Sri Lankan Milk Tea is a popular beverage made with strong Ceylon tea, milk and sugar. It is enjoyed throughout Sri Lanka.",

        price: "Price : Rs. 350"

    }

};


// ===========================
// Open Food Modal
// ===========================

if (
    modal &&
    modalImage &&
    modalTitle &&
    modalDescription &&
    modalPrice &&
    closeBtn
) {

    readButtons.forEach(button => {

        button.addEventListener("click", () => {

            const foodCard =
                button.closest(".food-card");

            if (!foodCard) {
                return;
            }


            const foodName =
                foodCard.dataset.name;

            const food =
                foodData[foodName];


            if (!food) {

                console.log(
                    "Food data not found:",
                    foodName
                );

                return;

            }


            modalImage.src = food.image;

            modalImage.alt = food.title;

            modalTitle.textContent =
                food.title;

            modalDescription.textContent =
                food.description;

            modalPrice.textContent =
                food.price;


            modal.style.display = "flex";

        });

    });


    // ===========================
    // Close Modal
    // ===========================

    closeBtn.addEventListener("click", () => {

        modal.style.display = "none";

    });


    // Close when clicking outside modal

    window.addEventListener("click", event => {

        if (event.target === modal) {

            modal.style.display = "none";

        }

    });


    // Close with Escape key

    document.addEventListener("keydown", event => {

        if (
            event.key === "Escape" &&
            modal.style.display === "flex"
        ) {

            modal.style.display = "none";

        }

    });

}


// ===========================
// Gallery Lightbox
// ===========================

const galleryImages =
    document.querySelectorAll(".gallery-container img");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const closeLightbox =
    document.querySelector(".close-lightbox");


if (
    galleryImages.length > 0 &&
    lightbox &&
    lightboxImage &&
    closeLightbox
) {

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            lightboxImage.src = image.src;

            lightbox.style.display = "flex";

        });

    });


    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });


    lightbox.addEventListener("click", event => {

        if (event.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}


// ===========================
// Back To Top Button
// ===========================

const topBtn =
    document.getElementById("topBtn");


if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });


    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// ===========================
// Loading Screen
// ===========================

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    if (loader) {

        loader.classList.add("loader-hide");

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});
```
