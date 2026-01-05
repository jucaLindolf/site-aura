const mensagens = [
  "te gosto muitão💕",
  "Eu te amo minha pretona❤️",
  "uma gatinha vc 😻",
  "i miss you 💖",
  "Não aguento mais ficar longe de vc 😢",
];

let indice = 0;

function trocarMensagem() {
  document.getElementById("mensagem").innerText = mensagens[indice];
  indice++;

  if (indice >= mensagens.length) {
    indice = 0;
  }
}
