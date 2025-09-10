// Função para rolar suavemente até a seção
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Acessibilidade: alerta no envio de formulário
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Mensagem enviada com sucesso! Obrigado pelo contato.");
});
