🏺 ArchaeoMap – Sistema de Mapeamento de Sítios Arqueológicos

O ArchaeoMap é um sistema inovador que combina robótica competitiva, geolocalização e arqueologia, permitindo que equipes de escavação realizem mapeamento digital em tempo real, marquem artefatos no campo e tenham acesso rápido a dados organizados e acessíveis.

O projeto foi desenvolvido para agilizar o início do trabalho arqueológico, reduzir erros manuais no mapeamento e integrar tecnologias modernas como LIDAR, visão computacional e sensores inteligentes.

🚀 Principais Funcionalidades
🗺️ 1. Sistema de Mapeamento Interativo

Identificação automática do ponto zero (ponto mais alto) da área de escavação.

Mapeamento contínuo conforme o robô ou arqueólogo se desloca.

Marcação de coordenadas onde artefatos são encontrados.

Geração automática de cartões de identificação, contendo:

Nome do artefato

Descrição

Coordenadas

Data e hora

Imagem do local

Possibilidade de baixar o mapa ou a imagem da marcação diretamente pelo aplicativo.

🏠 2. Página Inicial

Interface intuitiva com acesso rápido às principais ferramentas:

Mapa de escavação

Lista de equipamentos

Artefatos descobertos

Login/Logout

🧰 3. Listagem de Equipamentos

Seção dedicada ao controle e organização dos equipamentos de campo.

Cada item inclui:

Nome

Estado (disponível, em uso, em manutenção)

Responsável atual

🔐 4. Sistema de Login e Permissões

Acesso exclusivo para arqueólogos autorizados.

Autenticação via usuário + senha (JWT / OAuth 2.0).

Redirecionamento automático para o Painel do Arqueólogo.

Permissões específicas:

Arqueólogos → acesso ao mapa interativo e marcações

Público → apenas visualização dos artefatos publicados

🏺 5. Listagem Pública de Artefatos

Página aberta ao público onde é possível explorar os itens já descobertos.

Inclui:

Imagens

Descrição curta

Localização aproximada (protegida)

Status da pesquisa

🤖 Tecnologias Utilizadas
Frontend

React Native ou Flutter (aplicativo móvel)

React.js (web)

Backend

Node.js
ou

Python (Django / FastAPI)

Banco de Dados

PostgreSQL

MongoDB (casos específicos)

Mapeamento e Escaneamento

Sensores LIDAR

Visão Computacional

APIs de Geolocalização

Autenticação

JWT

OAuth 2.0

🧭 Metodologia – SCRUM

O projeto segue o framework Scrum, garantindo entregas iterativas e alinhamento contínuo com as demandas do campo arqueológico.

Papéis

Product Owner: <a href="https://www.linkedin.com/in/andr%C3%A9-siqueira-459b822ba/" target="_blank" rel="noopener noreferrer">André Siqueira</a>


Scrum Master: Guilherme Marques

Equipe de Desenvolvimento

Miguel Boa Viagem

Bruno Ferreira

José Clayton

João Gabriel Coutinho

Rafael


🧪 Status do Projeto

🚧 Em desenvolvimento
As funcionalidades principais estão sendo implementadas e testadas em conjunto com protótipos de robôs de escaneamento para validação em campo.
