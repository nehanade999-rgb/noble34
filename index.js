document.addEventListener("DOMContentLoaded", function () {
  const cookieBanner = document.getElementById("cookieBanner");
  const acceptBtn = document.getElementById("acceptCookies");
  const declineBtn = document.getElementById("declineCookies");
  const cookieIcon = document.getElementById("cookieIcon");

  if (!localStorage.getItem("cookieChoice")) {
    cookieBanner.style.display = "block";
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieChoice", "accepted");
    cookieBanner.style.display = "none";
  });

  declineBtn.addEventListener("click", () => {
    localStorage.setItem("cookieChoice", "declined");
    cookieBanner.style.display = "none";
  });

  cookieIcon.addEventListener("click", () => {
    cookieBanner.style.display = "block";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    let valid = true;

    document.querySelectorAll(".error-message").forEach(msg => {
      msg.style.display = "none";
    });

    if (!name.value.match(/[A-Za-z ]{3,75}/)) {
      name.nextElementSibling.textContent = "Please enter a valid name (min 3 letters).";
      name.nextElementSibling.style.display = "block";
      valid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      email.nextElementSibling.textContent = "Please enter a valid email address.";
      email.nextElementSibling.style.display = "block";
      valid = false;
    }

    if (message.value.trim().length < 10) {
      message.nextElementSibling.textContent = "Message must be at least 10 characters.";
      message.nextElementSibling.style.display = "block";
      valid = false;
    }

    if (valid) {
      formMessage.textContent = "✅ Thank you for your message! We’ll get back to you soon.";
      formMessage.className = "form-message success";
      form.reset();

      setTimeout(() => {
        formMessage.textContent = "";
      }, 4000);
    } else {
      formMessage.textContent = "⚠️ Please fix the highlighted errors.";
      formMessage.className = "form-message error";
    }
  });
});
document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.parentElement;
    parent.classList.toggle('active');

    document.querySelectorAll('.faq-item').forEach(other => {
      if(other !== parent) other.classList.remove('active');
    });
  });
});
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryItems = document.querySelectorAll('.gallery-img');
const closeBtn = document.querySelector('.close');

document.addEventListener('DOMContentLoaded', function () {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const lightboxCaption = document.querySelector('.lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');

  document.querySelectorAll('img[data-caption]').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      const src = img.getAttribute('src');
      const caption = img.getAttribute('data-caption') || img.alt || '';
      lightboxImg.src = src;
      lightboxImg.alt = img.alt || '';
      lightboxCaption.textContent = caption;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    lightboxCaption.textContent = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === lightboxImg) closeLightbox();
  });

  document.querySelectorAll('.section-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // keyboard ESC to close lightbox
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });
});