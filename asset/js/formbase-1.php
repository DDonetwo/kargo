<?php
  $recepient = "sales@harbox.ru";
  $sitename = "harbox.ru";
  $name = trim($_POST["name"]);
  $phone = trim($_POST["phone"]);
  $email = trim($_POST["email"]);
  $message = "Имя: $name \nТелефон: $phone \nЭл.почта: $email";
  $pagetitle = "Заявка с сайта $sitename";
  $headers = "From: $sitename\r\n";
  $headers = "Content-type: text/plain; charset=utf-8\r\n";
  mail($recepient, $pagetitle, $message, $headers);
?>