document.addEventListener("DOMContentLoaded", function () {
    const videoSections = document.querySelectorAll(".video-section");

    function fadeInOnScroll() {
        videoSections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                section.classList.add("visible");
            }
        });
    }

    function autoPlayVideos() {
        document.querySelectorAll("video").forEach((video) => {
            const rect = video.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                video.play();
            } else {
                video.pause();
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    window.addEventListener("scroll", autoPlayVideos);
    fadeInOnScroll(); // Run on page load

    // Handle Contact Form Submission
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh
        document.getElementById("response").innerText = "✅ Message Sent! I'll get back to you soon.";
    });
});
