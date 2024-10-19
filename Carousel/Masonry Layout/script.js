const container = document.querySelector(".masonry-container");

// Function to generate images
function createMasonryItems() {
    for (let j = 0; j < 3; j++) {
        // Repeat 3 times
        for (let i = 1; i <= 10; i++) {
            // Images from 1 to 10
            const item = document.createElement("div");
            item.classList.add("masonry-item");

            const img = document.createElement("img");
            img.src = `/Assets/Images/cat_${i}.jpg`; // Image path
            img.alt = `Cat ${i}`;

            item.appendChild(img);
            container.appendChild(item);
        }
    }
}

// Initialize masonry items
createMasonryItems();

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".masonry-item");

    const options = {
        root: null, // Use the viewport as the root
        threshold: 0.1, // Trigger when 10% of the item is in view
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add the visible class
                observer.unobserve(entry.target); // Stop observing once it becomes visible
            }
        });
    }, options);

    items.forEach((item) => {
        observer.observe(item); // Observe each item
    });
});
