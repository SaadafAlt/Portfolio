/**
 * "Click to Copy" function
 * Created in a generic way so that it can be used anywhere
 
function copyText() {
    const myEmail = document.getElementById("copy-email-wrapper");

    myEmail.textContent = "Copied!";

    setTimeout(() => {
        myEmail.textContent = `<p id="my-email">saadafmohsin@gmail.com</p>`;
    }, 1000);
}
    */ 
/*
function clickToCopy(htmlElement) {
    if (!htmlElement) {
        return;
    }
    
    // we need to create a temp. input element 
    let elementText = htmlElement.innerText;
    let inputElement = document.createElement('input');
    document.body.appendChild(inputElement);

    inputElement.select(); // selects aka highlights 
    document.execCommand('copy');
    inputElement.parentNode.removeChild(inputElement);
}

// get div, attach onclick event handler to it then set it to an anon func.
document.querySelector('#copy-email-wrapper').onclick = function () {
    // pass in targeted div to function
    clickToCopy(document.querySelector('#my-email'));
}
*/

function copyText() {
    const myEmail = document.getElementById("my-email").innerHTML;
    const copyBtn = document.getElementById("copy-email-btn");
    const newBtn = document.createElement("button");
    newBtn.innerHTML = myEmail;
}

