const data = [
  {
    ancora: 'introducao',
    title: 'Introdução',
    content:
      ['Esse tópico da documentação se refere a aplicação web, <br /> nessa aplicação enviaremos comandos de voz e ações dos botões para o firebase']
  },
  {
    ancora: 'quasar_cli',
    title: 'Instalando Quasar/cli',
    content:
      ['Quasar Framework, é um framework front-end que utiliza VueJs, e possibilita builds para multi-plataformas (Web, Mobile e Desktop)<br /> <a href="https://quasar.dev/" target="_blank"> https://quasar.dev/ </a> <br />',
      'A instalação desse framework é opcional, você pode trabalhar com o framework de sua preferência ou até mesmo usando Html, css e JavaScript sem frameworks <br />',
      'Para utilizar o Quasar Framework o Node.js >=12.22.1 é requerido. <br/> Execute o comando:',
      'yarn global add @quasar/cli <br/> ou  <br/> npm install -g @quasar/cli',
      'link para a documentação: <a href="https://quasar.dev/quasar-cli/installation">https://quasar.dev/quasar-cli/installation</a>'
    ]
  },
  {
    ancora: 'quasar',
    title: 'Criando um projeto com Quasar Framework',
    content: 
      ['quasar create &lt;folder_name&gt;'],
  },
  {
    ancora: 'dotenv',
    title: 'Instalando o DotEnv',
    content: 
      ['O DotEnv é nescessário para que as chaves de acesso ao Firebase não fiquem expostas no Github e na página web. Execute o comando:',
        'npm install dotenv <br> ou <br> yarn add dotenv'
    ],
  },
  {
    ancora: 'firebase',
    title: 'Instalando o FireBase',
    content: 
      ['Para a aplicação web se conectar ao banco de dados precisamos ter o pacote do Firebase instalado no projeto, para isso executamos o comando:', 'npm install firebase <br> ou <br> yarm add firebase'],
  },
  {
    ancora: 'config_env',
    title: 'Configurando o acesso ao banco de dados',
    content: 
      ['Crie um arquivo .env na raiz do projeto', 
      'Leia a etapa 3 da documentação do Firebase no link: <a href="https://firebase.google.com/docs/web/setup" target="_blank">Add Firebase in Project Web</>',
      'Para conseguir as configurações de acesso ao seu banco de dados criado no Firebase acesse esse link descrito na documentação do Firebase: <a href="https://support.google.com/firebase/answer/7015592#zippy=%2Cneste-artigo" target="_blank">Arquivo de Configuração</>',
      'Agora no arquivo .env crie as variaveis com as configurações de acesso ao Firebase do seu projeto. Exemplo:',
      'API_KEY= xxxxxxxxxxxxxxxxxxxxxxxxxxx <br> AUTH_DOMAIN= 111111111111.firebaseapp.com <br> DATABASE_URL= https=//xxxxxxxxxxxxxxxxxx.firebaseio.com <br> PROJECT_ID= 111111111111 <br> STORAGE_BUCKET= xxxxxxxxxxxxx.appspot.com <br> MESSAGING_SENDER_ID= 111111111111111 <br> APP_ID= 1=111111111111111=web=xxxxxxxxxxxxxxxxxxx',
    ],
  },
  {
    ancora: 'codigo',
    title: 'Explicando o código',
    content: 
      ['Em desenvolvimento ...'],
  },
  {
    ancora: 'referencias',
    title: 'Referências',
    content: 
      ['Playlist Arduíno + Javascript + Firebase <br> <a href="https://www.youtube.com/watch?v=kmT5mVBF2tI&list=PLw9oYsqdATnP6rCIsNKU0_be2ShGubcGc" target="_blank"> Joao Rubens Marchete Filho</a>'],
  },

  
];
export default data;