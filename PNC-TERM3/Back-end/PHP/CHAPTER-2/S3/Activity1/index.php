
    <?php
        require_once ('headers/header.php');
        require_once('database.php');
    ?>
    <div class="container">
        <table class = "table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>province</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($students as $student) :?>
                    <tr>
                        <td><?= $student['name'];?></td>
                        <td><?= $student['age'];?></td>
                        <td><?= $student['gender'];?></td>
                        <td><?= $student['province'];?></td>
                        
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
<?php require_once 'headers/footer.php';?>