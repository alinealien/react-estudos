#### INTRODUÇÃO AO REACTJS

____________________________________________

##### História e Conceitos

- "Uma biblioteca JavaScript para criar interfaces de usuários"
- Criado em 2011 por Jordan Walker no Facebook;
- Baseado no XHP, um framework para criação de HTML no PHP;
- Utilizado no mural de notícias de ferramentas
- React é uma biblioteca e não um framework;
- A principal função é a criação da interface para o usuário;
- Modular são pequenas peças que vamos acoplando ao longo do projeot
- React é um a linguagem declarativa
- Declarativa vs Imperativa
- O React está preocupado apenas com o que é exibido na interface do usuário
- Pode ser utilizado em qualquer lugar
- 
- React baseado em componentes

##### Configurações

- PRIMEIRO: npm init (vai inicializar a npm)

- PARA INSTALAR O REACT:  npm install --save react@16.8.6 react-dom@16.8.6  react-scripts@3.0.1  (A versao pode ser alterada)
- Package.json : É onde fica todas as configurações/dependências do projeto
- NPM : É o gerenciador de dependências do JavaScript                                        

#### O que é JSX

Ele não é HTML e nem string

ex: const element = <h1> Ola Mundo! </h1>

- Linguagem de marcação criada para poder utilizar/criar elementos dentro do html. Criar toda sua extrutura HTML e ter todo o poder do JavaScript dentro dele. Pode-se utilizar/executar funções JavaScript, ter variaveis dentro do JSX.
- React não separa as tecnologias colocando marcação em arquivos separados, e sim, separa conceitos e mantem o código pouco acoplado chamando-os de componentes.
- Não é obrigatório a utilização do JSX
- Sintax Suggar para React.creatElement
- O browser não interpreta o JSX, para isso é necessario um transpilador para que a aplicação possa entender o código. O mais utilizado é o Babel.

EX.: NO VS.



OBS:

 "scripts": 

  "start":  react-scripts start



class (palavra reservada do react) ... utilizar className=" nome da classe "



#### REENDERIZAÇÃO

React DOM: reinderizar os elementos do react

Nós Raís : tudo que é retornado do JSX é um nó



#### COMPONENTES E PROPS

Função e Classe;

Props;

Composição de Componentes;

Extração de Componentes;



#### ESTADO E CICLO DE VIDA

- Inicialização 
- Montagem  
- Atualização  
- Desmontagem 

* Nenhum componente pai ou filho devem saber se o outro componente possui estado ou não.

- O estado é apenas local ao componente e caso seja necessário enviar algum atributo para outro então é feito via **props**.

##### Ecossistemas

- React Router;
- Redux;
- Material UI;
- Ant-Desing;
- Gastsby;
- Jest;
- React i18n Next;



#### WEBPACK

- É um **module bundler** (um empacotador de módulos para aplicações JS)
- Gerar bundler que será utilizado no HTML, em ES5

Suporte

- Fontes;
- CSS;
- Imagens;
- HTML;
- JS;
- Plugins;

Principais Conceitos do Webpack:

- Entry - Utilizando grafo, o Webpack precisa de um ponto de entrada para buscar todos os módulos e dependências.
- Output - É para determinar quais são os bundlers que o Webpack irá emitir.
- Loaders - É para permitir que o Webpack gerencie arquivos que não são JS.
- Plugins - Plugins podem ser utilzados para otimização de pacotes, minificação, injeção de scripts e muito mais.

##### Configuração

- Mode - Utilizados para a bordagem de configuração zero. É possível configurar módulos como **production, development** ou **none**.
- **Production** - Trás otimizações internas.
- **Development** - É executado com três plugins: UglifyJsPlugin, ModuleConcatenationPlugin e NoEmitOnErrorsPlugin;

##### Criação do arquivo webpack.config.js

1- Instalar pacote Json.

2.1 - npm instal --save-dev webpack webpack-cli

2. 2 - No terminal: npm i -D webpack webpack-cli (OBS: Mesmo comando acima.)



3 - Criar pacote **webpack.config.js** 

4 - Adicionar no package.json em scripts: Serão colocados os comandos que serão executados no projeto (buil, modo de desenvolvimento, produção, none, executar testes, etc...) - Dar o comando npm run build para ver se n gerou com erros (ele vai gerar uma pasta **dist** que foi a colocada no path). "build": "webpack --mode production"

5- npm i -D @babel/core babel-loader @babel/present-env @babel/present-react --save-dev

Como vai executar uma aplicação de javascript com react - importar (React e ReactDom)



Para usar o preset :

npm i react react-dom

npm i -D babel-preset-react

1. criar .babelrc (vai ler os presets e plugins)

   {

   "presets": [

   "@babel/preset-env"

   "@babel/preset-react"

   ]

   }

2. npm run dev

3. intalar pluguin do HtmlWebPackPlugin. (criar arquivo .html) .... npm i -D html-webpack-plugin html-loader



#### Renderização Condicional

"Em react, você pdoe criar componentes distintos que encapsulam o comportamento que você precisa. Então, vocÊ pode renderizar apenas alguns dos elementos, dependendo do estado da sua aplicação"

- Variaveis de Elementos
- If inline com o Operador Lógico &&
- If-Else inline com Operador Condicional
- Evitando que um Componente seja Renderizado

​	
