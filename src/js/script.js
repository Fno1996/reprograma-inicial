
const users = [
	{
		login: 'brunohs',
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
function ValidateForm(){
    const btn =document.querySelector("#form");
    btn.addEventListener("click", function(e){
        e.preventDefault();
        const email = document.querySelector("#form");
        const value = email.value;
        console.log(value);
});
}
function validaLogin(param) {
    const login = users.find(el => el.email === param);
    var input = document.querySelector("#email");
    if (email === undefined) {
        alert('Não encontramos esse usuário');
    } else {
      alert(`O usuário ${email.email} foi encontrado.`)
    }
}
function somarIdade() {
    const idades = users.map(user => user.age);
    
    console.log(idades);
    
    const soma = idades.reduce((previous, current) => previous + current, 0);
    
    console.log(soma);
  }

    /*
        1. Referenciar elementos dos campos do formulário pelo ID
        2. Verificar se a senha e o e-mail estão válidos 
        3. Se tudo estiver ok, alertar o usuário que o formulário foi submetido

        Plus: Alertar o usuário quando o e-mail ou senha estiverem vazios ou incorretos.
    */
