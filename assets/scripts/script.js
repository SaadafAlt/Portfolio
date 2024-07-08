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
 * Contact form functionality
 */
const form = document.querySelector('form');

function sendEmail() {

    // Port: 2525
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "SaadafMohsin@gmail.com",
        Password: "094BC959EA0481CC10A409A9C3C99D7D2277",
        To: 'them@website.com',
        From: "you@isp.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );

}