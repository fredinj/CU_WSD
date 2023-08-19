function alertText(text) {

  const form_name=document.getElementById("name").value;
  alert("Thank you "+form_name+" for the message :)");

}

function openModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'block';
}

function closeModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
}