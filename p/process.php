<?php
$result = implode(",", $_POST);
$sql = "INSERT INTO email (Email) VALUES ('$result')";
?>