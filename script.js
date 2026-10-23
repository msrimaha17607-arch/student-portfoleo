
const portfolioEmail = "your-email@example.com";

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const formMessage = document.getElementById("formMessage");

        if (!name || !email || !subject || !message) {
            formMessage.textContent = "Please fill in all the fields.";
            return;
        }

      
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            return;
        }

        
        const emailSubject = encodeURIComponent(subject);

        const emailBody = encodeURIComponent(
            "Name: " + name + "\n" +
            "Email: " + email + "\n\n" +
            "Message:\n" + message
        );

        const mailtoLink =
            "mailto:" + portfolioEmail +
            "?subject=" + emailSubject +
            "&body=" + emailBody;

        if (portfolioEmail === "your-email@example.com") {

            formMessage.textContent =
                "Please update portfolioEmail in script.js with your email address.";

            return;
        }

        formMessage.textContent =
            "Opening your email application...";

        window.location.href = mailtoLink;

    });

}




const linkedinLink = document.getElementById("linkedinLink");

if (linkedinLink) {

    linkedinLink.addEventListener("click", function (event) {

        if (linkedinLink.getAttribute("href") === "#") {

            event.preventDefault();

            alert("Please add your LinkedIn profile URL in contacts.html.");

        }

    });

}




const currentPage = window.location.pathname
    .split("/")
    .pop()
    .toLowerCase() || "index.html";

document.querySelectorAll(".navbar a").forEach(function (link) {

    const linkPage = link.getAttribute("href").toLowerCase();

    if (linkPage === currentPage) {

        link.classList.add("active");

    } else {

        link.classList.remove("active");

    }

});




console.log("Welcome to Srimahalakshmi's Student Portfolio!");
console.log("Built using HTML, CSS, and JavaScript.");

