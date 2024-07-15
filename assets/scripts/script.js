/**
 * sticky navbar
 */
// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("nav-ul");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

/* Add the sticky class to the navbar when you reach its scroll position. 
Remove "sticky" when you leave the scroll position */
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

/**
 * Write to the system clipboard IOW copy to clipboard
 */
const emailElement = document.getElementById("my-email");
const emailValue = emailElement.innerText;

const copyContent = async () => {
    try {
        await navigator.clipboard.writeText(emailValue);

        emailElement.innerText = "Copied!";
        setTimeout(() => {
            emailElement.innerText = "saadafmohsin@gmail.com";
        }, 1000);

        console.log('Content copied to Clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

/**
 * Enable clients to send emails
 */
const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `
        Full Name: ${fullName.value}<br>
        Email: ${email.value}<br>
        Message: ${mess.value}
    `;

    Email.send({
        SecureToken: "857f1dc5-b045-4f53-9108-605fdf60f734",
        To: 'saadafmohsin@gmail.com',
        From: "saadafmohsin@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
        // Port: 2525
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully.",
                    icon: "success"
                });
            }
        }
    );
}

/*
    function checkInputs() {
        const items = document.querySelectorAll(".item");

        for (const item of items) {
            if (item.value == "") {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        }

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
*/

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})