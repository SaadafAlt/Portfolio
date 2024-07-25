/**
 * sticky navbar
 */
// When the user scrolls the page, execute runSticky
window.onscroll = function () {
  runSticky();
};

var navbar = document.getElementById("nav-ul");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position.
function runSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    // Remove "sticky" when you leave the scroll position
  } else {
    navbar.classList.remove("sticky");
  }
}

/**
 * Write to the system clipboard aka copy to clipboard.
 * For Contact section.
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

    console.log("Content copied to Clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

/**
 * Write to the system clipboard aka copy to clipboard.
 * For email in navbar.
 */
const navEmailElement = document.getElementById("nav-email");
const navEmailValue = navEmailElement.innerText;

// function copyContentNav() {
//     console.log(`navEmailValue: ${navEmailValue}`);
// }

const copyContentNav = async () => {
    try {
        await navigator.clipboard.writeText(navEmailValue);
        navEmailElement.innerText = "Copied!";
        setTimeout(() => {
            navEmailElement.innerText = "saadafmohsin@gmail.com";
            navEmailElement.blur();
        }, 999);
        console.log("Content copied to clipboard");
    } catch (err) {
        console.error("Failed to copy: ", err);
    }
}

/**
 * Enable clients to send emails
 */
const form = document.querySelector("form");
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
    To: "saadafmohsin@gmail.com",
    From: "saadafmohsin@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
    // Port: 2525
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully.",
        icon: "success",
      });
    }
  });
}

// execute this when user submits the form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();

  setTimeout(() => {
    form.reset();
  }, 2500);
});
