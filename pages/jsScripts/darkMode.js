/* Dark mode*/
const darkBtn = document.getElementById("darkToggle");
const body = document.body;
if (localStorage.getItem("dark") === "1") {
  body.classList.add("dark");
  darkBtn.textContent = "☀️";
}
darkBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const on = body.classList.contains("dark");
  darkBtn.textContent = on ? "☀️" : "🌙";
  localStorage.setItem("dark", on ? "1" : "0");
});

// Hamburger / mobile nav
const ham = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");

function openNav() {
  ham.classList.add("open");
  nav.classList.add("open");
  overlay.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeNav() {
  ham.classList.remove("open");
  nav.classList.remove("open");
  overlay.classList.remove("show");
  document.body.style.overflow = "";
}

ham.addEventListener("click", () =>
  nav.classList.contains("open") ? closeNav() : openNav(),
);
overlay.addEventListener("click", closeNav);
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));

// Scroll: header shadow + reveal animations
const header = document.getElementById("header");
const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        revealObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);

reveals.forEach((r) => revealObserver.observe(r));

window.addEventListener(
  "scroll",
  () => {
    header.classList.toggle("scrolled", window.scrollY > 10);
  },
  { passive: true },
);
