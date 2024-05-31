<?php
// Get current date
date_default_timezone_set('Asia/Phnom_Penh');
require_once('database.php');
if ($_SERVER['REQUEST_METHOD']=='POST') {
    if (isset($_POST['title'])!= "" && isset($_POST['description'])!= "") {
        $Title = $_POST['title'];
        $Description = $_POST['description'];
        $statement = $db->prepare("INSERT INTO posts(title,descriptin) values (:title,:description)");
        $statement->execute([':title'=> $Title,
                            ':description' => $Description
        ]);
        $posts = $statement->fetchAll();
    }
    ('location:index.php');
}
?>