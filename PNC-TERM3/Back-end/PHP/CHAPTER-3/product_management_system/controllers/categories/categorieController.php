<?php
require ('models/categories.model.php');
$categories = getcategories();
require('views/categoryView/categories.view.php');
?>