
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
validaEmail(email.value)
ValidarSenha(senha.value)
 }
   function validaEmail(param) {
	 const email = users.find(el => el.email === param);
	
	if (email === undefined) {
	alert("Não encontramos esse usuário");
	} else {
	  alert(`O usuário ${email.email} foi encontrado.`) 
	}
  }

 function ValidarSenha() {
	const idades = users.map(user => user.age);
	const soma = idades.reduce((previous, current) => previous + current,0);
if (senha === soma ) {
	alert("Formulário enviado com sucesso!!");
}else {
	alert("Senha incorreta")
}
 }
  