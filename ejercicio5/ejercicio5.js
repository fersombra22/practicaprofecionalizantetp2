function showAlert() {
    const message = "¡Esto es una alerta personalizada!";
    document.getElementById('alertMessage').textContent = message;
    const alertDialog = document.getElementById('alertDialog');
    alertDialog.showModal();
}

function showConfirm() {
    const message = "¿Estás seguro de continuar?";
    document.getElementById('confirmMessage').textContent = message;
    const confirmDialog = document.getElementById('confirmDialog');
    confirmDialog.showModal();
}

function showPrompt() {
    const message = "Introduce tu nombre:";
    document.getElementById('promptMessage').textContent = message;
    const promptDialog = document.getElementById('promptDialog');
    document.getElementById('promptInput').value = '';
    promptDialog.showModal();
}

function confirmResponse(response) {
    const confirmDialog = document.getElementById('confirmDialog');
    confirmDialog.close();
    if (response) {
        alert("Confirmado");
    } else {
        alert("Cancelado");
    }
}

function promptResponse() {
    const promptDialog = document.getElementById('promptDialog');
    const inputValue = document.getElementById('promptInput').value;
    promptDialog.close();
    if (inputValue) {
        alert("¡Hola, " + inputValue + "!");
    } else {
        alert("No ingresaste ningún valor.");
    }
}

function closeDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    dialog.close();
}
