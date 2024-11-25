// Seleziono gli elementi
const fullNameField = document.getElementById('fullname-field');
const kilometersField = document.getElementById('kilometers-field');
const form = document.querySelector('form');
const generate = document.getElementById('submit');
const undo = document.getElementById('reset');
const ticket = document.querySelector('.ticket');

undo.addEventListener('click', resetForm)
generate.addEventListener('click', showTicket)


function resetForm() {
    fullNameField.value = '';
    kilometersField.value = '';
    ticket.classList.add('hide');
  }

function showTicket(){
  ticket.classList.remove('hide');
}