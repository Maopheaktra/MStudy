<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<?php 

$db = new PDO('mysql:host=localhost;dbname=school_db','root','');

$query = "SELECT * FROM students";
$statement = $db->prepare($query);
$statement->execute();
$data = $statement->fetchAll();
?>
<?php
?>
<div class="container">
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>EMAIL</th>
                <th>ACTION</th>
            </tr>
        </thead>
        <tbody>

            <?php foreach ($data as $row):?>
            <tr>
                <td><?= $row['id'] ?></td>
                <td><?= $row['name'] ?></td>
                <td><?= $row['age'] ?></td>
                <td><?= $row['email'] ?></td>
                <td>
                    <a href="delete.php?id=<?=$row['id'] ?>" class = "btn btn-danger btn-sm">delete</a>
                    <a href="?id=<?=$row['id'] ?>" class = "btn btn-info btn-sm">edit</a>
                    <a href="?id=<?=$row['id'] ?>" class = "btn btn-primary btn-sm">Update</a>
                </td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</div>