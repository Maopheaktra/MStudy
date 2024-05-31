// GET URL : https://reqres.in/api/unknown/2

axios.get('https://reqres.in/api/unknown/2')
    .then(response => {
        // Handling the response data
        console.log('Data from Axios (GET):', response.data);
        displayUser(response.data.data);
    })

    .catch(error => {
        // Handling errors
        console.error('Error from Axios (GET):', error.message);
    });

function displayUser(user) {
    let text = document.querySelector('#theText');
    text.textContent = user['name'];
    text.style .background = user['color']; 
}