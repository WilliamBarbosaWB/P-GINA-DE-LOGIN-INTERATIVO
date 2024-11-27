document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");
  const botaoCadastro = document.getElementById("botaoCadastro");
  const botaoLogin = document.getElementById("botaoLogin");

  if (botaoCadastro && botaoLogin && card) {
    // Alternar para a tela de cadastro
    botaoCadastro.addEventListener("click", () => {
      card.classList.remove("loginActive");
      card.classList.add("cadastroActive");
    });

    // Alternar para a tela de login
    botaoLogin.addEventListener("click", () => {
      card.classList.remove("cadastroActive");
      card.classList.add("loginActive");
    });
  } else {
    console.error("Botões ou card não encontrados.");
  }
});
