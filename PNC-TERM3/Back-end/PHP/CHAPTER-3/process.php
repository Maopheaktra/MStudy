<?php
    if (isset($_SERVER["REQUEST_METHOD"]) == "POST") {
        # code...
        if ($_POST['Username'] != "") {
            # code...
            echo $_POST["Username"];
        }
        if ($_POST['pass'] != "") {
            # code...
            echo $_POST['pass'];
        }
    }
?>