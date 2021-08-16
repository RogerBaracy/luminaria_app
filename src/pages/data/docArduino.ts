const data = [
  {
    ancora: 'introducao',
    title: 'Introdução',
    content:
      ['Esse tópico da documentação se refere a código que irá executar no Arduíno.']
  },
  {
    ancora: 'node',
    title: 'Criando um projeto Node',
    content:
      ['Crie uma pasta e execute o comando: <br> npm init']
  },
  {
    ancora: 'johnny_five',
    title: 'Instalando Johnny Five JS',
    content:
      ['Johnny Five JS é uma biblioteca JavaScript Open Source para programação para IoT e robótica, para instala-la execute o comando: <br> npm install johnny-five',
      'Nota de rodapé: Johnny Five é um filme da década de 80, cujo o personagem principal era um robô.'
    ]
  },
  {
    ancora: 'dotenv',
    title: 'Instalando o DotEnv',
    content: 
      ['O DotEnv é nescessário para que as chaves de acesso ao Firebase não fiquem expostas no Github. Da mesma forma que instalarmos no projeto da aplicação web execute o comando:',
        'npm install dotenv <br> ou <br> yarn add dotenv'
    ],
  },
  {
    ancora: 'firebase',
    title: 'Instalando o FireBase',
    content: 
      ['Para o nosso Arduíno se conectar ao banco de dados precisamos ter o pacote do Firebase instalado no projeto, para isso executamos o comando:', 'npm install firebase <br> ou <br> yarm add firebase'],
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
    ancora: 'ide',
    title: 'Configurando a IDE do Arduíno',
    content: 
      ['Em Desenvolvimento'],
  },
  
  
];
export default data;
