<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-3">
        <form action="result.php" method="post">
            <div class="mb-3">
                <select name="choice" class="form-control">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" id="radio1" name="major" value="WEP" >
                <label class="form-check-label" for="radio1">WEP</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" id="radio2" name="major" value="SNA">
                <label class="form-check-label" for="radio2">SNA</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" id="redio3" name="major" value="Mobile">
                <label class="form-check-label" for="radio3">Mobile</label>
            </div>
            <hr>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="check1" name="skill[]" value="Read">
                <label class="form-check-label" for="check1">Read</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="check2" name="skill[]" value="write">
                <label class="form-check-label" for="check2">Write</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="check3" name="skill[]" value= "Speak">
                <label class="form-check-label" for="check3">speak</label>
            </div>
            <hr>
            <div class="mb-3">
                <button class="btn btn-danger">Submit</button>
            </div>
        </form>
    </div>
</body>
</html>