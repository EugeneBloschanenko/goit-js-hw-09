const STORAGE_KEY = "feedback-form-state";

const form  = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");
const email = form.elements.email;

function formInputHandler(e) {
    e.preventDefault();
    const email = form.elements.email.value;
    const message = textarea.value;
    console.log(email, message);
    const data = JSON.stringify({email, message});
    localStorage.setItem(STORAGE_KEY, data);
    // form.reset();
};

form.addEventListener('input', formInputHandler);
const jsnData = localStorage.getItem(STORAGE_KEY) ?? " ";
const formData = JSON.parse(jsnData);

email.value = formData.email;
textarea.value = formData.message;