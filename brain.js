document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    
    function reveal() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal();

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Message sent! I'll get back to you soon.");
        this.reset();
    });
});
