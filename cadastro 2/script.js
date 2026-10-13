const cpf = document.getElementById("cpf");
const telefone = document.getElementById("telefone");
const senha = document.getElementById("senha");
const erro = document.getElementById("erro");
const btn = document.getElementById("btnEntrar");

btn.addEventListener("click", function() {
  if (cpf.value === "" || telefone.value === "" || senha.value === "") {
    erro.innerText = "Preencha todos os campos!";
  } else {
    erro.innerText = "";
    alert("Login feito! CPF: " + cpf.value);
  }
});