<h1>Projeto KIDOPI - Consulta COVID-19</h1>
<p><strong>Descrição:</strong> O exercício consiste na construção de um sistema (interface web) que possibilite ao usuário obter informações sobre os casos de mortes por Covid. É possível obter dados do número de casos confirmados e mortes de vários países afetados pela COVID-19.</p>
<p>Para rodar o projeto é necessário (em ambiente Windows):</p>
<ul>
  <li>Baixar o XAMPP no link oficial: <a href="https://www.apachefriends.org/pt_br/download.html">https://www.apachefriends.org/pt_br/download.html.</a></li>
  <li>
    Faça a instalação do XAMPP, abra o painel de controle dele e inicie o servidor apache, <strong>clicando em 'Start'</strong>. <br><br>
    <img src="./img/xampp-control-panel.PNG">
  </li>
  <li>Baixe os arquivos do repositório e guarde-os em uma pasta.</li>
  <li>
    Abra a pasta do XAMPP, <strong>clicando em 'Explorer' no painel de controle</strong>, e guarde a pasta do projeto dentro da pasta 'htdocs' do XAMPP. <br><br>
    <img src="./img/xampp-folder.PNG">
  </li>
  <li>Baixe o banco de dados MySQL, no link: <a href="https://dev.mysql.com/downloads/installer/">https://dev.mysql.com/downloads/installer/</a>  (essa versão é para windows), e faça a instalação, criando um banco de dados.</li>
  <li>
    Crie um banco de dados chamado <strong>'consulta_covid'</strong> e crie uma tabela chamada <strong>reg_acessos</strong> conforme mostrado na imagem abaixo: <br><br>
    <img src="./img/criacao_da_tabela.PNG">
  </li>
  <li>
    Para conectar o banco de dados, é necessário configurar no arquivo 'db.php' do projeto:
    <ul>
      <li>"$hostname": será o caminho relativo ao banco de dados, no caso, 'localhost'.</li>
      <li>"$dbname": será o nome do banco de dados criado no MySQL, no caso, 'consulta_covid'.</li>
      <li>"$username": será o nome do usuário do banco de dados, normalmente 'root'.</li>
      <li>"$password": será a senha do banco, caso tenho sido criada. Se não, deixe o campo com aspas vazias.</li>
    </ul>
  </li>
</ul>
<h2> - Após essas configurações, basta digitar na barra de endereços do navegador web <ins>'localhost/{nome da pasta do projeto}'</ins>, para acessar todo o projeto!<h2>
<h3> - Não se esqueça de dar 'start' no servidor Apache, no painel de controle do XAMPP, para que o projeto rode com sucesso.</h3>