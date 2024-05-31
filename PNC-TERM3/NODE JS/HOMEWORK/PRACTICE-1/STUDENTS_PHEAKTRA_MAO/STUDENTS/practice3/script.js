// TODO
// GET URL https://reqres.in/api/unknown/23
function displayUser(list) {
    axios.get('https://reqres.in/api/unknown/23')
    .then(response => {
        // Handling the response data
        console.log('Data from Axios (GET):', response.data);
        // displayUser(response.data.data);
    })

    .catch(error => {
        // Handling errors
        console.error('Error from Axios (GET):', error.message);
        if (error.message == "Request failed with status code 404") {
            let text = document.querySelector('#theText');
            text.textContent = "SORRY WE ARE SLEEPING";
        }
    });
}
let button = document.querySelector('button');
button.addEventListener('click',displayUser);