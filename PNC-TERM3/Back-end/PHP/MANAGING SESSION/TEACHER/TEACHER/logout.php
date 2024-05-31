<?php
session_start();
session_destroy(); // remove values from session not delete session from cookie 
header('Location: index.php');

// You remove session from cookie on browser only when you close the browser