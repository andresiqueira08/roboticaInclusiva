🏺 ArchaeoMap – Sistema de Mapeamento de Sítios Arqueológicos
📖 Descrição do Projeto

O ArchaeoMap é um aplicativo voltado para robótica competitiva aplicada à arqueologia, desenvolvido para auxiliar equipes de arqueólogos no mapeamento digital de sítios arqueológicos e na identificação de artefatos em campo.

A proposta do sistema é unir tecnologia de escaneamento, georreferenciamento e mapeamento em tempo real, permitindo que os arqueólogos possam identificar, registrar e consultar informações detalhadas sobre cada artefato descoberto.

🚀 Principais Funcionalidades
🗺️ 1. Sistema de Mapeamento Interativo

O aplicativo utiliza sensores e algoritmos de escaneamento para detectar o ponto zero (ponto mais alto) da área de escavação.

Realiza o mapeamento em tempo real, atualizando o mapa conforme a área de escavação aumenta.

Permite marcar pontos no mapa onde artefatos foram encontrados.

Cada marcação gera automaticamente um cartão de identificação do artefato, contendo informações como:

Nome do artefato

Descrição

Coordenadas de localização

Data e hora do registro

Imagem do local

O arqueólogo pode baixar a imagem do local marcado diretamente pelo aplicativo.

🏠 2. Página Inicial

Tela inicial amigável com menu de acesso rápido às principais funções:

Mapa de escavação

Lista de equipamentos

Lista de artefatos

Login / Logout

🧰 3. Listagem de Equipamentos dos Arqueólogos

Tela dedicada para o gerenciamento e visualização dos equipamentos disponíveis.

Cada equipamento possui:

Nome

Estado de uso (em campo, disponível, em manutenção)

Responsável atual

🔐 4. Sistema de Login

Acesso restrito aos arqueólogos autorizados.

Login realizado com nome de usuário e senha.

Após o login, o arqueólogo tem acesso ao mapa interativo e às marcações virtuais dos artefatos.

Cada marcação pode ser clicada para exibir o cartão de identificação do artefato correspondente.

🏺 5. Listagem de Artefatos Escavados e Pesquisados

Página pública onde é possível visualizar os artefatos já descobertos.

Inclui:

Imagens dos artefatos

Breve descrição

Localização aproximada

Status da pesquisa

🤖 Tecnologias Utilizadas

Frontend: React Native / Flutter (para o app) e React.js (para o site)

Backend: Node.js / Python (Django ou FastAPI)

Banco de Dados: PostgreSQL / MongoDB

Mapeamento e Escaneamento: APIs de Geolocalização, sensores LIDAR / visão computacional

Autenticação: JWT / OAuth 2.0

🧭 Metodologia de Desenvolvimento – SCRUM

O projeto segue a metodologia Scrum, adotando práticas ágeis para garantir entregas rápidas e eficientes.

👥 Papéis

Product Owner: <u

Scrum Master: Facilita o processo e remove impedimentos.

Equipe de Desenvolvimento: Implementa as funcionalidades e realiza testes.


📦 Instalação e Execução
1️⃣ Clonar o repositório
git clone https://github.com/usuario/ArchaeoMap.git
cd ArchaeoMap

2️⃣ Instalar dependências
npm install
# ou
pip install -r requirements.txt

3️⃣ Executar o servidor
npm start
# ou
python manage.py runserver

4️⃣ Executar o app móvel
npx react-native run-android
# ou
flutter run

🧪 Status do Projeto

🚧 Em desenvolvimento – funcionalidades principais sendo implementadas e testadas em campo com protótipos de robôs de escaneamento.
