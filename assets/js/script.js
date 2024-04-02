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
    e.preventDefault();

    // Setting an object with the values
    const values = {
      _email: "",
      _REG_MAIL_TOKEN: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,

      // Setting the values
      set emailValue(input) {
        this._email = input.trim(); // trim white spaces
      },

      // getting the values using getters
      get email() {
        return this._email;
      },

      get getRegexToken() {
        return this._REG_MAIL_TOKEN;
      },
    };

    // Setting the values
    values.emailValue = email.value;
    console.log(values.email);

    if (!values.email) {
      displayErrorMessage(error, email);
    } else if (values.email.match(values.getRegexToken)) {
      changeSuccessMessage(successEmail, email.value);
      showSuccessMessage(newsletter, successSegment);
    } else {
      displayErrorMessage(error, email);
    }
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
