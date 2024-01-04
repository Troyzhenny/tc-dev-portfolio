// Selecting the DOM elements for the about me section, about heading, and bio heading
const aboutMeSection = document.querySelector('.about--me');
const aboutHeading = document.querySelector(".about--me h2");
const bioHeading = document.querySelector(".bio--text--cont h3");

// Callback function to be executed when the intersection changes
const callback = (entries, observer) => {
    entries.forEach(entry => {
        // Check if the about me section is currently intersecting with the viewport
        if (entry.isIntersecting) {
            // Apply styles when the about me section is visible
            aboutMeSection.style.backgroundColor = '#151616';
            aboutMeSection.style.color = '#ffe1bf';
            aboutHeading.style.color = "#ffe1bf";
            bioHeading.style.color = "#ffe1bf";
        } else {
            // Apply styles when the about me section is not visible
            aboutMeSection.style.backgroundColor = 'white';
            aboutMeSection.style.color = '#151616';
            aboutHeading.style.color = "#606c38";
            bioHeading.style.color = "#151616";
        }
    });
};

// Creating an IntersectionObserver instance with the callback function and options
const observer = new IntersectionObserver(callback, {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin around the root
    threshold: 0.5 // Trigger the callback when 50% of the target is visible
});

// Start observing the about me section
observer.observe(aboutMeSection);
