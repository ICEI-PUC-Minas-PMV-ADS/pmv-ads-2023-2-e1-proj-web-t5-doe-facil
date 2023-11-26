# Plano de Testes de Software

|Caso de Teste| CT-1 - Teste do Cadastro de Doações |
|:---|:---|
| Requisitos Associados | RF-05, RF-06, RF-08, RF-33 |
| Estado do Teste | Feito |
| Objetivo do Teste | Testar cadastro das doações pelo Doador |
| Passos | 1 - Acessar a página de acesso no menu inicial <br> 2 - Acessar como doador (informações de login no console do navegador). <br> 3 - Clicar no item "Fazer Doações" no menu lateral. <br> 4 - Cadastrar as informações sobre as doações <br> 5 - finalizar a doação no botão "Cadastrar Doação e Fazer a Diferença!" |
| Critérios de êxito | O usuário deve ser redirecionado para uma página com a visualização das informações da doação. |
| Responsável pela elaboração do caso de Teste | Carlos Roberto |

|Caso de Teste    | CT-2 - Testar edição de edição de informações dos usuários |
|:---|:---|
| Requisitos Associados | RF-15, RF-16 |
| Estado do Teste | Feito |
| Objetivo do Teste | Testar a alteração das informações do perfil de Doador e Instituição |
| Passos | 1 - Acessar a página de acesso no menu inicial <br> 2 - Acessar como doador e instituição (repetir passos). <br> 3 - Clicar no item do menu lateral "Meu Perfil" <br> 4 - Alterar os dados do formulário de Informações <br> 5 - Clicar em Salvar <br> 6 - Alterar a senha <br> 7 - Clicar em Salvar <br> 8 - Caso esteja com perfil de Instituição, alterar informações do formulário Extra <br> 9 - Clicar em Salvar  |
| Critérios de êxito | Todos formulários devem emitir um alerta de confirmação da modificação. <br> Os formulário de Informações e Extra devem mantar as informações alteradas. <br> No caso da edição da senha, deve ser possível acessar o painel administrativo com a nova senha.   |
| Responsável pela elaborar do caso de Teste | Carlos Roberto |

Caso de Teste    | CT-3 - Verificar a funcionalidade do menu |
|:---|:---|
| Requisitos Associados | RF-24 |
| Estado do Teste | Feito |
| Objetivo do Teste | Verificar se os menus redirecionam o usuário para as paginas corretas. |
| Passos | 1 - Acessar a página principal da funcionalidade <br> 2 - Clicar nas abas superiores <br> 3 - Verificar para qual pagina foi redirecionado |
| Critérios de êxito | Todas as guias devem redirecionar o usuário para a pagina descrita.  |
| Responsável pela elaborar do caso de Teste | Nome do integrante da equipe |

