document.addEventListener("DOMContentLoaded", function () {
  const continueButton = document.getElementById("continue-btn");

  if (continueButton) {
    continueButton.addEventListener("click", function () {
      const selectedTime = document.getElementById("time-select").value;
      if (selectedTime === "Choose Your Time") {
        alert("Please select a time.");
      } else {
        localStorage.setItem("selectedTime", selectedTime);
        window.location.href = "personal-details.html";
      }
    });
  }

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const firstName = form.first_name.value;
      const lastName = form.last_name.value;
      const email = form.email.value;
      const phone = form.phone.value;

      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);
      localStorage.setItem("phone", phone);

      window.location.href = "confirmation.html";
    });
  }


  document.getElementById("confirm-time").textContent = localStorage.getItem("selectedTime");
  document.getElementById("confirm-firstname").textContent = localStorage.getItem("firstName");
  document.getElementById("confirm-lastname").textContent = localStorage.getItem("lastName");
  document.getElementById("confirm-email").textContent = localStorage.getItem("email");
  document.getElementById("confirm-phone").textContent = localStorage.getItem("phone");
});
