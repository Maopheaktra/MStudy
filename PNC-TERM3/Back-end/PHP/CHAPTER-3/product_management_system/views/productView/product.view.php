<?php require ("views/templates/header.php");?>
<div class="caontainer mt-5">
    <div class="row">
        <div class="col">
            <div class="card p-3 mt-2">
                <div class="col">
                    <h1>This is Categories Page</h1>
                    <a href="#"class= "btn btn-success">Add New Product</a>
                </div>
                <table class="table table-borderes">
                    <thead>
                        <th>#</th>
                        <th>Products Name</th>
                        <th>Categories Name</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        <?php foreach($products as $pro):?>
                            <tr>
                                <td><?=$pro['pro_ID'];?></td>
                                <td><?=$pro['pro_Name'];?></td>
                                <td><?=$pro['cat_Name'];?></td>
                                <td>
                                    <a href="#" class="btn btn-outline-primary">Edit</a>
                                    <a href="#" class="btn btn-outline-danger">Delete</a>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div> 
<?php require ("views/templates/footer.php");?>