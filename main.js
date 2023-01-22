const form = document.getElementById('form-validacao');
const valorA = document.getElementById('Campo A');
const valorB = document.getElementById('Campo B');
let formEValido = false;

function maiorMenor (fieldA, fieldB) {
  return fieldB > fieldA;
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const mensagemSucesso = `O valor do Campo B <b>${valorB.value}</b> é maior que o valor do Campo A <b>${valorA.value}</b>.`;
  const containerMensagemSucesso = document.querySelector('.success-message');
  const containerMensagemErro = document.querySelector('.error-message');
  formEValido = maiorMenor (valorA.value, valorB.value);
  if (formEValido) {
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';
    containerMensagemErro.style.display = 'none';
    valorA.value = '';
    valorB.value = '';
  } else {
    containerMensagemErro.style.display = 'block';
    containerMensagemSucesso.style.display = 'none';
  }
});