// Smooth scroll function
function smoothScroll(target, duration) {
    let targetSection = document.querySelector(target);
    let targetPosition = targetSection.getBoundingClientRect().top + window.scrollY; // Calculate position relative to top
    let startPosition = window.scrollY;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, targetPosition - startPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Event listeners for navigation links
document.getElementById('about-link').addEventListener('click', function() {
    smoothScroll('#aboutMe', 1000); // Smooth scroll to About Me
});

document.getElementById('education-link').addEventListener('click', function() {
    smoothScroll('#education', 1000); // Smooth scroll to Education
});

document.getElementById('socials-link').addEventListener('click', function() {
    smoothScroll('#socials', 1000); // Smooth scroll to Socials
});



  