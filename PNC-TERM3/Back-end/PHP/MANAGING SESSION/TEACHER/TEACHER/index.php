<a href="welcome.php">Welcome</a> 
<hr>
<form action="#" method="post">
    <input type="text" name="username" placeholder="Username" required>
    <button>Submit</button>
</form>
<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $_SESSION['username'] = $username; // set username to the session
}
