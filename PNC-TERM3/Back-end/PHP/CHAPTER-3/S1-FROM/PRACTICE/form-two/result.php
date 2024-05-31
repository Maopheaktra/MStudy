<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<?php
    if (isset($_SERVER['REQUEST_METHOD']) == "POST") {
        # code...
        if (isset($_POST['choice']) 
        && isset($_POST['major']) 
        && $_POST['skill']) {
            # code..
            $choice = $_POST['choice'];
            $major = $_POST['major'];
            $skills = $_POST['skill'];
        
            $result= "";
            foreach ($skills as $skill) {
                # code...
                $result.=$skill. ',';
            }
?>
<div class="container mt-4">
    <ul class = "list list group">
        <li class = "list-group-item"><?= $choice;?></li>
        <li class = "list-group-item"><?= $major;?></li>
        <li class = "list-group-item"><?= $result;?></li>
    </ul>

</div>
<?php
        }else{
            echo "Please fill out all fields";
        }
    }
?>