axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        // Handling the response data
        console.log('Data from Axios (GET):', response.data);
        displayUser(response.data)
    })

    .catch(error => {
        // Handling errors
        console.error('Error from Axios (GET):', error.message);
    });
function displayUser(data) {

    // let card = document.createElement('card');
    // let cardHeader = document.createElement('div');
    // let cardBody = document.createElement('div');
    // let cardFooter = document.createElement('div');
    
    let tbody = document.querySelector('tbody');
    for (let i = 0; i < 20; i++) {
        let tr = document.createElement('tr');
        let id = document.createElement('td');
        let Name = document.createElement('td');
        let completed = document.createElement('td');
        // let email = document.createElement('td');
    
        id.textContent = data.id;
        Name.textContent = data.title;
        completed.textContent = data.completed;
        // email.textContent = data.email;
        tr.appendChild(id);
        tr.appendChild(Name);
        tr.appendChild(completed);
        // tr.appendChild(email);
        tbody.appendChild(tr);
    }
}