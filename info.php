<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Consulta - COVID-19</title>
  <link rel="stylesheet" href="./css/form.css">
</head>
<body>
  <?php
    include './api_connection.php';
    include './db.php';
  ?>
  <main>
    <ul>
      <?php foreach ($data_array as $country) : ?>
      <li>
        <p><strong>Estado:</strong> <br> <?= $country['ProvinciaEstado'] ?> </p> 
        <p><strong>Confirmados:</strong> <br> <?= $country['Confirmados'] ?> </p> 
        <p><strong>Mortes:</strong> <br> <?= $country['Mortos'] ?> </p>
      </li>
      <?php endforeach; ?>
    </ul>
  </main>
</body>
</html>