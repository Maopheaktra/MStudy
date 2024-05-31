<div class="container-fluid">

    <!-- DataTales Example -->
    <div class="card shadow p-4">
        <form action="views/items/create_item.item.php" method="POST">
            <div class="form-group">
                <label for="title">Title:</label>
                <input type="title" class="form-control" placeholder="Enter title" id="title">
            </div>
            <div class="form-group">
                <label for="description">Description:</label>
                <input type="description" name="description" class="form-control" placeholder="Enter description" id="description">
            </div>
            <div class="form-group form-check">
                <label class="form-check-label">
                    <input class="form-check-input" type="checkbox"> Remember me
                </label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</div>

