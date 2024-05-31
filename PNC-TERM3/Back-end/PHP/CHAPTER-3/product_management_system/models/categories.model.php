<?php
    require("database/connection.php");
    function getCategories() :array{
        global $db;
        $categories = $db->prepare("SELECT * FROM categories");
        $categories->execute();
        return $categories->fetchAll();
    };

    function createCategories(){
        global $db;
        $statement =$db->prepare("INSERT INTO categories(cat_Name) VALUES (:cat_Name)");
        $statement->execute([
            ":cat_Name" => $cat_Name
        ]);
        return  $statement->rowCount()>0;
    }
?>