<?php 
  $request = file_get_contents("https://dev.kidopilabs.com.br/exercicio/covid.php?pais={$_GET['country']}");
  $data_array = json_decode($request, true);
?>