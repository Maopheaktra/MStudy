<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title'];
    $description = $_POST['description'];

    echo "Title: " . $title;
    echo "Description: " . $description;

    $isCreateItem = createItem($title, $description);

    if ($isCreateItem) {
        header("Location: /item");
    } else {
        header("Location: /create_item");
    }
}
?>