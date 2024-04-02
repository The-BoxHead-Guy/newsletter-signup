window.onload = () => {
  // website elements
  const newsletter = document.querySelector(".newsletter");
  const successSegment = document.getElementById("success");
  const dismissButton = document.getElementById("dismiss");

  // Form elements
  const form = document.querySelector("form");
  const email = document.getElementById("email");
  const error = document.querySelector(".email__error--message");

  // Inline text elements
  const successEmail = document.querySelector(".success__email");

  form.addEventListener("submit", (e) => {
    const REG_MAIL_TOKEN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email.value || email.value === null) {
      // console.log("Please insert a valid email");
      displayErrorMessage(error, email);
      e.preventDefault();
    } else if (email.value.match(REG_MAIL_TOKEN)) {
      // console.log("Email is valid");
      changeSuccessMessage(successEmail, email.value);
      showSuccessMessage(newsletter, successSegment);
      e.preventDefault();
    } else {
      console.log("Please insert a valid email");
    }

    e.preventDefault();
  });

  dismissButton.addEventListener("click", () => {
    dismissMessage(newsletter, successSegment);
    location.reload();
  });
};

/* This function will show the success message if the email is valid */
const showSuccessMessage = (newsletter, success) => {
  newsletter.style.display = "none";
  success.style.display = "flex";
};

/* Changes the display of the success message */
const changeSuccessMessage = (success, email) => {
  success.innerHTML = email;
};

/* Dismiss success message */
const dismissMessage = (newsletter, success) => {
  success.style.display = "none";
  newsletter.style.display = "flex";
};

//Create the error messages if email is not valid
const displayErrorMessage = (errorMessage, emailEl) => {
  errorMessage.style.display = "flex";
  emailEl.classList.add("email__error--active");
};
