const loginForm = document.getElementById('form');
    const message = document.getElementById('msg');

    // Usuário e senha "fake" pra exemplo
    const usuario = "gg@gmail.com";
    const senha = "1234";

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita recarregar a página

      const SeuEmail = document.getElementById('SeuEmail').value;
      const SuaSenha = document.getElementById('SuaSenha').value;

      if (SeuEmail === usuario && SuaSenha === senha) {
        message.textContent = "Login bem-sucedido! ";
        message.style.color = "green";

      } else {
        message.textContent = "Usuário ou senha incorretos. 😡";
        message.style.color = "red";
      }
    });