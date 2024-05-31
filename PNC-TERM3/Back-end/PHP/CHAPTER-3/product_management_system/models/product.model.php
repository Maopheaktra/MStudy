<?php
    require("database/connection.php");

    function getProducts(){
        global $db;
        $products = $db->prepare(
            "SELECT products.pro_ID, products.pro_Name, categories.cat_Name 
            FROM products LEFT JOIN categories 
            ON products.cat_ID = categories.cat_ID");
        $products->execute();
        return $products->fetchAll();
    };
?>