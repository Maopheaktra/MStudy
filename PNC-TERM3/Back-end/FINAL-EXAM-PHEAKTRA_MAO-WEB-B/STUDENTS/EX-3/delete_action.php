<?php
if (isset($_POST['id'])) {
    $id = $_POST['id'];
    require_once ('database.php');
    $statement = $db->prepare("DELETE * FROM posts where id = :id");
    $statement->execute([':id'=> $id]);
    $post = $statement->fetch();
}
('location:index.php');
?>