const data = [
  {
    ancora: 'introducao',
    title: 'Introdução',
    content:
      ['O <strong>Firebase Realtime Database </strong>é um banco de dados hospedado na nuvem, <br> Quando você cria apps multiplataforma (Mobile, Web, Desktop) todos os clientes compartilham uma instância do Realtime Database e recebem automaticamente atualizações com os dados mais recentes']
  },
  {
    ancora: 'firebase',
    title: 'Projeto no Firebase',
    content:
      ['Acesse <a href="https://console.firebase.google.com/" target="_blank" class="text-primary" >console.firebase.google.com</a> com sua conta de e-mail do Google e click em <strong>"Adicionar Projeto" </strong> ']
  },
  {
    ancora: 'realtime',
    title: 'Banco de dados Realtime',
    content: 
      ['Click em <strong>"Realtime DataBase" </strong> e após em <strong>"Criar banco de dados"</strong>',
      'Em <strong>"Dados"</strong> crie uma chave e valor ex: {color: ""}',
      'Em <strong>"Regras"</strong> modifique as propriedades <strong>".read" </strong> e <strong>".write" </strong>para false <br> (Obs: Essa modificação é somente para simplificar o projeto)',    
    ],
  },
  
];
export default data;
