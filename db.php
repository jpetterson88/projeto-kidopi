<?php
  $hostname = 'localhost';
  $dbname = 'consulta_covid';
  $username = 'root';
  $password = '1234';

  $dsn = "mysql:host=$hostname;dbname=$dbname;charset=utf8";

  $logFile = 'log_errors.txt';

  try {
    $db = new PDO($dsn, $username, $password);
    
    $currentDateTime = date('Y-m-d H:i:s');
    $successMessage = "[$currentDateTime] Conectado com sucesso ao banco de dados.\n";
    file_put_contents($logFile, $successMessage, FILE_APPEND);
  } catch (PDOException $e) {
    $currentDateTime = date('Y-m-d H:i:s');
    $errorMessage = "[$currentDateTime] Erro de conexão: " . $e->getMessage() . "\n";
    file_put_contents($logFile, $errorMessage, FILE_APPEND);
    
    exit;
  }

  date_default_timezone_set('America/Sao_Paulo');

  $current_date = date('Y-m-d');
  $current_hour = date('H:i:s');

  $userQuery = $db->prepare('INSERT INTO reg_acessos (data, hora) VALUES (:data, :hora)');
 
  if (!$userQuery->execute(['data' => $current_date, 'hora' => $current_hour])) {
    $errorInfo = implode(', ', $userQuery->errorInfo());
    file_put_contents('log_errors.txt', "Erro ao inserir registro: $errorInfo\n", FILE_APPEND);
  } else {
    $currentDateTime = date('Y-m-d H:i:s');
    file_put_contents('log_errors.txt', "[$currentDateTime] Registro inserido com sucesso em reg_acessos com data: $current_date e hora: $current_hour.\n", FILE_APPEND);
  }

  $db = null;
?>