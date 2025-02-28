

getData(); // Invoke this function to get data first
function showUser(users) {
    let tbody = document.querySelector('tbody');
    users.forEach(user => {

        let tr = document.createElement('tr');
        let tdPrfile = document.createElement('img');
        tdPrfile.className = 'img';
        let tdFirstName = document.createElement('td');
        let tdLastName = document.createElement('td');
        let tdEmail = document.createElement('td');

        tdPrfile.src = user['avatar'];
        tdFirstName.textContent = user['first_name'];
        tdLastName.textContent = user['last_name'];
        tdEmail.textContent = user['email'];

        tr.appendChild(tdPrfile);
        tr.appendChild(tdFirstName);
        tr.appendChild(tdLastName);
        tr.appendChild(tdEmail);
        tbody.appendChild(tr);

    });
};
