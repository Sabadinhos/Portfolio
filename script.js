window.addEventListener("scroll", function () {
  const parallax = document.querySelector(".background-parallax");
  let scrollPosition = window.pageYOffset;

  // Mover o fundo com base no scroll para criar o efeito parallax
  parallax.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
});

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: false
      }
    })
    .to(".image-container img", {
      scale: 2,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut"
    })
    .to(
      ".section.hero",
      {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut"
      },
      "<"
    );

  atualizarData(); // Atualiza a data ao carregar a página
});

window.addEventListener("resize", function () {
  const sections = document.querySelectorAll(".section");
  const windowWidth = window.innerWidth;

  sections.forEach((section) => {
    if (windowWidth < 1697) {
      section.style.width = "100%";
    } else {
      section.style.width = "1697px";
    }
  });
});

// Execute o ajuste no carregamento da página
window.dispatchEvent(new Event("resize"));

// Função para atualizar a data atual
function atualizarData() {
  const agora = new Date();
  const opcoes = { day: "2-digit", month: "long", year: "numeric" };
  const dataFormatada = agora.toLocaleDateString("pt-BR", opcoes);
  document.getElementById("data-status").innerText = dataFormatada;
}
