<?php
$db = new PDO('mysql:host=localhost;dbname=school_db','root','');
$id = $_GET['id'];

$query = "DELETE FROM students WHERE id = :id";
$statement=$db->prepare($query);
$statement->execute([':id' => $id]);
header('location: index.php');