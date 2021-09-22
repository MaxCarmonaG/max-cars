const formInputs = document.getElementsByClassName("form-input");

for(let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("blur", e => {
    if(e.target.value === "") {
      document.getElementById(e.target.id).classList.add("input-invalido");
      document.getElementById(`valida-${e.target.id}`).classList.add("invalido");
    } else {
      document.getElementById(e.target.id).classList.remove("input-invalido");
      document.getElementById(`valida-${e.target.id}`).classList.remove("invalido");
    }
  });
}

const insertCliente = event => {
  event.preventDefault();
}

const limpiarCampos = () => {
  const validadores = document.getElementsByClassName("validacion");

  for(let i = 0; i < validadores.length; i++) {
    validadores[i].classList.remove("invalido");
  }

  for(let i = 0; i < formInputs.length; i++) {
    formInputs[i].classList.remove("input-invalido");
  }
}
