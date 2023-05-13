const inputName = document.forms.cadastro.name;


inputName.addEventListener('keyup', event => 
    console.log(event.target.value)
);