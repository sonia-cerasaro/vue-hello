// stampare a schermo un messaggio all'interno
// di un h1 utillizando i data

// Aggiungere alla pagina un’immagine,
//  presa anch’essa da un data.

var vue = new Vue(
  {
    el: '#root',
    data: {
    classeRed: 'saluto',
    messaggioInInput: '',
    message: 'Hello Mars!',
    mieClassi: 'blu',
    image: './mars.jpeg' 
  }
  });
