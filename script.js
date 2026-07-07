const form = document.getElementById("form"); 
const successMsgPopup = document.getElementById("successMsgPopup");
const submit = document.getElementById("submit");
const inputField = document.getElementById("email"); 
const conformationMsg = document.getElementById("conformationMsg");
const newsletterContainer = document.getElementById("newsletterContainer");
const successMessagePopupContainer = document.getElementById("successMessagePopupContainer");
const dismissBtn = document.getElementById("dismissBtn");




function handleSubmit(e){
  e.preventDefault();
  
  const data = {};
  const emailField = document.getElementById("email");

  // Adds a property with the name given in the name attribute in the input
  // Sets the property value equal to what the user entered 
  data[emailField.name] = emailField.value;
  console.log(data);

  showSuccessScreen();

  conformationMsg.innerHTML = `
  A confirmation email has been sent to <span>${emailField.value}</span>.
  Please open it and click the button inside to confirm your subscription
  `;
}

function showSuccessScreen(){
  successMessagePopupContainer.classList.toggle("show");
  successMsgPopup.classList.add("show"); 
  // submit.textContent = isShown ? "Dismiss Message" : "Submit";
  // newsletterContainer.classList.toggle("hide");
}

function hideSuccessScreen(){
  successMessagePopupContainer.classList.toggle("show");
  successMsgPopup.classList.remove("show"); 
}

form.addEventListener("submit", (e) => {
  handleSubmit(e);
});

dismissBtn.addEventListener("click", hideSuccessScreen); 


