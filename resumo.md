# Introdução

## Conhecendo seu mundo
Apresentação do framework que te permite escrever a aplicação inteira em JS.
Ele possui seu próprio [package manager](https://atmospherejs.com/), mas pode utilizar o NPM em alguns casos.

## Os 7 princípios do Meteor
- Data on the wire (Não envie HTML pela rede, apenas dados)
- One language (JS everywhere)
- Database anywhere (API de interface única que permite acessar o BD tanto no client quanto no server side)
- Latency compensation
- Full-Stack Reactivity (Framework real-time por default que funciona em cima do paradigma orientado a eventos)
- Embrace the ecosystem (Totalmente open-source)
- Simplicity equals Productivity (Framework de fácil aprendizado e comunidade ativa, o que aumenta muito sua produtividade)

# Configurando o ambiente de desenvolvimento
Neste capítulo o autor faz um passo a passo de como instalar tudo o que é necessário para desenvolvermos aplicações com Meteor.
Depois disso ele faz uma breve explicação de código com um projeto "Hello World" do próprio framework.

# Criando uma rede social real-time

## Projeto piloto: MeteorBird
Aqui o autor apresenta o projeto que desenvolveremos no decorrer do livro, o MeteorBird, que será uma rede social similar ao Twitter porém desenvolvida totalmente com Meteor.

## Funcionalidades da aplicação
- Atualizações da timeline em real-time;
- Sign-up através de e-mail e senha;
- Sign-up através de uma conta no Facebook;
- Acessar perfil de um usuário;
- Follow e unfollow de posts de um usuário;

## Criando o projeto
Comandos básicos para iniciarmos o projeto. Depois disso já criamos algumas pastas que serão a estrutura da aplicação.

# Implementando uma timeline de posts
Iniciamos esse capítulo aplicando o conceito de templates, criando um header e um footer para nossa aplicação, depois disso fizemos o template dos posts.
Com esses templates criados é hora de sermos apresentados ao conceito de `helpers` que são funções que tem como objetivo retornar resultados apresentáveis para os usuários.
Após entender para que serve um `helper`, passamos pela `Session`, que guarda informações no formato chave-valor no lado do cliente, ou seja, ela não faz nenhuma interação com BD e caso a página seja atualizada, os dados da `Session` serão perdidos.
Ainda nesse capítulo o autor nos apresenta o conceito de reatividade, ao criarmos `events`, o exemplo dado é para fazermos a inserção de posts na timeline da aplicação. A aplicação fica escutando o evento de submit do formulário para que possa executar a função.
Chegando no final do capítulo nós vemos como é simples fazer a integração do banco de dados seja pelo `helper` ou `event`.
