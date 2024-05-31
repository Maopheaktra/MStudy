<?php
$uri = parse_url($_SERVER['REQUEST_URI'])['path'];
$routes = [
    '/' => "controllers/home/home.controller.php",
    '/products' => "controllers/products/productController.php",
    '/categories' => "controllers/categories/categorieController.php",
    '/categories/create' => "controllers/categories/categories.createController.php",
];
if(array_key_exists($uri, $routes)){
    require $routes[$uri];
}else{
    require("views/error/404.view.php");
}
?>