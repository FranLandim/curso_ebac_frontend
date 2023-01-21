let form = document.getElementById("form-validacao");
form.addEventListener("submit", function (event) {
  let fieldA = document.getElementById("Campo A").value;
  let fieldB = document.getElementById("Campo B").value;
  let message = document.querySelector(".mensagemValidacao");
  if (fieldA > fieldB) {
    message.textContent = "Campo A não pode ser maior que Campo B!";
    event.preventDefault();
  } else {
    message.textContent = "Formulário validado, Campo B é maior que Campo A!";
  }
});
