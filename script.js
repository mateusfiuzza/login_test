const loginForm = document.getElementById('form');
    const message = document.getElementById('msg');

    const usuario = "gg@gmail.com";
    const senha = "1234";

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

      const SeuEmail = document.getElementById('SeuEmail').value;
      const SuaSenha = document.getElementById('SuaSenha').value;

      if (SeuEmail === usuario && SuaSenha === senha) {
        message.textContent = "Login bem-sucedido! ";
        message.style.color = "green";
        window.location.href = "https://www.google.com/search?q=roblox&rlz=1C1FKPE_pt-PTBR1159BR1159&oq=roblox&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIHCAEQABiABDIHCAIQLhiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDEzNTBqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8";

      } else {
        message.textContent = "Usuário ou senha incorretos. 😡";
        message.style.color = "red";
      }
    });
