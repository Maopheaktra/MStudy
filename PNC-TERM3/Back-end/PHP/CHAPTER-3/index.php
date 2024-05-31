<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>

<div class="container mt-3">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">LOGIN</button>
</div>

<!-- The Modal -->
<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Please enter your name and password</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
            <form action="process.php" method = "post">
                <div class="mb-3">
                    <input type="text" class = "form-control" placeholder="Username" name = "Username">
                </div>
                <div class="mb-3">
                    <input type="password" name = "pass" placeholder = "Password" class = "form-control">
                </div>
                <div class="mb-3 d-grid gap-2">
                    <button class = "btn btn-primary btn-block">Login</button>
                </div>
            </form>
      </div>


    </div>
  </div>
</div>


</body>
</html>