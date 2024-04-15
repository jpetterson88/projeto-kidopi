<h1>Projeto KIDOPI - Consulta COVID-19</h1>
<p><strong>Descrição:</strong> O exercício consiste na construção de um sistema (interface web) que possibilite ao usuário obter informações sobre os casos de mortes por Covid. É possível obter dados do número de casos confirmados e mortes de vários países afetados pela COVID-19.</p>
<p>Para rodar o projeto é necessário:</p>
<ul>
  <li>Baixar o XAMPP no link oficial: <a href="https://www.apachefriends.org/pt_br/download.html">https://www.apachefriends.org/pt_br/download.html</a></li>
  <li>
    Faça a instalção do XAMPP, abre o painel de controle dele e inicie o servidor apache <br>
    <img src="./xampp-control-panel.PNG">
  </li>
  <li>Baixe os arquivos do repositório e guarde-os em uma pasta</li>
  <li>
    Abra a pasta do XAMPP e guarde a pasta do projeto dentro da pasta 'htdocs' do XAMPP <br>
    <img src="./xampp-folder.PNG">
  </li>
  <li>Baixe o banco de dados MySQL, no link: <a href="https://dev.mysql.com/downloads/installer/">https://dev.mysql.com/downloads/installer/ (essa versão é para windows), e faça a instação, criando um banco de dados</a></li>
  <li>
    Para conectar o banco de dados, é necessário configurar
    <ul>
      <li>"$hostname": será o caminho relativo ao banco de dados, no caso, 'localhost'</li>
      <li>"$dbname": será o nome do banco de dados criado no MySQL</li>
      <li>"$username": será o nome do usuário do banco de dados</li>
      <li>"$password": será o a senha do banco, caso haja</li>
    </ul>
  </li>
</ul>
<h2>Após essas configurações, basta digitar <strong>'localhost/{nome da pasta do projeto}'<strong> para acessar todo o projeto no navegador!<h2>