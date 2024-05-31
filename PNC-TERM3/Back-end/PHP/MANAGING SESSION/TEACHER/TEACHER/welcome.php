<?php session_start(); ?>
<a href="logout.php">Logout</a>
<?php if (isset($_SESSION['username']) ) : ?>
    <h1 style="color:violet">💍 Welcome! <?= $_SESSION['username'] ?></h1>
<?php else : ?>
    <h1 style="color:red">😢 404 page not found</h1>
<?php endif; ?> 