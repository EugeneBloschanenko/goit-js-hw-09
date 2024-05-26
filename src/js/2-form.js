const STORAGE_KEY = "options";

const form  = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");

function formSubmitHandler(e) {
    e.preventDefault();
    const email = form.elements.email.value;
    const message = textarea.value;
    console.log(email, message);
    const formData = JSON.stringify({email, message});
    localStorage.setItem(STORAGE_KEY, formData);
    form.reset();
};

form.addEventListener('submit', formSubmitHandler);