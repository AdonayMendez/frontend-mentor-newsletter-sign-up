const form = document.getElementById("form"); 
const successMsgPopup = document.getElementById("successMsgPopup");
const submit = document.getElementById("submit");
const inputField = document.getElementById("email"); 


function handleSubmit(e){
  e.preventDefault();
  
  const data = {};
  const emailField = document.getElementById("email");
  data[emailField.name] = emailField.value;
  console.log(data);

  showSuccessScreen();
}

function showSuccessScreen(){
  const isShown = successMsgPopup.classList.toggle("show"); 

  submit.textContent = isShown ? "Dismiss Message" : "Submit";
}

form.addEventListener("submit", (e) => {
  handleSubmit(e);
});


