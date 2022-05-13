
const users = [
	{
		login: "brunohs",
		email: 'brunohs@pbtech.net.br',
		age: 18
	},
	{
		login: 'thainabcc',
		email: 'thaina.biudes@gmail.com',
		age: 25
	},
	{
		login: 'annecl',
		email: 'annecl@pbtech.net.br',
		age: 34
	},
    {
        login: 'willianfl',
        email: 'willianfl@pbtech.net.br',
        age: 30
    },
    {
        login: 'lucasplc',
        email: 'lucasplc@pbtech.net.br',
        age: 20
    }
];

 function validar(){
	 var email = document.getElementById("email");
	 var senha = document.getElementById("senha");
	 if (email.value == ""){
		 alert("E-mail não informado");
		 email.focus();
		 return;
	 }
if(senha.value == ""){
	alert("Senha não informada");
	senha.focus();
	return;
}
alert("Formulário enviado!")
}

function mostrarEmails(param) {
	const lista = users.map(el => el.email);
	
	console.log(`A lista de e-mail foi ${lista}`);
  }
  
   mostrarEmails();

 function validaLogin(param) {
	const email = users.find(el => el.email === param);
	
	if (email === undefined) {
	  console.log('Não encontramos esse usuário');
	} else {
	  console.log(`O usuário ${email.email} foi encontrado.`) // "O usuário" + login + "foi encotrado."
	}
  }

function somarIdade() {
	const idades = users.map(user => user.age);
	
	console.log(idades);
	
	const soma = idades.reduce((previous, current) => previous + current, 0);
	
	console.log(soma);
}
  somarIdade();

  