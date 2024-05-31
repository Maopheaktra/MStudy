<!-- WRIRE CODE PHP Submit FORM WITH VALIDATION -->
<?php
function secureData($data)
{
    $data = trim($data);
    $data = htmlspecialchars($data);
    return $data;
}
$values = [
    'username' => '',
    'code' => '',
];

$errors = [
    'username' => '',
    'code' => '',
];
$border = [
    'username' => '',
    'code' => '',
];
if ($_SERVER['REQUES_METHOD'] == 'POST') {
    if (!preg_match('/^[a-zA-Z\s]{6,}$/', secureData($_POST['username']))) {
        $errors['username'] = 'This is invalid';
    }else{
        $border['username'] = 'This is valid';
    }
}
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (!preg_match('/^[a-zA-Z\d!@#$]{8,}+$/' ,secureData($_POST['code'])){

    }
}
?>
<div class="container">
    <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
            <div class="card">
                <div class="card-header">
                    <h1>Form</h1>
                </div>
                <div class="card-body">
                    <form action="#" method="post">
                        <div class="mb-3">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" value="" id="username" name="username" value="">
                            <small class="form-text text-danger">
                                <?php //TODO:Display message error username?>
                            </small>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">password</label>
                            <input type="text" class="form-control" value="" id="password" name="password" value="">
                            <small class="form-text text-danger">
                                <?php //TODO:Display message error password ?>
                            </small>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            < /div>
        </div>
        <div class="col-4"></div>
    </div>
</div>
<br>
<?php
if ($is_form):
    ?>
    <div class="container">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <p>
                            username:
                            <?= $values['username'] ?>
                        </p>
                        <p>
                            password:
                            <?= $values['password'] ?>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-4"></div>
        </div>
    </div>
    <?php
endif;
?>