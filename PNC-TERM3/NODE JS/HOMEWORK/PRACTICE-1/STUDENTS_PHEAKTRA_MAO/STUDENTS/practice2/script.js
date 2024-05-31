// TODO
// Get URL https://reqres.in/api/users?page=2
function displayUser() {
    axios.get('https://reqres.in/api/users?page=2')
        .then(response => {
            // Handling the response data
            console.log('Data from Axios (GET):', response.data);
            let body = document.querySelector('body');
            response.data.data.forEach(Data => {
                body.innerHTML += `
                <div class="UL" style="border: 1px solid pink; margin-left: 10PX; margin-top: 10PX;">
                    <li>${Data.last_name}</li>
                    <li>${Data.email}</li>
                </div>
                `
            })
        })
    
        .catch(error => {
            // Handling errors
            console.error('Error from Axios (GET):', error.message);
        });
}
let button = document.querySelector('button');
button.addEventListener('click',displayUser);