<?php
if (isset($_POST['submit'])) {
    # code...
    $fileName = $_FILES['file']['name'];
    $fileSize = $_FILES['file']['size'];
    $fileType = $_FILES['file']['type'];
    $tmp_name = $_FILES['file']['tmp_name'];

    // Set the directory
    $dir = "uploads/";

    // Check the requirements
    if ($fileType != "image/jpeg") {
        # code...
        echo "Only JPG image allowed.";
    }elseif ($fileSize >200000) {
        # code...
        echo "Your file is too large";
    }else{
        move_uploaded_file($tmp_name,$dir.$fileName);
        echo "Upload Complete";
    }
}   
?>
<form action="" method = "POST" enctype = "multipart/form-data">
<input type="FILE" name = "file" /> <br>
<input type="SUBMIT" name = "submit" />
</form>