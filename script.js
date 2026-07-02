const form = document.getElementById("form"); 


function handleSubmit(e){
  e.preventDefault()

  const data = {};
  const fields = e.target.querySelectorAll("input:not([type='submit'])");

  for (let field of fields){
    data[field.name] = field.value;
  }

  console.log(data);
}

form.addEventListener("submit", (e) => {
  handleSubmit(e);
});


