const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    // Toggle menu on button click
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent closing immediately
      navLinks.classList.toggle("active");
      menuToggle.innerHTML = navLinks.classList.contains("active") ? "&times;" : "&#9776;";
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (navLinks.classList.contains("active") && 
          !navLinks.contains(e.target) && 
          e.target !== menuToggle) {
        navLinks.classList.remove("active");
        menuToggle.innerHTML = "&#9776;";
      }
    });


const contactBtn = document.getElementById("contactMainBtn");
const closeBtn = document.getElementById("contactCloseBtn");
const icons = document.getElementById("contactIcons");

contactBtn.addEventListener("click", () => {
    icons.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    icons.classList.remove("open");
});


// const chatWidgetBtn = document.getElementById("chatWidgetBtn");
// const chatPopup = document.getElementById("chatPopup");
// const chatCloseBtn = document.getElementById("chatCloseBtn");

// chatWidgetBtn.addEventListener("click", () => {
//     chatPopup.classList.add("open");
// });

// chatCloseBtn.addEventListener("click", () => {
//     chatPopup.classList.remove("open");
// });


// const chatMessages = document.getElementById("chatMessages");
// const chatInput = document.getElementById("chatInput");
// const chatSendBtn = document.getElementById("chatSendBtn");


// function botReply(message) {
//     message = message.toLowerCase();

//     if(message.includes("hello") || message.includes("hi")) {
//         return "Hello! How can we assist you today? 😊";
//     }
//     if(message.includes("track") || message.includes("tracking")) {
//         return "To track your package, go to the Tracking page and enter your tracking number 📦.";
//     }
//     if(message.includes("price") || message.includes("quote") || message.includes("cost")) {
//         return "For shipment pricing, please visit our 'Get a Quote' page.";
//     }
//     if(message.includes("contact") || message.includes("phone") || message.includes("number")) {
//         return "You can reach our support team via the Contact page 📞.";
//     }

//     return "I'm here to help! 😊 Can you please provide more details?";
// }


// function addMessage(text, sender = "user") {
//     const messageEl = document.createElement("div");
//     messageEl.classList.add("msg", sender);
//     messageEl.textContent = text;
//     chatMessages.appendChild(messageEl);
//     chatMessages.scrollTop = chatMessages.scrollHeight;
// }


// function botTypingEffect(replyText) {
//     const typing = document.createElement("div");
//     typing.classList.add("msg", "bot");
//     typing.textContent = "Typing...";
//     chatMessages.appendChild(typing);

//     chatMessages.scrollTop = chatMessages.scrollHeight;

//     setTimeout(() => {
//         typing.remove();
//         addMessage(replyText, "bot");
//     }, 1300);
// }


// function sendMessage() {
//     const userMessage = chatInput.value.trim();
//     if (!userMessage) return;

//     addMessage(userMessage, "user");
//     chatInput.value = "";

//     const replyText = botReply(userMessage);
//     botTypingEffect(replyText);
// }

// chatSendBtn.addEventListener("click", sendMessage);
// chatInput.addEventListener("keypress", (e) => {
//     if (e.key === "Enter") {
//         e.preventDefault();
//         sendMessage();
//     }
// });



// ===== Stats Counter That Repeats On Scroll ===== //
const counters = document.querySelectorAll(".count");

const startCounting = (counter) => {
  const target = +counter.getAttribute("data-target");
  let count = 0;
  const speed = target / 200; // Adjust speed here

  const updateCount = () => {
    if (count < target) {
      count += speed;
      counter.textContent = Math.floor(count);
      requestAnimationFrame(updateCount);
    } else {
      counter.textContent = target;
    }
  };

  updateCount();
};

// Create Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const counter = entry.target;

      if (entry.isIntersecting) {
        // Start counting when entering view
        startCounting(counter);
      } else {
        // Reset when leaving view so it counts again
        counter.textContent = "0";
      }
    });
  },
  { threshold: 0.5 } // triggers when half is in view
);

// Observe each counter element
counters.forEach((counter) => {
  observer.observe(counter);
});








    


    // Basic reveal
  ScrollReveal().reveal('.reveal', {
    duration: 1200,
    distance: '50px',
    easing: 'ease-in-out',
    origin: 'bottom',
    reset: false // if true, animates every time you scroll back
  });

  // Example: you can target specific sections differently
    ScrollReveal().reveal('.timeline-item', { origin: 'left', distance: '80px', duration: 1400 });
    ScrollReveal().reveal('.service-card', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.tracking-banner', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.tracking-form-section', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.tracking-result', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.service-box', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.hero-services', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.solutions-banner', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.solutions-intro', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.features-grid', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.feature-card', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.solutions-process', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.contact-info', { origin: 'left', distance: '80px', duration: 1400 });
    ScrollReveal().reveal('.contact-form', { origin: 'right', distance: '80px', duration: 1400 });
    ScrollReveal().reveal('.solution-card', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.footer-column', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.hero-content', { origin: 'top', distance: '60px', duration: 1000 });
    ScrollReveal().reveal('.hero-image', { origin: 'bottom', distance: '60px', duration: 1000 });
    ScrollReveal().reveal('.about-stats', { origin: 'bottom', distance: '60px', duration: 1000 });
    ScrollReveal().reveal('.about-content', { origin: 'left', distance: '80px', duration: 1400 });
    ScrollReveal().reveal('.about-image', { origin: 'right', distance: '80px', duration: 1400 });
    ScrollReveal().reveal('.accordion-item', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.solutions-industries', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.solutions-contact-info', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.footer', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.contact-hero', { origin: 'top', distance: '60px', duration: 1000 });
    ScrollReveal().reveal('.contact-details', { origin: 'left', distance: '80px', duration: 1400 });
    ScrollReveal().reveal('.contact-form-section', { origin: 'right', distance: '80px', duration: 1400 });
    ScrollReveal().reveal('.map-container', { origin: 'bottom', distance: '60px', duration: 1000 });
    ScrollReveal().reveal('.tracking-hero', { origin: 'top', distance: '60px', duration: 1000 });
    ScrollReveal().reveal('.tracking-info', { origin: 'left', distance: '80px', duration: 1400 });
    ScrollReveal().reveal('.tracking-form-container', { origin: 'right', distance: '80px', duration: 1400 });
    ScrollReveal().reveal('.tracking-instructions', { origin: 'bottom', distance: '60px', duration: 1000 });
    ScrollReveal().reveal('.tracking-support', { origin: 'bottom', distance: '60px', duration: 1000 });
    ScrollReveal().reveal('.service-hero', { origin: 'top', distance: '60px', duration: 1000 });
    ScrollReveal().reveal('.service-intro', { origin: 'bottom', distance: '60px', duration: 1000 });
    ScrollReveal().reveal('.faq-section', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.services-list', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.service-details', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.service-benefits', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.service-process', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.service-contact', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.testimonial', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.image-container', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.stats', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.services-container', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.benefit-header', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
    ScrollReveal().reveal('.benefit-cards', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });
     ScrollReveal().reveal('.nav-links', { origin: 'bottom', distance: '60px', duration: 1000, interval: 200 });

    