const parentElement = document.getElementsByTagName("tr")[0].parentNode;
const troisiemeEnfant = parentElement.children[2];
const element = document.createElement('p')
const message = document.createTextNode("Email ne correspond pas")
parentElement.insertBefore(element, troisiemeEnfant.nextSibling);
element.classList.add("cacher");


function ckecking(){
  const form = document.getElementById('form');
  form.email_confirm.addEventListener("input",function(e){
  e.preventDefault();
    form.email_confirm.classList.add("backgroundColor");
    if(form.email.value !== form.email_confirm.value) {
      element.appendChild(message);
      element.classList.remove("cacher");
      element.classList.add("alert");
      form.email_confirm.classList.add("backgroundColor")
    }

    if(form.email.value === form.email_confirm.value){
      form.email_confirm.classList.remove("backgroundColor")
      element.classList.add("cacher");

    }
  })
}



window.onload = ckecking;