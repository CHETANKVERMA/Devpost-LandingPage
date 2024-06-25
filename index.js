document.addEventListener("DOMContentLoaded", function () {
  // Preloader
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
  }, 1000);

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Product buttons
  document.querySelectorAll(".product-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const flavor = this.dataset.flavor;
      const product = this.closest(".product");
      const originalContent = product.innerHTML;

      product.style.transition = "opacity 0.5s, transform 0.5s";
      product.style.opacity = 0;
      product.style.transform = "scale(0.9)";

      setTimeout(() => {
        product.innerHTML = `<p class="product-desc">Discover the unique taste of ${flavor} HOP WTR. It's a hop-infused, non-alcoholic refreshment that's perfect for any time. Quench your thirst with the crisp, bold flavors of our craft-brewed hop water. Try it now!</p>`;
        product.style.opacity = 1;
        product.style.transform = "scale(1)";
      }, 500);

      setTimeout(() => {
        product.style.opacity = 0;
        product.style.transform = "scale(0.9)";
        setTimeout(() => {
          product.innerHTML = originalContent;
          product.style.opacity = 1;
          product.style.transform = "scale(1)";
        }, 500);
      }, 5000);
    });
  });

  // Form submission
  document
    .querySelector(".contact form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // FormSubmit.co will handle the form submission
      this.submit();

      // Display success message
      const successMsg = document.createElement("div");
      successMsg.className = "form-success";
      successMsg.textContent = "🎉 Form submitted successfully! 🎉";
      document.body.appendChild(successMsg);

      // Remove success message after animation
      setTimeout(() => {
        document.body.removeChild(successMsg);
      }, 4000);

      // Clear form fields
      this.reset();
    });

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    this.classList.toggle("active");
  });
});
