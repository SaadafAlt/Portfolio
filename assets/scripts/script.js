// Write to the system clipboard aka copy.
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
