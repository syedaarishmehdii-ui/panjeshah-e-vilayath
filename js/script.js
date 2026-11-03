/* ==========================================================================
   Panjeshah-e-Vilayath: main script
   ========================================================================== */

(() => {
  "use strict";

  /* ---------- Config ---------- */
  const WHATSAPP_NUMBER = "917416771960"; // country code + number, no "+" or spaces

  /* ---------- Gallery data ---------- */
  const IMG = "assets/images/";
  const galleryData = [
    { src: "darvesh2.jpeg", caption: "Late Mir Imam Ali Razvi Najafi", date: "Panjeshah e Vilayath" },
    { src: "darvesh1.jpeg", caption: "Late Mir Turab Ali Razvi Najafi", date: "Panjeshah e Vilayath" },
    { src: "darvesh4.jpeg", caption: "Mir Ali Imam Razvi Najafi", date: "Current Mutawalli Panjeshah e Vilayath" },
    { src: "1.jpeg", caption: "Panjesha e Mubarak", date: "Iconic Photograph" },
    { src: "66989493-9e09-46e7-a011-167fad8c95d0.jpg", caption: "Mir Turab Ali Razvi Najafi", date: "Offering Dhatti to Bibi ka Alam" },
    { src: "87737203-e972-44f5-8f99-eb1a420e7825.jpg", caption: "Mir Ali Imam Razvi Najafi", date: "10th Muharram Ashura" },
    { src: "MOULANA AT PANJA.jpeg", caption: "Ziyarath e panje mubarak", date: "Moulana Syed Ali Raza Razvi" },
    { src: "MOULANA PVA 1.jpeg", caption: "Moulana Syed Ali Raza Razvi", date: "Visited Panjeshah e vilayath" },
    { src: "MOULANA PVA 2.jpeg", caption: "Moulana Syed Ali Raza Razvi", date: "Visited Panjeshah e vilayath" },
    { src: "MOULANA PVA 3.jpeg", caption: "Moulana Syed Ali Raza Razvi", date: "Visited Panjeshah e vilayath" },
    { src: "MOULANA ZIYARATH.jpeg", caption: "Moulana Syed Ali Raza Razvi", date: "Visited Panjeshah e vilayath" },
    { src: "DARVESH DAD.jpeg", caption: "Mutawalli Mir Ali Imam Razvi", date: "Panjeshah e vilayath" },
    { src: "SANDAL DARVESH.jpeg", caption: "Sandal e Mubarak", date: "Panjeshah e vilayath (a.s)" },
    { src: "SANDAL ETHESHAM.jpeg", caption: "Sandal e Mubarak", date: "Panjeshah e vilayath" },
    { src: "OLD SANDAL 2.jpeg", caption: "Sandal e Mubarak", date: "Panjeshah e vilayath (a.s)" },
    { src: "OLD SANDAL.jpeg", caption: "Sandal e Mubarak", date: "Panjeshah e vilayath (a.s)" },
    { src: "Panjeshah 2.jpeg", caption: "Panjeshah e vilayath", date: "" },
    { src: "panjesha 1.jpeg", caption: "Panjeshah e vilayath", date: "" },
    { src: "panjesha 3.jpeg", caption: "Panjeshah e vilayath", date: "" },
    { src: "WhatsApp Image 2025-12-03 at 11.11.09 (3).jpeg", caption: "Sacred Shrine Interior", date: "Panjeshah e vilayath" },
    { src: "WhatsApp Image 2025-12-03 at 11.11.11 (2).jpeg", caption: "Devotional Ceremony", date: "Community Gathering" },
    { src: "WhatsApp Image 2025-12-03 at 11.11.13 (1).jpeg", caption: "Holy Relics Display", date: "Alam-e-Mubarak" },
    { src: "WhatsApp Image 2025-11-30 at 23.34.54.jpeg", caption: "Muharram mourning and sorrow", date: "Muharram Ashura" },
    { src: "Muharram.jpeg", caption: "Muharram mourning and sorrow", date: "Muharram Ashura" },
    { src: "muharram 2.jpeg", caption: "Muharram mourning and sorrow", date: "Muharram Ashura" },
    { src: "5f6a329c-5c58-45e0-8630-a66255b99ef2_upscaled.jpg", caption: "Spiritual Gathering", date: "Community Event" },
    { src: "dargah 1.jpeg", caption: "Panjeshah e vilayath", date: "Community Event" },
    { src: "dargah 2.jpeg", caption: "Panjeshah e vilayath", date: "Community Event" },
    { src: "WhatsApp Image 2025-12-03 at 11.11.10 (2).jpeg", caption: "Holy Event Gathering", date: "Shawl Poshi" },
    { src: "WhatsApp Image 2025-12-03 at 11.11.09.jpeg", caption: "Eid ul Fitr", date: "Eid Qutba" },
    { src: "dargah 3.jpeg", caption: "Amal e Shab e Qadr", date: "Panjeshah e vilayath" },
    { src: "bd6c88e7-fac2-46cf-a048-545b27544c48_upscaled.jpg", caption: "Mir Chowk Police Dept. visit", date: "Panjeshah-e-Vilayath" },
    { src: "WhatsApp Image 2025-12-03 at 11.11.09 (2).jpeg", caption: "13th Rajab", date: "Hazrath Ali (as.) Birthday" }
  ];

  /* ---------- Element references ---------- */
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".content-section");
  const galleryGrid = document.getElementById("gallery-grid");

  const lightbox = document.getElementById("lightbox-modal");
  const lightboxImage = lightbox.querySelector(".lightbox-image");
  const lightboxCaption = lightbox.querySelector(".lightbox-caption");
  const lightboxClose = lightbox.querySelector(".lightbox-close");
  const lightboxPrev = lightbox.querySelector(".lightbox-prev");
  const lightboxNext = lightbox.querySelector(".lightbox-next");

  const form = document.getElementById("queries-form");

  /* ==========================================================================
     Navigation
     ========================================================================== */
  const closeMobileMenu = () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  };

  const showSection = (id) => {
    navLinks.forEach((link) =>
      link.classList.toggle("active", link.dataset.section === id)
    );
    sections.forEach((section) =>
      section.classList.toggle("active", section.id === id)
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      showSection(link.dataset.section);
      closeMobileMenu();
    });
  });

  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 768 && !e.target.closest(".navbar")) {
      closeMobileMenu();
    }
  });

  /* ==========================================================================
     Gallery + Lightbox
     ========================================================================== */
  let currentIndex = 0;

  const renderGallery = () => {
    galleryGrid.innerHTML = galleryData
      .map(
        (item, index) => `
          <div class="gallery-item" data-index="${index}">
            <img class="gallery-image" loading="lazy" alt="${item.caption}" src="${IMG + item.src}">
            <div class="gallery-overlay">
              <div class="gallery-caption">${item.caption}</div>
              ${item.date ? `<div class="gallery-date">${item.date}</div>` : ""}
            </div>
            <div class="gallery-icon"><i class="fas fa-expand"></i></div>
          </div>`
      )
      .join("");
  };

  const updateLightbox = () => {
    const item = galleryData[currentIndex];
    lightboxImage.src = IMG + item.src;
    lightboxImage.alt = item.caption;
    lightboxCaption.textContent = item.caption;
  };

  const openLightbox = (index) => {
    currentIndex = index;
    updateLightbox();
    lightbox.style.display = "block";
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
  };

  const step = (direction) => {
    currentIndex = (currentIndex + direction + galleryData.length) % galleryData.length;
    updateLightbox();
  };

  galleryGrid.addEventListener("click", (e) => {
    const item = e.target.closest(".gallery-item");
    if (item) openLightbox(Number(item.dataset.index));
  });

  lightboxClose.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  lightboxPrev.addEventListener("click", (e) => {
    e.stopPropagation();
    step(-1);
  });

  lightboxNext.addEventListener("click", (e) => {
    e.stopPropagation();
    step(1);
  });

  document.addEventListener("keydown", (e) => {
    if (lightbox.style.display !== "block") return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });

  renderGallery();

    /* ==========================================================================
     Scroll reveal animation
     ========================================================================== */
  const revealSelectors = [
    ".info-section",
    ".historical-event",
    ".victory-section",
    ".miracle-section",
    ".relic-section",
    ".succession-section",
    ".artifacts-section",
    ".mutawalli-profile",
    ".majlis-schedule",
    ".prayer-time",
    ".contact-detail",
    ".gallery-item",
    ".connect-icon",
    ".queries-section"
  ].join(",");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(revealSelectors).forEach((el, i) => {
    el.classList.add("reveal");
    el.style.transitionDelay = `${(i % 4) * 80}ms`; // small stagger
    observer.observe(el);
  });
   
   
  /* ==========================================================================
     Contact form → WhatsApp
     ========================================================================== */
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
      const subject = form.subject.value;
      const message = form.message.value.trim();

      if (!name || !email || !subject || !message) {
        alert("Please fill in all required fields.");
        return;
      }

      const text = [
        "*New Query from Website*",
        "",
        `*Name:* ${name}`,
        `*Email:* ${email}`,
        `*Phone:* ${phone || "Not provided"}`,
        `*Subject:* ${subject}`,
        "",
        "*Message:*",
        message
      ].join("\n");

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

      window.open(url, "_blank", "noopener");
      form.reset();
    });
  }
})();
