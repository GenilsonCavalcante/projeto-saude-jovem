const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
    tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = "auto";
  this.style.height = (this.scrollHeight) + "px";
}

//Ativação do Chat
const ativarChat = document.getElementsByClassName("chat")[0];
const campoTexto = document.getElementById("inputText");

ativarChat.addEventListener("click", function() {
  campoTexto.focus();
});