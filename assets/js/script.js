window.onload = () => {
  const newsletter = document.getElementById("newsletter");
  const successSegment = document.getElementById("success");
  const successButton = document.querySelector(".success__button");
  const newsletterButton = document.querySelector(".newsletter__button");

  newsletterButton.addEventListener("click", () => {
    newsletter.classList.add("inactive");
    successSegment.classList.remove("inactive");
  });

  successButton.addEventListener("click", () => {
    successSegment.classList.add("inactive");
    newsletter.classList.remove("inactive");
  });
};
