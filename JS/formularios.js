formulario.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const formData = new FormData(formulario);
    const response = await fetch('/enviar-mensaje', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Object.fromEntries(formData))
    });
  
    if (response.ok) {
      alert('¡Mensaje enviado con éxito!');
      formulario.reset();
    } else {
      alert('Error al enviar el mensaje. Intente de nuevo más tarde.');
    }
  });