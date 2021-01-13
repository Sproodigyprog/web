<?php
  require_once('login.php');

  // $host = $dbParams['host'];
  // $db = $dbParams['db'];
  // $user = $dbParams['user'];
  // $password = $dbParams['password'];

  $conn = new mysqli($host, $user, $password, $db);
  if ($conn->connect_error) die($conn->connect_error);
  $content = $_POST['content'];
  $phone = $_POST['phone'];
  echo $host . ' ' . $password . ' ' . 'Phone: ' . $phone . 'Content: ' . $content;
  $query = "INSERT INTO todo_list (content, phone) values ('$content', '$phone')";
  $result = $conn->query($query);
  // echo var_dump($_POST);

  // if ($_POST['content']) var_dump($_POST);

  if ($_POST['content']) {
  $query = "INSERT INTO todo_list (content, phone) values ('22', 'dd')";
    $content = $_POST['content'];
    $phone = $_POST['phone'];
    echo $content;
    // var_dump($_POST);
    // var_dump($content);
    // var_dump($phone);
    $query = "INSERT INTO todo_list (content, phone) values ($content, '83909812')";
    $result = $conn->query($query);
    if (!$result) die ("Сбой придоступе к базе данных: " . $conn->error());
    $modx->runSnippet('data');

      // return json_encode(array('id' => $password));
  $result->close();
  $conn->close();
  window.location.reload();
  return json_encode(array('phone' => $phone));
}
