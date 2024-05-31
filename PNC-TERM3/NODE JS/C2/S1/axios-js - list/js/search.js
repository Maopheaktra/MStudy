
const tbody = document.querySelector("tbody");
const filter = document.getElementById("search-input"); // Input property

// get all the data
function getData() {
    axios.get("https://reqres.in/api/users?page=2")
    .then((response) => {
        data = response.data.data;
        displayData(data);
    });
}

// Display the data depend on providers
function displayData(data) {
    tbody.innerHTML = "";
    data.forEach((item) => {
        tbody.innerHTML += `
            <tr>
                <td class="border text-center">
                    <img class="rounded-circle" src="${item.avatar}">    
                </td>
                <td class="border">${item.first_name}</td>
                <td class="border">${item.last_name}</td>
                <td class="border">${item.email}</td>
            </tr>
            `;
    });
}

// search by first name to filter
filter.oninput = (event) => {
    if (event.target.value != "") {
        newData = data.filter((user) => user.first_name.toLowerCase().includes(event.target.value.toLowerCase()))
        displayData(newData);
    }else if(event.target.value == "") {
        getData();
    }
}