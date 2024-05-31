<?php
require("models/categories.model.php");
$statement = createCategories();
if ($_SERVER['REQUEST_ETHOD']=="POST") {
    if (!empty($_POST['categories'])) {
        // CALL MODEL
        createCategories($_POST['categories']);
    }else{
        $error="fields can not be empty please enter a new categories";
        $categrories = getCategories();
        require("views/categoryView/categories.view.php");
    }
}
?>