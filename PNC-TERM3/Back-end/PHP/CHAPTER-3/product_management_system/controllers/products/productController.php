<?php
    require('models/product.model.php');
    $products = getProducts();
    require('views/productView/product.view.php');
?>