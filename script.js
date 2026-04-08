const text = "Estudante de Ciência da Computação, direcionando meus estudos para desenvolvimento backend e construindo meu portfólio na prática.";
const typingElement = document.getElementById("typing-text");

let index = 0;

function typeText() {
  if (!typingElement) return;

  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 30);
  }
}

typeText();

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const visiblePoint = 100;

    if (elementTop < windowHeight - visiblePoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (!backToTopButton) return;

  if (window.scrollY > 300) {
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
});

if (backToTopButton) {
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
