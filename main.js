const form = document.getElementById("form-validacao");
let formEValido = false;

function maiorMenor(fieldA, fieldB) {
  return fieldB > fieldA;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const valorA = parseInt(document.getElementById("Campo A").value);
  const valorB = parseInt(document.getElementById("Campo B").value);
  const mensagemSucesso = `O valor do Campo B <b>${valorB}</b> é maior que o valor do Campo A <b>${valorA}</b>.`;
  const containerMensagemSucesso = document.querySelector(".success-message");
  const containerMensagemErro = document.querySelector(".error-message");
  formEValido = maiorMenor(valorA, valorB);
  if (formEValido) {
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = "block";
    containerMensagemErro.style.display = "none";
    /*valorA = '';
    valorB = '';*/
  } else {
    containerMensagemErro.style.display = "block";
    containerMensagemSucesso.style.display = "none";
  }
});
