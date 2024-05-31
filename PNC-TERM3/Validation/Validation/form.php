<?php

function secureData($data)
{
    $data = trim($data); //remove space
    $data = htmlspecialchars($data); //not allow to run script
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
    'username'=> '',
    'code'=> '',
];

$is_form = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    if (!preg_match('/^[a-zA-Z\s]{6,}+$/', secureData($_POST['username']))) {
        $errors['username'] = 'The username is invalid';
        $border['username'] =  'is-invalid';
    }else{
        $border['username'] =  'is-valid';
        
    }
    if (!preg_match('/^(?=.*[A-Z])(?=.*[!@#$])[a-zA-Z0-9!@#$]{8,}+$/', secureData($_POST['code']))) {
        $errors['code'] = 'The code is invalid';
        $border['code'] =  'is-invalid';

    }else{
        $border['code'] =  'is-valid';
       
    }

    if (empty($errors['username']) && empty($errors['code'])) {
        $is_form = true;
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
                            <input type="text" class="form-control <?=$border['username']?>" value="" id="username" name="username" value="">
                            <small class="form-text text-danger"><?= $errors['username'] ?></small>
                        </div>
                        <div class="mb-3">
                            <label for="code" class="form-label">Code</label>
                            <input type="text" class="form-control <?=$border['code']?>" value="" id="code" name="code" value="">
                            <small class="form-text text-danger">
                                <?= $errors['code'] ?>
                            </small>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-4"></div>
    </div>
</div>

<?php if ($is_form): ?>
    <div class="container mt-3">
        <div class="row">
            <div class="col"></div>
            <div class="col">
                <div class="card">
                    <div class="card-header text-center">
                        <p>Result</p>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col">Your username is:
                                <?= $values['username'] ?>
                            </div>
                            <div class="col">Your code is:
                                <?= $values['code'] ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col"></div>
        </div>
    </div>
<?php endif; ?>