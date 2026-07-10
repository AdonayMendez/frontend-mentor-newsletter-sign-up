const form = document.getElementById("form"); 
const successMsgPopup = document.getElementById("successMsgPopup");
const submit = document.getElementById("submit");
const conformationMsg = document.getElementById("conformationMsg");
const newsletterContainer = document.getElementById("newsletterContainer");
const successMessagePopupContainer = document.getElementById("successMessagePopupContainer");
const dismissBtn = document.getElementById("dismissBtn");
const errorMessage = document.querySelector(".error-message"); 



function handleSubmit(e){
  e.preventDefault();

  const emailField = document.getElementById("email");



  if(emailField.value === ""){
    errorMessage.textContent = "Email is required";
    errorMessage.classList.add("show"); 
    emailField.classList.add("error");
    return; 
  }

  
  if(!emailField.validity.valid){
    errorMessage.textContent = "Valid email required"
    errorMessage.classList.add("show"); 
    emailField.classList.add("error");
    return; 
  }

  errorMessage.classList.remove("show");
  emailField.classList.remove("error");


  const data = {};

  // Adds a property with the name given in the name attribute in the input
  // Sets the property value equal to what the user entered 
  data[emailField.name] = emailField.value;
  console.log(data);

  conformationMsg.innerHTML = `
  A confirmation email has been sent to <span>${emailField.value}</span>.
  Please open it and click the button inside to confirm your subscription
  `;

  showSuccessScreen();
}

function showSuccessScreen(){
  successMessagePopupContainer.classList.toggle("show");
  successMsgPopup.classList.add("show"); 
}

function hideSuccessScreen(){
  successMessagePopupContainer.classList.toggle("show");
  successMsgPopup.classList.remove("show"); 
}

form.addEventListener("submit", (e) => {
  handleSubmit(e);
});

dismissBtn.addEventListener("click", hideSuccessScreen); 


