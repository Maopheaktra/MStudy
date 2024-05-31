<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

</head>
<body>
    <div class="container mt-5">
        <form action="result.php" method="post">
            <div class="form-group mb-3">
                <input type="text" class="form-control" name="text-input" placeholder="Enter Your Name">
            </div>
            <div class="form-group mb-3">
                <input type="text" class="form-control" name="email-input" placeholder="Enter Your Email">
            </div>
            <div class="form-group mb-3">
                <input type="text" class="form-control" name="password-input" placeholder="Enter Your Password">
            </div>
            <div class="form-group mb-3">
                <input type="text" class="form-control" name="number-input" placeholder="Enter Your Number">
            </div>
            <div class="form-group mb-3">
                <textarea name="message" class="form-control"></textarea>
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Sumbit</button>
            </div>
        </form>
    </div>
</body>
</html>