Caso de Teste    | CT-4 - Verificar se alterações feitas no Painel referentes a "dobra" da página se reflete na página inicial |
|:---|:---|
| Requisitos Associados | RF-26, RF-28 |
| Estado do Teste | Feito |
| Objetivo do Teste | Verificar se as informações da "Dobra" (primeira chamada da página inicial, a descrição e o botão correspondem às informações cadastradas no painel administrativo |
| Passos | 1 - Acessar a página principal <br> 2 - Verificar as informações da dobra <br> 3 - Clicar em acessar no menu superior e acessar como Administrador (dados de acesso no console do navegador) <br> 4 - Clicar no menu laterar em "Painel Geral" <br> 5 - Alterar as informações referente a "Dobra da Página Inicial" <br> 6 - Acessar a página inicial pelo menu superiro <br> 7 - Verificar se as informações atualizadas no painel refletem com a página inicial. <br> OBS: Deve ser testado também se o redirecionamento está condizente com o endereço cadastrado no painel. |
| Critérios de êxito | As informações alteradas no painel administrativo devem refletir na página inicial. |
| Responsável pela elaborar do caso de Teste | Bárbara Figueiredo |

Caso de Teste    | CT-5 - Verificar o login do usuário |
|:---|:---|
| Requisitos Associados | RF-35, RF-36 |
| Estado do Teste | Feito |
| Objetivo do Teste | A funcionalidade deve permitir o login do usuários havendo diferença entre a conta do doador e da instituição. |
| Passos | 1 - Acessar a página principal da funcionalidade <br> 2 - Clicar no botão "acessar" <br> 3 - Realizar o cadastro <br> 4 - Acessar usando e-mail e senha |
| Critérios de êxito | Após o login, o usuário deverá ser redirecionado para sua página de doações.  |
| Responsável pela elaborar do caso de Teste | Jéssica Reis |

Caso de Teste    | CT-6 - Inclusão de informações na pagina "Sobre nós" |
|:---|:---|
| Requisitos Associados | RF-30, RF-17
| Estado do Teste | Feito |
| Objetivo do Teste | A funcionalidade deve permitir a alteração dos dados incluídos na página sobre nós, através da conta de administrador |
| Passos | 1 - Acessar como administrador <br> 2 - No painel geral clicar em "sobre nós" <br> 3 - Realizar a alteração em um dos campos <br> 4- Salvar a informação <br> 5 - verificar se a alteração foi realizada na pagina sobre nós |
| Critérios de êxito | Após a alteração utilizando a contra de administrador a pagina sobre nos deverá exibir os textos informados com o usuário administrador. |
| Responsável pela elaborar do caso de Teste | Jéssica Reis |

Caso de Teste    | CT-7 - Verificar instituições cadastradas |
|:---|:---|
| Requisitos Associados | RF-07, RF-18, RF-04 |
| Estado do Teste | Feito |
| Objetivo do Teste | A funcionalidade deve permitir a visualização das instituições cadastradas na plataforma |
| Passos | 1 - Acessar como doador <br> 2 - No menu superior clicar em instituições <br> 3 - Verificar as instituições apresentadas |
| Critérios de êxito | Após o cadastro de uma nova instituição as informações devem estar disponíveis na pagina de instituições |
| Responsável pela elaborar do caso de Teste | Nome do integrante da equipe |

Caso de Teste    | CT-8 - Verificar doações cadastradas  |
|:---|:---|
| Requisitos Associados | RF-13, RF-14 |
| Estado do Teste | Não Feito |
| Objetivo do Teste | A funcionalidade deve permitir a visualização das doações cadastradas pelo doador|
| Passos | 1 - Acessar como doador <br> 2 - No menu superior clicar em painel <br> 3 - No menu lateral clicar em minhas doações <br> 4 -Em ações clicar em visualizar .|
| Critérios de êxito | Após o cadastro de uma nova doação, esta deverá estar disponivel para visualização no painel lateral na guia minhas doações |
| Responsável pela elaborar do caso de Teste | Jéssica Reis |

Caso de Teste    | CT-9 - Atualização de senha pelos usuários  |
|:---|:---|
| Requisitos Associados | RF-22 |
| Estado do Teste | Feito |
| Objetivo do Teste | A funcionalidade deve permitir a alteração da senha pelo usuário - doador|
| Passos | 1 - Acessar como (Doador e Instituição, repetindo o processos) <br> 2 - No menu superior clicar em painel <br> 3 - No menu lateral clicar em meu perfil <br> 4 - No formulário de atualizar senha preencher as informações solicitadas <br> 5 - clicar em salvar.|
| Critérios de êxito | Após o preenchimento da nova senha, o login do usuario deverá entrar com os novos parametros fornecidos pelo usuario. |
| Responsável pela elaborar do caso de Teste |Jéssica Reis |

Caso de Teste    | CT-10 - Cadastro de depoimentos/usuário  |
|:---|:---|
| Requisitos Associados | RF-22 |
| Estado do Teste | Feito |
| Objetivo do Teste | A funcionalidade deve permitir ao usuário o cadastro de depoimentos |
| Passos | 1 - Acessar como doador <br> 2 - No menu superior clicar em painel <br> 3 - No menu lateral clicar em depoimentos <br> 4 - Inserir um depoimento na caixa de texto <br> 5 - clicar em enviar depoimento.|
| Critérios de êxito | Após o envio do depoimento, este deverá aparecer na tela inicial na seção depoimentos contendo o nome do usuário que enviou o depoimento  | 
| Responsável pela elaborar do caso de Teste |Jéssica Reis |

Caso de Teste    | CT-11 - Exclusão de depoimentos/Usuário  |
|:---|:---|
| Requisitos Associados | RF-22 |
| Estado do Teste | Feito |
| Objetivo do Teste | A funcionalidade deve permitir a exclusão do depoimento realizado pelo usuário|
| Passos | 1 - Acessar como doador <br> 2 - No menu superior clicar em painel <br> 3 - No menu lateral clicar em depoimentos <br> 4 - Inserir um depoimento na caixa de texto <br> 5 - clicar em enviar depoimento  <br> 6 - Logar como instituição <br> 7- Verificar na página inicial se existe depoimento cadastrado 	<br> 8 - Deslogar como instituição <br> 9 - Logar como doador e efetuar o passo 3 novamente, <br> 10 - Em meus depoimentos clicar em excluir.|
| Critérios de êxito | Após excluído, o depoimento deixará de aparecer na tela inicial de todos os usuários da plataforma  | 
| Responsável pela elaborar do caso de Teste |Jéssica Reis |

Caso de Teste    | CT-12 - Alteração do titulo e descrição Painel Geral / Perfil Administrador  |
|:---|:---|
| Requisitos Associados | RF-03 |
| Estado do Teste | Não Feito |
| Objetivo do Teste | A funcionalidade deve permitir a alteração das informações do painel geral atraves do perfil de administrador e informações devem refletir na página inicial |
| Passos | 1 - Acessar como administrador <br> 2 - No menu superior clicar em painel <br> 3 - No menu lateral clicar em painel geral <br> 4 - alterar informação de titulo  <br> 5 - alterar informações de descrição  <br> 6 - clicar em salvar. <br> 7 - Acessa página inicial da ferramenta e verificar se informações foram refletidas |
| Critérios de êxito | Após realizadas as alterações no titulo e na descrição, as informações alteradas deverão passar a aparecer para os perfis de doador e instituição  | 
| Responsável pela elaborar do caso de Teste |Jéssica Reis |

Caso de Teste    | CT-13 - Verificação data de coleta/perfil doador  |
|:---|:---|
| Requisitos Associados | RF-12 |
| Estado do Teste | Feito |
| Objetivo do Teste | A funcionalidade  não deve permitir a inclusão de datas no passado.|
| Passos | 1 - Acessar como doador <br> 2 - No menu superior clicar em painel <br> 3 - No menu lateral clicar em fazer doação <br> 4 - Em cadastro de doação nos campos "coletar do dia", "ate o dia" inserir a data no passado <br> 5 - inserir demais informações para preenchimento do cadastro <br> 6- clicar em cadastrar doação.|
| Critérios de êxito |  A página deverá apresentar uma mensagem de errado para datas menores do que a data atual.  | 
| Responsável pela elaborar do caso de Teste |Jéssica Reis |

Caso de Teste    | CT-14 - Verificação do endereço cadastro de doação/ perfil doador  |
|:---|:---|
| Requisitos Associados | RF-12 |
| Estado do Teste | Não Feito |
| Objetivo do Teste | A funcionalidade não deve permitir o envio do formulario de cadastro  de doação, caso o campo endereço de coleta, número, complemento e bairro não estejam preenchidos.|
| Passos | 1 - Acessar como doador <br> 2 - No menu superior clicar em painel <br> 3 - No menu lateral clicar em fazer doação <br> 4 - retirar informações dos campos: endereço de coleta, número, complemento e bairro <br> 5 - inserir demais informações para preenchimento do cadastro <br> 6- clicar em cadastrar doação.|
| Critérios de êxito | Após excluidos qualquer um dos campos:"endereço de coleta, número, complemento e bairro"  a funcionalidade não deve permitir o envio do formulário de cadastro de doação. | 
| Responsável pela elaborar do caso de Teste |Jéssica Reis |

| Caso de Teste | CT-15 - Testar responsividade das páginas da aplicação |
|:---|:---|
| Requisitos Associados | RNF-02, RF-25, RF-27, RF-35, RF-21 |
| Estado do Teste | Feito |
| Objetivo do Teste | As páginas devem se adaptar em telas menores sem perder a usabilidade e apresentar problemas de legibilidade. |
| Passos | 1 - Navegar na página inicial <br> 2 - Navegar no Sobre Nós <br> 3 - Navegar na lista de instituições <br> 4 - Navegar em uma página de instituição <br> 5 - Navegar pela página de acesso <br> 6 - Acessar painel como administrador e navegar pelas páginas internas do painel <br> 7 - Acessar painel como doador e navegar pelas páginas internas do painel <br> 8 - Acessar painel como instituição e navegar pelas páginas internas do painel. |
| Critérios de êxito | Após navegar pelas páginas da aplicação, é esperado que todas páginas se adaptem em telas grande e menores. | 
| Responsável pela elaborar do caso de Teste | Carlos Roberto |

| Caso de Teste | CT-16 - Testar cadastros de Doador / Instituição |
|:---|:---|
| Requisitos Associados | RF-01, RF-02, RF-35 |
| Estado do Teste | Feito |
| Objetivo do Teste | Deve ser testado ambos os cadastros presentes na pagina de acesso: Doador e Instituição |
| Passos | 1 - Acessar a página de acesso no menu inicial <br> 2 - Criar cadastro de Doador <br> 3 - O usuário será redirecionado para a página "Minhas Doações" <br> 4 - Clicar no botão de "Sair" <br> 5 - Fazer cadastro de Instituição |
| Critérios de êxito | Apos o cadastro de ambos os perfis de usuário o usuário deve ser redirecionado para a página "Minhas Doações" com uma sessão criada do usuário que acabou de cadastrar. | 
| Responsável pela elaborar do caso de Teste | Carlos Roberto | 

| Caso de Teste | CT-17 - Testar visualização de doações da Instituição e ações disponíveis |
|:---|:---|
| Requisitos Associados | RF-09, RF-11, RF-34, RF-14 |
| Estado do Teste | Feito |
| Objetivo do Teste | Deve ser testado a listagem de doações, visualziar informações da doação e testar aceite. |
| Passos | 1 - Acessar a página de acesso no menu inicial <br> 2 - Acessar como Instituição <br> 3 - Visualizar "Minhas Doações" <br> 4 - Clicar no botão Analisar de uma doação  <br> 5 - Conferir informações disponíveis <br> 6 - Clicar em aceitar doação. |
| Critérios de êxito | Após o teste o usuário deve ter conseguido seguir todo o fluxo listado e a doção aparecer com estado de aceito na lsita de doações. | 
| Responsável pela elaborar do caso de Teste | Carlos Roberto | 

| Caso de Teste | CT-18 - Testar a criação de cards dinâmicos na página inicial |
|:---|:---|
| Requisitos Associados | RF-23 |
| Estado do Teste | Feito |
| Objetivo do Teste | Deve ser testado a criação de cards na página inicial que servem para chamar a atenção do usuário para certos pontos ou páginas da plataforma. |
| Passos | 1 - Acessar a página de acesso no menu inicial <br> 2 - Acessar como Administrador <br> 3 - Visualizar "Painel Geral" <br> 4 - Criar um card no formulário específico  <br> 5 - Clicar em "Criar Card"|
| Critérios de êxito | Após o teste, o Administrador deve ter conseguido criar um novo card na página inicial. | 
| Responsável pela elaborar do caso de Teste | Guilherme Radicchi | 
