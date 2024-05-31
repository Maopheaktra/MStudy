<?php
require_once('templates/header.php');

echo "<ul>";
$name = $_GET['name'];
$hobbies = $_GET['hobbies'];
$gender = $_GET['gender'];
// TODO
// - Your name is XXXXX
echo 
// - Your hobbies areXXXXX

// - You are a boy/girlif (isset($_GET['gender'])) {
    # code...
    echo '<li>' . $_GET['gender'] . '</li>';
}

echo "</ul>";


require_once('templates/footer.php');
