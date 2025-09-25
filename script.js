//efek hero typing
const heroTitle = document.querySelector(".hero-left h1");
const text = "Hai — ini Wulan. Mahasiswa Informatika Universitas Jember Angkatan 2024.";
let idx = 0;

function typeHero() {
  if (idx <= text.length) {
    heroTitle.innerHTML =
      text.slice(0, idx) +
      "<span style='border-right:2px solid var(--accent)'></span>";
    idx++;
    setTimeout(typeHero, 80);
  } else {
    heroTitle.innerHTML = text;
    heroTitle.classList.add("float");
  }
}
typeHero();


//SCROLL REVEAL SETUP
function revealOnScroll() {
  const reveals = document.querySelectorAll("section");
  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight - 80) {
      section.classList.add("show");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();



//ABOUT
const aboutImg = document.querySelector(".about img");
const aboutText = document.querySelector(".about .text");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      aboutImg.classList.add("fade-up");
      aboutText.classList.add("fade-up-delay");
    } else {
      aboutImg.classList.remove("fade-up");
      aboutText.classList.remove("fade-up-delay");
    }
  });
}, { threshold: 0.2 }); 

observer.observe(aboutImg);
observer.observe(aboutText);



// EDU
const eduPhotos = document.querySelectorAll(".edu-photos img");
window.addEventListener("scroll", () => {
  eduPhotos.forEach(photo => {
    const pos = photo.getBoundingClientRect().top;
    if (pos < window.innerHeight - 80) {
      photo.classList.add("zoom-in");
    }
  });
});



// PROJECTS 
const projectCards = document.querySelectorAll(".projects article");
window.addEventListener("scroll", () => {
  projectCards.forEach(card => {
    const pos = card.getBoundingClientRect().top;
    if (pos < window.innerHeight - 80) {
      card.classList.add("pop-up");
    }
  });
});



// SOCIAL
const socialCards = document.querySelectorAll(".social-card");
window.addEventListener("scroll", () => {
  socialCards.forEach(card => {
    const pos = card.getBoundingClientRect().top;
    if (pos < window.innerHeight - 80) {
      card.classList.add("bounce");
    }
  });
});

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const mTitle = document.getElementById("mTitle");
const mDesc = document.getElementById("mDesc");

projectCards.forEach(card => {
  card.addEventListener("click", () => {
    mTitle.textContent = card.querySelector("h3").innerText;
    mDesc.textContent = card.querySelector("p").innerText;
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
});

modal.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
