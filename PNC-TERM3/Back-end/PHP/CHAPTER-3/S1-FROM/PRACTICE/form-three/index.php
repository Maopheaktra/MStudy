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
            <form action="result.php" method = "post">
                <div class="mb-3">
                    <input type="date" name = "date" class = "form-control">
                </div>
                <div class="mb-3">
                    <input type="range" name = "range" class = "form-range" min = "1" max = "100">
                </div>
                <div class="mb-3">
                    <select name="choices[]" multiple class = "form-select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div class="mb-3 d-grid gap-2">
                    <button class = "btn btn-primary btn-block">Submit</button>
                </div>
            </form>
        </div> 
</body>
</html>