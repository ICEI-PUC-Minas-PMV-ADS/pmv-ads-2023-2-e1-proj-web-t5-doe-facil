# Plano de Testes de Software

[Apresente os cenários de testes a serem utilizados na realização dos testes da aplicação. Escolha cenários de testes que demonstrem os requisitos sendo atendidos. ]

Os testes funcionais a serem realizados na aplicação são descritos a seguir. [Utilize a estrutura abaixo para cada caso de teste]

|Caso de Teste    | CT-X - Título Caso de Teste |
|:---|:---|
| Requisitos Associados | RF-X |
| Objetivo do Teste | Descrição do objetivo do teste |
| Passos | Indicar passos para a execução do teste |
| Critérios de êxito | Indicar os critérios de êxito  |
| Responsável pela elaborar do caso de Teste | Nome do integrante da equipe |

|Caso de Teste| CT-1 - Teste do Cadastro de Doações |
|:---|:---|
| Requisitos Associados | RF-05, RF-06, RF-08, RF-33 |
| Objetivo do Teste | Testar cadastro das doações pelo Doador |
| Passos | 1 - Acessar a página de acesso no menu inicial <br> 2 - Acessar como doador (informações de login no console do navegador). <br> 3 - Clicar no item "Fazer Doações" no menu lateral. <br> 4 - Cadastrar as informações sobre as doações 5 - finalizar a doação no botão "Cadastrar Doação e Fazer a Diferença!" |
| Critérios de êxito | O usuário deve ser redirecionado para uma página com a visualização das informações da doação. |
| Responsável pela elaboração do caso de Teste | Carlos Roberto |

|Caso de Teste    | CT-2 - Testar edição de edição de informações dos usuários |
|:---|:---|
| Requisitos Associados | RF-15, RF-16 |
| Objetivo do Teste | Testar a alteração das informações do perfil de Doador e Instituição |
| Passos | 1 - Acessar a página de acesso no menu inicial <br> 2 - Acessar como doador e instituição (repetir passos). <br> 3 - Clicar no item do menu lateral "Meu Perfil" <br> 4 - Alterar os dados do formulário de Informações <br> 5 - Clicar em Salvar <br> 6 - Alterar a senha <br> 7 - Clicar em Salvar <br> 8 - Caso esteja com perfil de Instituição, alterar informações do formulário Extra <br> 9 - Clicar em Salvar  |
| Critérios de êxito | Todos formulários devem emitir um alerta de confirmação da modificação. <br> Os formulário de Informações e Extra devem mantar as informações alteradas. <br> No caso da edição da senha, deve ser possível acessar o painel administrativo com a nova senha.   |
| Responsável pela elaborar do caso de Teste | Carlos Roberto |

Caso de Teste    | CT-3 - Verificar a funcionalidade do menu |
|:---|:---|
| Requisitos Associados | RF-24|
| Objetivo do Teste | Verificar se os menus redirecionam o usuário para as paginas corretas. |
| Passos | 1 - Acessar a página principal da funcionalidade <br> 2 - Clicar nas abas superiores <br> 3 - Verificar para qual pagina foi redirecionado |
| Critérios de êxito | Todas as guias devem redirecionar o usuário para a pagina descrita.  |
| Responsável pela elaborar do caso de Teste | Nome do integrante da equipe |


