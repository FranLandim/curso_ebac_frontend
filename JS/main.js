$(document).ready(function() {
  
  $('#cpf').mask('000.000.000-00')
  $('#telefone').mask('(00) 00000-0000')
  $('#cep').mask('00000-000')

  $('form').validate({
    rules: {
      nomeCompleto: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      telefone: {
        required: true
      },
      cpf: {
        required: true
      },
      enderecoCompleto: {
        required: true
      },
      cep: {
        required: true
      },
    },
    submitHandler: function(form) {
      console.log(form);
      Event.preventDefault();
    },
    invalidHandler: function (validator) {
      let camposIncorretos = validator.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`)
      };
    }
  })

  $('form').submit(function(e) {
    e.preventDefault();
  });

});