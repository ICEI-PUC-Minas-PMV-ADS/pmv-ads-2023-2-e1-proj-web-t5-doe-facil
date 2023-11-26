# Especificação do Projeto

## Perfis de Usuários

<table>
  <tbody>
    <tr align=center>
      <th colspan="2">Doador</th>
    </tr>
    <tr>
      <td width="150px"><b>Descrição</b></td>
      <td width="600px">Pessoas físicas com a intenção de fazer doações para instituições de caridade. </td>
    </tr>
    <tr>
      <td><b>Necessidades</b></td>
      <td>Entender o que pode ser doado, saber quais instituição receberão as doações e ter a segurança de que a doação será feita de forma segura e confiável. </td>
    </tr>
  </tbody>
</table>

<table>
  <tbody>
    <tr align=center>
      <th colspan="2">Instituição</th>
    </tr>
    <tr>
      <td width="150px"><b>Descrição</b></td>
      <td width="600px">Instituições interessadas nas doações que estão sendo feitas. </td>
    </tr>
    <tr>
      <td><b>Necessidades</b></td>
      <td>Avaliar o estado dos itens doados, definir o tipo de itens que estão abertos a receber e poder ter a escolha de aceite das doações. Aumentar o alcance da instituição. </td>
    </tr>
  </tbody>
</table>


## Histórias de Usuários

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Doador | Fazer doações para instituições confiáveis de forma segura. | Ter a confiança de que minhas doações tenham um bom uso |
| Doador | Saber quais tipos de doações posso fazer e se há necessidade de quantidade mínima de itens. | Entender se os itens que tenho disponíveis em casa para doar são utilizáveis para alguém. |
|Instituição | Me tornar uma instituição beneficiada. | Participar do recolhimento das doações. |
|Instituição | Ter a segurança de estar recebendo doações em bom estado de uso. | Evitar de ter que lidar com o descarte de doações. |
|Instituição | Saber os endereços dos doadores e a data que será possível fazer o recolhimento das doações. | Que seja possível organizar o recolhimento. |
|Instituição | Saber de antemão os tipos de doações antes de as aceitarem. | Decidir se faz sentido receber aquela doação. |
|Instituição | Ter as informações e objetivos da minha instituição, expostos de forma clara ao doador. | Alcançar mais pessoas e esclarecer as nossas necessidades como instituição, para que as doações sejam mais assertivas. |

## Requisitos do Projeto

### Requisitos Funcionais

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |  A aplicação deve permitir o cadastro do “Doador” na plataforma. | Alta | 
| RF- 02 | A aplicação deve possuir uma página dedicada ao cadastro da “Instituição” na plataforma. | Alta |
| RF-03 | A aplicação deve possuir uma página inicial com chamada de ação para páginas de informações sobre a aplicação, objetivo e instituições cadastradas para a coleta das doações. | Alta |
| RF-04 | A aplicação deve possuir uma página listando as Instituições com suas informações: nome, descrição, endereço, objetivos e informações de contato como site e telefones. | Média |
| RF-05 | A aplicação deve possibilitar ao “Doador” cadastrar doação na plataforma de forma simplificada e segura. | Alta |
| RF-06 | A aplicação deve possibilitar o “Doador” a opção de selecionar instituições de preferência ao fazer o cadastro das doações. | Média |
| RF-07 | A aplicação deve possibilitar ao “Doador” acesso a uma lista com informações sobre as instituições cadastradas para receber as doações. | Alta |
| RF-08 | A aplicação deve informar os tipos de doações possíveis e a quantidade mínima no momento da doação. | Média |
| RF- 09 | A aplicação deve possibilitar à “Instituição” a opção de aceite referente ao recolhimento das doações cadastradas. | Média |
| RF- 11 | A aplicação deve possibilitar à “Instituição” acesso às informações de telefone dos doadores para entrar em contato antes do recolhimento da doação. | Média | 
| RF- 12 | A aplicação deve possibilitar à “Instituição” visualizar o tipo das doações, assim como o endereço do doador e a data sugerida para a coleta. | Alta |
| RF- 13 | A aplicação deve possibilitar ao “Doador” acesso a lista de doações feitas na plataforma. | Alta |
| RF- 14 | A aplicação deve possibilitar à “Instituição” acesso a lista de doações recebidas na plataforma. | Alta |
| RF-15 | A aplicação deve possibilitar ao Doador alterar suas informações pessoais e senha. | Alta |
| RF-16 | A aplicação deve possibilitar a Instituição alterar as informações básicas, descrições e senha. | Alta |
| RF-17 | A aplicação deve possuir uma página dedicada às informações da "Doe Fácil".  | Média |
| RF-18 | A aplicação deve possuir uma página dedicada às informações das instituições cadastradas.  | Média |
| RF-21 | A página inicial deve conter uma seção para visualização dos depoimentos dos usúarios. | Média |
| RF-22 | A aplicação deve possibilitar o cadastro e exclusão de depoimentos |
| RF-23 | A página inicial deve conter cards dinâmicos cadastraveis pelo painel |
| RF-24 | Todas as páginas devem possuir um menu de navegação no topo da página |
| RF-25 | Todas as páginas devem possuir um rodpé com links das páginas de informação e do painel, além de direitos autorais |
| RF-26 | A página inicial deve conter uma chamada de ação para se tornar um doador (dobra da página) cadastrável pelo painel |
| RF-27 | A aplicação deve possuir um painel administrativo contendo um menu de navegação das páginas internas |
| RF-28 | O painel da aplicação deve possuir uma área dedicada para a edição das informações da página inicial |
| RF-29 | O painel da aplicação deve possuir uma página dedicada ao cadastro de depoimentos |
| RF-30 | O painel deve possuir uma página dedicada a edição da página de "Sobre Nós" |
| RF-31 | O painel deve possuir uma página para alterar as informações do Doador e Instituição |
| RF-32 | O painel deve possuir um formulário de edição de senha dos usuários |
| RF-33 | O painel deve possuir uma página dedicada ao cadastro e edição de doações |
| RF-34 | O painel deve possuir uma página de revisão referente às doações |
| RF-35 | A ferramenta deve possuir usuários do tipo "Doador", "Instituição" e "Administrador" |
| RF-36 | A ferramenta deve possuir uma página para acessar o painel e iniciar sessão |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais


|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 | Os formulários de cadastro devem ser simples e de fácil entendimento, contendo apenas campos necessários. | Alta | 
| RNF-02 | As páginas devem se adaptar ao ambiente mobile para ser acessado de forma simples por todos os dispositivos. | Alta | 
| RNF-03 | A interface deve ser clara e não possuir informações desnecessárias. | Média |

**Prioridade: Alta / Média / Baixa. 

