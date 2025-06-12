document.addEventListener('DOMContentLoaded', () => {
  const initialScreen = document.getElementById("initial-screen");
  const animationContainer = document.getElementById("animation-container");
  const startButton = document.getElementById("start-animation-button");
  const conteudoFinal = document.getElementById("conteudo");

  startButton.addEventListener("click", () => {
    initialScreen.style.display = "none";
    animationContainer.style.display = "block";
    document.body.classList.remove("not-loaded");

    setTimeout(() => {
      animationContainer.style.zIndex = "1";
      conteudoFinal.classList.remove('hidden');
      conteudoFinal.classList.add('show-modal');
      document.body.classList.remove('overflow-hidden');
      document.body.classList.add('modal-active');
    }, 5000);
  });

  // Contador
  function atualizarContador() {
    const inicio = new Date('2023-07-08T00:00:00');
    const agora = new Date();
    const diff = agora - inicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    document.getElementById("dias").textContent = dias.toString();
    document.getElementById("horas").textContent = horas.toString().padStart(2, '0');
    document.getElementById("minutos").textContent = minutos.toString().padStart(2, '0');
    document.getElementById("segundos").textContent = segundos.toString().padStart(2, '0');
  }

  setInterval(atualizarContador, 1000);
  atualizarContador();

  // Carrossel com fade
  const fotos = [
    { src: 'img/photo1.jpeg', caption: 'Nosso segundo casamento juntos' },
    { src: 'img/photo2.jpeg', caption: 'Nossa hospedagem em Caldas' },
    { src: 'img/photo3.jpeg', caption: 'Primeira formatura juntos' },
    { src: 'img/photo4.jpeg', caption: 'Nosso jantar em Buriti' },
    { src: 'img/photo5.jpeg', caption: 'E o Mc que não poderia faltar' },
  ];

  let indice = 0;
  const imagem = document.getElementById("carousel-image");
  const legenda = document.getElementById("carousel-caption");

  function trocarImagem() {
    imagem.classList.remove("show");
    legenda.classList.remove("show");

    setTimeout(() => {
      indice = (indice + 1) % fotos.length;
      imagem.src = fotos[indice].src;
      legenda.textContent = fotos[indice].caption;

      imagem.onload = () => {
        imagem.classList.add("show");
        legenda.classList.add("show");
      };
    }, 1000);
  }

  imagem.classList.add("show");
  legenda.classList.add("show");

  setInterval(trocarImagem, 5000);
});
