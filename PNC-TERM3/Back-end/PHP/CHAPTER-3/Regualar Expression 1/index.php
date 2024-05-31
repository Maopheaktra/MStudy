<?php
$regex = "/^[a-z\d]+{8}$/";
$regexPass = "/^[a-z]+*[0-9]*[\s]*[\@#$!]$/";
$message = "";
$messagePwd = "";
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (preg_match($regex, $_POST['text'])) {
        $message = "😊";
    } else {
        $message = "😢";
    }
    if (preg_match($regexPass, $_POST['password'])) {
        $messagePwd = "💘";
    } else {
        $messagePwd = "💔";
    }
}
?>
<form method="post">
    <input type="text" name="username" placeholder = "Username"> <br>
    <?= $message != ""? $message : ""?>
    <input type="password" name="pass" placeholder = "Password"> <br>
    <?= $messagePwd != ""? $messagePwd : ""?>
    <button>Submit</button>
</form>