<?php require ("views/templates/header.php");?>
<div class="caontainer mt-5">
    <div class="row">
        <div class="col">
            <div class="card p-3 mt-2">
            <div class="col-6">
                <form action="" method = "POST">
                    <div class="input-group mb-3">
                        <input type="text" name="categories" class="form-control" placeholder="Enter a new category" aria-label="Recipient's username" aria-describedby="button-addon2">
                        <button class="btn btn-primary" type="button" id="button-addon2">Add now</button>
                    </div>
                </form>
                <p class="text-danger"><?= isset($error)? $error: ''?></p>
            </div>
                <table class="table table-borderes">
                    <thead>
                        <th>#</th>
                        <th>Categories Name</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        <?php foreach($categories as $cate):?>
                        <tr>
                            <td><?=$cate['cat_ID'];?></td>
                            <td><?=$cate['cat_Name'];?></td>
                            <td>
                                  <a href="#" class="btn btn-outline-primary">Edit</a>
                              <a href="#" class="btn btn-outline-danger">Delete</a>
                            </td>
                        </tr>
                        <?php endforeach;?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div> 
<?php require ("views/templates/footer.php");?>