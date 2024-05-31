<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<?php
    if (isset($_SERVER["REQUEST_METHOD"]) == "POST") {
        # code...
        if (isset($_POST['date']) 
        && isset($_POST['range']) 
        && isset($_POST['choices'])) {
            # code...
            $date = date_create($_POST["date"]);
            $Range = $_POST["range"];
            $Choices = $_POST["choices"];
        $result = "";
        foreach ($Choices as $choice) {
            # code...
            $result .= $choice. ",";
        }
?>
<div class="container mt-5">
    <ul class = "list-group">
        <li class = "list-group-item"><?= date_format($date, "Y/F/d/l");?></li>
        <li class = "list-group-item"><?= $_POST['range'];?></li>
        <li class = "list-group-item"><?= $result;?></li>
    </ul>
</div>
<?php
        } else{
            echo "Please fill out all the fields";
        }
    }
?>