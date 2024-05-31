<?php
// validate: a-z, d , 10
$regex =  "/^[a-z\d]+@[a-z\d]+\.[a-z]{2,}+$/";
$message = "";
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (preg_match($regex, $_POST['text'])) {
        $message = "😊";
    } else {
        $message = "😢";
    }
}
?>
<form method="post">
    <input type="text" name="text">
    <button>Submit</button>
   <?= $message != ""? $message : ""?>
</form>