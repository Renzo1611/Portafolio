const formulario = document.querySelector('.formulario-cuerpo');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const asuntoInput = document.getElementById('asunto');
const mensajeInput = document.getElementById('mensaje');
const botonEnviar = document.querySelector('.botonEnviar');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  if (nombreInput.value.trim() === '' || nombreInput.value.length > 50) {
    alert('El nombre debe tener entre 1 y 50 caracteres');
    nombreInput.focus();
    return;
  }

  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value.trim() === '' || !emailRegex.test(emailInput.value)) {
    alert('Ingrese un correo electrónico válido');
    emailInput.focus();
    return;
  }

  
  if (asuntoInput.value.trim() === '' || asuntoInput.value.length > 50) {
    alert('El asunto debe tener entre 1 y 50 caracteres');
    asuntoInput.focus();
    return;
  }

  
  if (mensajeInput.value.trim() === '' || mensajeInput.value.length > 300) {
    alert('El mensaje debe tener entre 1 y 300 caracteres');
    mensajeInput.focus();
    return;
  }

  
  alert('Mensaje enviado correctamente');
  formulario.submit();
});


nombreInput.addEventListener('input', toggleBotonEnviar);
emailInput.addEventListener('input', toggleBotonEnviar);
asuntoInput.addEventListener('input', toggleBotonEnviar);
mensajeInput.addEventListener('input', toggleBotonEnviar);

function toggleBotonEnviar() {
  if (
    nombreInput.value.trim() !== '' &&
    emailInput.value.trim() !== '' &&
    asuntoInput.value.trim() !== '' &&
    mensajeInput.value.trim() !== ''
  ) {
    botonEnviar.removeAttribute('disabled');
  } else {
    botonEnviar.setAttribute('disabled', 'disabled');
  }
}
