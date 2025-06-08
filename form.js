
 // Form validation
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const submitBtn = document.getElementById("submitBtn");

    function checkForm() {
      let valid = true;

      if (nameInput.value.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        valid = false;
      } else {
        document.getElementById("nameError").textContent = "";
      }

      if (!emailInput.value.includes("@")) {
        document.getElementById("emailError").textContent = "Invalid email.";
        valid = false;
      } else {
        document.getElementById("emailError").textContent = "";
      }

      if (passwordInput.value.length < 6) {
        document.getElementById("passwordError").textContent = "Password must contain a minimum of 8 characters.";
        valid = false;
      } else {
        document.getElementById("passwordError").textContent = "";
      }

      submitBtn.disabled = !valid;
    }

    nameInput.addEventListener("input", checkForm);
    emailInput.addEventListener("input", checkForm);
    passwordInput.addEventListener("input", checkForm);

    document.getElementById("form").addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Form submitted successfully!");
    });

    // Character counter
    const textarea = document.getElementById("message");
    const counter = document.getElementById("counter");
    const warning = document.getElementById("warning");
    const max = 200;

    textarea.addEventListener("input", function () {
      const length = textarea.value.length;

      if (length > max) {
        textarea.value = textarea.value.substring(0, max);
        warning.textContent = "Character limit reached!";
      } else {
        warning.textContent = "";
      }

      counter.textContent = textarea.value.length + "/" + max;
    });