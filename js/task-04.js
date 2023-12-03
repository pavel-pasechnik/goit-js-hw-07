"use strict";

const getForm = document.querySelector(".login-form");

const listener = (event) => {
  event.preventDefault();
  const email = getForm.elements.email.value;
  const password = getForm.elements.password.value;
  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  } else {
    const request = {
      email: email.trim(),
      password: password.trim(),
    };

    console.log(request);
    getForm.reset();
  }
};

getForm.addEventListener("submit", listener);
