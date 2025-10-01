document.addEventListener('DOMContentLoaded', () => {

    /********* MENU MOBILE *********/
    const botao_menu = document.querySelector('.botao_menu');
    const menu_mobile = document.querySelector('#nav');

    botao_menu.addEventListener('click', () => {
        if(menu_mobile.style.display === 'block'){
            menu_mobile.style.display = 'none';
            document.querySelector('.menu').src = 'imagens/menu.png';
        }else{
            menu_mobile.style.display = 'block';
            document.querySelector('.menu').src = 'imagens/menu2.png';
        }
    });

    window.onresize = () => {
        const largura_tela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (largura_tela > 768) {
            menu_mobile.style.display = 'block';
        }else{
            menu_mobile.style.display = 'none';
            document.querySelector('.menu').src = 'imagens/menu.png';
        }
    };

    
    /********* LOGIN USANDO LOCALSTORAGE *********/

    // cadastro
    const formulario_cadastro = document.getElementById('formulario_cadastro');
    if(formulario_cadastro){
        formulario_cadastro.addEventListener('submit', (evento) => {
            evento.preventDefault();

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const senha = document.getElementById('senha').value;

            const novoUsuario = { nome, email, telefone, senha };

            // Recupera lista existente ou cria nova
            let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

            // Verifica se o e-mail já existe
            const existe = usuarios.some(u => u.email === email);
            if (existe) {
                alert('Este e-mail já está cadastrado!');
                return;
            }

            usuarios.push(novoUsuario);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            alert('Usuário cadastrado com sucesso!');
            window.location.href = 'login.html';
        });
    }

    // login
    const formulario_login = document.getElementById('formulario_login');
    if(formulario_login){
        formulario_login.addEventListener('submit', (evento) => {
            evento.preventDefault();

            const email_login = document.getElementById('email_login').value;
            const senha_login = document.getElementById('senha_login').value;

            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

            const usuarioLogado = usuarios.find(u => u.email === email_login && u.senha === senha_login);

            if(usuarioLogado){
                localStorage.setItem('logado', JSON.stringify(usuarioLogado));
                alert('Login realizado com sucesso!');
                window.location.href = 'agendamento.html';
            }else{
                alert('Usuário ou senha incorretos!');
            }
        });
    }

    // logout
    const logout = document.getElementById('logout');
    if(logout){
        logout.addEventListener('click', () => {
            localStorage.removeItem('logado');
            alert('Você saiu da sua conta!');
            window.location.href = 'login.html';
        });
    }


    /**************** AGENDAMENTO ****************/
    const formulario_agendamento = document.getElementById('formulario_agendamento');
    if(formulario_agendamento){
        const usuarioLogado = JSON.parse(localStorage.getItem('logado'));
        
        if(usuarioLogado){
            document.getElementById('mensagem').textContent = "Bem-vindo(a), "+usuarioLogado.nome+"!";
            document.getElementById('nome').value = usuarioLogado.nome;
            document.getElementById('email').value = usuarioLogado.email;
            document.getElementById('telefone').value = usuarioLogado.telefone;
        } else {
            alert('Você precisa estar logado para agendar!');
            window.location.href = 'login.html';
        }

        formulario_agendamento.addEventListener('submit', (evento) => {
            evento.preventDefault();
            alert('Agendamento realizado com sucesso!');
            window.location.href = 'agendamento.html';
        });
    }    

});





