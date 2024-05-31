<?php

if(isset($_GET['name']) && isset($_GET['email'])){
    $name = $_GET['name'];
    $email = $_GET['email'];
    echo "I am " . $name . " and my email is :" . $email;
}else{
    echo "No query parameters on URL";
}
?>