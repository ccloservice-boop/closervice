const carousel = document.getElementById("carousel");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let autoPlay;

// Scroll manual
next.onclick = () => scroll(300);
prev.onclick = () => scroll(-300);

function scroll(value){
  carousel.scrollBy({ left: value, behavior: "smooth" });
}

// AUTO PLAY inteligente
function startAuto(){
  autoPlay = setInterval(() => scroll(250), 4000);
}

function stopAuto(){
  clearInterval(autoPlay);
}

carousel.addEventListener("mouseenter", stopAuto);
carousel.addEventListener("mouseleave", startAuto);

startAuto();

// SWIPE MOBILE
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener("mousedown", e => {
  isDown = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("mouseleave", () => isDown = false);
carousel.addEventListener("mouseup", () => isDown = false);

carousel.addEventListener("mousemove", e => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2;
  carousel.scrollLeft = scrollLeft - walk;
});

// MODAL + CTA DINÂMICO
const modal = document.getElementById("modalUltra");
const antes = document.getElementById("imgAntes");
const depois = document.getElementById("imgDepois");
const cta = document.getElementById("ctaWhatsapp");

document.querySelectorAll(".card").forEach(card => {
  card.onclick = () => {
    antes.src = card.dataset.antes;
    depois.src = card.dataset.depois;

    const servico = card.dataset.servico;

    cta.href = `https://wa.me/5531999999999?text=Quero%20um%20orçamento%20de%20${servico}`;

    modal.style.display = "block";
  }
});

document.querySelector(".close").onclick = () => modal.style.display = "none";
modal.onclick = () => modal.style.display = "none";