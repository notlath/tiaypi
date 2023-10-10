const eyeIcon = document.querySelector("#eye");
const eyeSlashIcon = document.querySelector("#eye-slash-icon");
const password = document.querySelector("#password");

// Add click event listener to the eyeIcon
eyeIcon.addEventListener("click", function () {
  const isPasswordVisible = password.getAttribute("type") === "text";
  password.setAttribute("type", isPasswordVisible ? "password" : "text");

  // Toggle the visibility of the eye and eye-slash icons
  eyeIcon.style.display = isPasswordVisible ? "block" : "none";
  eyeSlashIcon.style.display = isPasswordVisible ? "none" : "block";
});

// Add click event listener to the eyeSlashIcon
eyeSlashIcon.addEventListener("click", function () {
  const isPasswordVisible = password.getAttribute("type") === "text";
  password.setAttribute("type", isPasswordVisible ? "password" : "text");

  // Toggle the visibility of the eye and eye-slash icons
  eyeIcon.style.display = isPasswordVisible ? "block" : "none";
  eyeSlashIcon.style.display = isPasswordVisible ? "none" : "block";
});