Caso de Teste    | CT-4 - Verificar a funcionalidade dos botões "quero me tornar um doador" |
|:---|:---|
| Requisitos Associados | RF-, RF-|
| Objetivo do Teste | Verificar se as informações da "Dobra" (primeira chamada da página inicial, a descrição e o botão correspondem às informações cadastradas no painel administrativo |
| Passos | 1 - Acessar a página principal <br> 2 - Verificar as informações da dobra <br> 3 - Clicar em acessar no menu superior e acessar como Administrador (dados de acesso no console do navegador) <br> 4 - Clicar no menu laterar em "Painel Geral" <br> 5 - Alterar as informações referente a "Dobra da Página Inicial" <br> 6 - Acessar a página inicial pelo menu superiro <br> 7 - Verificar se as informações atualizadas no painel refletem com a página inicial. <br> OBS: Deve ser testado também se o redirecionamento está condizente com o endereço cadastrado no painel. |
| Critérios de êxito | As informações alteradas no painel administrativo devem refletir na página inicial. |
| Responsável pela elaborar do caso de Teste | Nome do integrante da equipe |

Caso de Teste    | CT-5 - Verificar o login do usuário |
|:---|:---|
| Requisitos Associados | RF-, RF-|
| Objetivo do Teste | A funcionalidade deve permitir o login do usuários havendo diferença entre a conta do doador e da instituição. |
| Passos | 1 - Acessar a página principal da funcionalidade <br> 2 - Clicar no botão "acessar" <br> 3 - Realizar o cadastro <br> 4 - Acessar usando e-mail e senha |
| Critérios de êxito | Após o login, o usuário deverá ser redirecionado para sua página de doações.  |
| Responsável pela elaborar do caso de Teste | Nome do integrante da equipe |

Caso de Teste    | CT-6 - Inclusão de informações na pagina "Sobre nós" |
|:---|:---|
| Requisitos Associados | RF-30, RF-17
| Objetivo do Teste | A funcionalidade deve permitir a alteração dos dados incluídos na página sobre nós, através da conta de administrador |
| Passos | 1 - Acessar como administrador <br> 2 - No painel geral clicar em "sobre nós" <br> 3 - Realizar a alteração em um dos campos <br> 4- Salvar a informação <br> 5 - verificar se a alteração foi realizada na pagina sobre nós |
| Critérios de êxito | Após a alteração utilizando a contra de administrador a pagina sobre nos deverá exibir os textos informados com o usuário administrador. |
| Responsável pela elaborar do caso de Teste | Nome do integrante da equipe |

Caso de Teste    | CT-7 - Verificar instituições cadastradas |
|:---|:---|
| Requisitos Associados | RF-07,RF-18 |
| Objetivo do Teste | A funcionalidade deve permitir a visualização das instituições cadastradas na plataforma |
| Passos | <br> 1 - Acessar como doador <br> 2 - No menu superior clicar em instituições <br> 3 - Verificar as instituições apresentadas |
| Critérios de êxito | Após o cadastro de uma nova instituição as informações devem estar disponíveis na pagina de instituições |
| Responsável pela elaborar do caso de Teste | Nome do integrante da equipe |

Caso de Teste    | CT-8 - Verificar doações cadastradas  |
|:---|:---|
| Requisitos Associados | RF-13|
| Objetivo do Teste | A funcionalidade deve permitir a visualização das doações cadastradas pelo doador|
| Passos | <br> 1 - Acessar como doador <br> 2 - No menu superior clicar em painel <br> 3 - No menu lateral clicar em minhas doações <br> 4 -Em ações clicar em visualizar .|
| Critérios de êxito | Após o cadastro de uma nova doação, esta deverá estar disponivel para visualização no painel lateral na guia minhas doações |
| Responsável pela elaborar do caso de Teste | Jéssica Reis |


Caso de Teste    | CT-9 - Atualização de senha pelo usuário/Doador  |
|:---|:---|
| Requisitos Associados | RF-15|
| Objetivo do Teste | A funcionalidade deve permitir a alteração da senha pelo usuário - doador|
| Passos | <br> 1 - Acessar como doador <br> 2 - No menu superior clicar em painel <br> 3 - No menu lateral clicar em meu perfil <br> 4 - No formulário de atualizar senha preencher as informações solicitadas <br> 5 - clicar em salvar.|
| Critérios de êxito | Após o preenchimento da nova senha, o login do usuario deverá entrar com os novos parametros fornecidos pelo usuario. |
| Responsável pela elaborar do caso de Teste |Jéssica Reis |

Caso de Teste    | CT-9.1 - Atualização de senha pelo usuário/Instituição |
|:---|:---|
| Requisitos Associados | RF-15|
| Objetivo do Teste | A funcionalidade deve permitir a alteração da senha pelo usuário - instituição|
| Passos | <br> 1 - Acessar como instituição <br> 2 - No menu superior clicar em painel <br> 3 - No menu lateral clicar em meu perfil <br> 4 - No formulário de atualizar senha preencher as informações solicitadas <br> 5 - clicar em salvar.|
| Critérios de êxito | Após o preenchimento da nova senha, o login do usuario deverá entrar com os novos parametros fornecidos pelo usuario. |
| Responsável pela elaborar do caso de Teste |Jéssica Reis |

Caso de Teste    | CT-9.2 - Atualização de senha pelo usuário/Administrador |
|:---|:---|
| Requisitos Associados | RF-32|
| Objetivo do Teste | A funcionalidade deve permitir a alteração da senha pelo usuário - administrador|
| Passos | <br> 1 - Acessar como administrador <br> 2 - No menu superior clicar em painel <br> 3 - No menu lateral clicar em meu perfil <br> 4 - No formulário de atualizar senha preencher as informações solicitadas <br> 5 - clicar em salvar.|
| Critérios de êxito | Após o preenchimento da nova senha, o login do usuario deverá entrar com os novos parametros fornecidos pelo usuario. |
| Responsável pela elaborar do caso de Teste |Jéssica Reis |


Caso de Teste    | CT-10 - Cadastro de depoimentos/usuário  |
|:---|:---|
| Requisitos Associados | RF-22,|
| Objetivo do Teste | A funcionalidade deve permitir ao usuário o cadastro de depoimentos |
| Passos | <br> 1 - Acessar como doador <br> 2 - No menu superior clicar em painel <br> 3 - No menu lateral clicar em depoimentos <br> 4 - Inserir um depoimento na caixa de texto <br> 5 - clicar em enviar depoimento.|
| Critérios de êxito | Após o envio do depoimento, este deverá aparecer na tela inicial na seção depoimentos contendo o nome do usuário que enviou o depoimento  | 
| Responsável pela elaborar do caso de Teste |Jéssica Reis |

Caso de Teste    | CT-11 - Exclusão de depoimentos/Usuário  |
|:---|:---|
| Requisitos Associados | RF-22, |
| Objetivo do Teste | A funcionalidade deve permitir a exclusão do depoimento realizado pelo usuário|
| Passos | <br> 1 - Acessar como doador <br> 2 - No menu superior clicar em painel <br> 3 - No menu lateral clicar em depoimentos <br> 4 - Inserir um depoimento na caixa de texto <br> 5 - clicar em enviar depoimento  <br> 6 - Logar como instituição <br> 7- Verificar na página inicial se existe depoimento cadastrado 	<br> 8 - Deslogar como instituição <br> 9 - Logar como doador e efetuar o passo 3 novamente, <br> 10 - Em meus depoimentos clicar em excluir.|
| Critérios de êxito | Após excluido, o depoimento deixará de aparecer na tela inicial de todos os usuarios da plataforma  | 
| Responsável pela elaborar do caso de Teste |Jéssica Reis |

Caso de Teste    | CT-12 - Alteração do titulo e descrição-Painel Geral/ Perfil Administrador  |
|:---|:---|
| Requisitos Associados | RF-03, |
| Objetivo do Teste | A funcionalidade deve permitir a alteração das informações do painel geral atraves do perfil de administrador. |
| Passos | <br> 1 - Acessar como administrador <br> 2 - No menu superior clicar em painel <br> 3 - No menu lateral clicar em painel geral <br> 4 - alterar informação de titulo  <br> 5 - alterar informações de descrição  <br> 6 - clicar em salvar.|
| Critérios de êxito | Após realizadas as alterações no titulo e na descrição, as informações alteradas deverão passar a aparecer para os perfis de doador e instituição  | 
| Responsável pela elaborar do caso de Teste |Jéssica Reis |

Caso de Teste    | CT-13 - Verificação data de coleta/perfil doador  |
|:---|:---|
| Requisitos Associados | RF-12,|
| Objetivo do Teste | A funcionalidade  não deve permitir a inclusão de datas no passado.|
| Passos | <br> 1 - Acessar como doador <br> 2 - No menu superior clicar em painel <br> 3 - No menu lateral clicar em fazer doação <br> 4 - Em cadastro de doação nos campos "coletar do dia", "ate o dia" inserir a data no passado <br> 5 - inserir demais informações para preenchimento do cadastro <br> 6- clicar em cadastrar doação.|
| Critérios de êxito |  A página deverá apresentar uma mensagem de errado para datas menores do que a data atual.  | 
| Responsável pela elaborar do caso de Teste |Jéssica Reis |

Caso de Teste    | CT-14 - Verificação do endereço cadastro de doação/ perfil doador  |
|:---|:---|
| Requisitos Associados | RF-12,|
| Objetivo do Teste | A funcionalidade não deve permitir o envio do formulario de cadastro  de doação, caso o campo endereço de coleta, número, complemento e bairro não estejam preenchidos.|
| Passos | <br> 1 - Acessar como doador <br> 2 - No menu superior clicar em painel <br> 3 - No menu lateral clicar em fazer doação <br> 4 - retirar informações dos campos: endereço de coleta, número, complemento e bairro <br> 5 - inserir demais informações para preenchimento do cadastro <br> 6- clicar em cadastrar doação.|
| Critérios de êxito | Após excluidos qualquer um dos campos:"endereço de coleta, número, complemento e bairro"  a funcionalidade não deve permitir o envio do formulário de cadastro de doação. | 
| Responsável pela elaborar do caso de Teste |Jéssica Reis |
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
