document.addEventListener("DOMContentLoaded", function () {
    // Target the DOM elements
    const aboutMeSection = document.querySelector('.about--me');

    // Options for the Intersection Observer
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // 50% of the element must be in view
    };

    // Callback function to handle intersection changes
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element is in view, change background color
                aboutMeSection.style.backgroundColor = '#151616';
                aboutMeSection.style.color = '#ffe1bf';
            } else {
                // Element is not in view, change background color back to white
                aboutMeSection.style.backgroundColor = 'white';
                aboutMeSection.style.color = '#151616'
            }
        });
    };

    // Create an Intersection Observer with the callback and options
    const observer = new IntersectionObserver(callback, options);

    // Start observing the about--me section
    observer.observe(aboutMeSection);
});