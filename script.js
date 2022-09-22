const header = document.querySelector('header');

window.addEventListener("scroll", () => {
  header.classList.toggle('sticky', window.scrollY > 0)
})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
  menu.classList.toggle('fa-xmark')
  navbar.classList.toggle("navbar-open");
}

window.onscroll = () => {
  menu.classList.remove("fa-xmark");
  navbar.classList.remove("navbar-open");
};

const sr = ScrollReveal({
  distance: "60px",
  duration: 2000,
  reset: true,
});

sr.reveal(".home-text", { delay: 100, origin: "left" });
sr.reveal(".home-img", { delay: 100, origin: "right" });

sr.reveal(".container, .about, .menu, .contact", {
  delay: 100,
  origin: "bottom",
});