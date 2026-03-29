const campoSenha = document.getElementById('senha');

campoSenha.addEventListener("input", function() {
  const senha = campoSenha.value;
  if (senha.length >= 8) {
    console.log("Senha válida");
  }
});

function retornaEmail() {
    let email = document.getElementById('email').value;
    return email;
    
}