<?php
if (isset($_SERVER["REQUEST_METHOD"]) == "POST") {
    # code...
    if ($_POST['Username'] != "") {
        echo validateInput($_POST['Username']);
    } else {
        echo "Please enter Username";
    }
    
    if ($_POST['pass'] != "") {
        # code...
        echo validateInput($_POST['pass']);
    }else{
        echo "Please enter password";
    }
}

function validateInput($value){
    $value = htmlspecialchars ($value);
    $value = trim($value);
    return $value;

}