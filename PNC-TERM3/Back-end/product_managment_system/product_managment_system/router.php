<?php
$uri = parse_url($_SERVER['REQUEST_URI'])['path'];

$routes = [
    '/' => "controllers/homeControllers/home.controller.php",
];

if(array_key_exists($uri, $routes)){
    require $routes[$uri];
}else{
    require("views/error/404.view.php");
}
?>