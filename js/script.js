// Redirect to Courses Page
function exploreCourses() {
    window.location.href = "course.html";
}

// Contact Form Submission
function submitForm() {
    alert("Thank you! Your message has been sent successfully.");
    return false; // Prevent actual form submission
}

// Optional: Add smooth scroll effect
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function () {
            console.log("Navigating to: " + this.getAttribute("href"));
        });
    });
});
