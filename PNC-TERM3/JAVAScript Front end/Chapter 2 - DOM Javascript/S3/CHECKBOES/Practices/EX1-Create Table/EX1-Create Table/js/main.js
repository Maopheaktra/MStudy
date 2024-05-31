let students = [
    {
        id: 1,
        name: "John",
        email: "john@example.com",
        phone: "123-456-3303"
    },
    {
        id: 2,
        name: "Jane",
        email: "jane@example.com",
        phone: "123-456-3304"
    },
    {
        id: 3,
        name: "Mary",
        email: "mary@example.com",
        phone: "123-456-3305"
    },
    {
        id: 4,
        name: "Peter",
        email: "peter@example.com",
        phone: "123-456-3306"
    },
    {
        id: 5,
        name: "Lisa",
        email: "lisa@example.com",
        phone: "123-456-3307"
    }
];

function createRow(student) {
    const tableRow = document.createElement('tr');
    const tdId = document.createElement('td');
    tdId.textContent = student.id;
    const tdUsernmae = document.createElement('td');
    tdUsernmae.textContent = student.name;
    const tdEmail = document.createElement('td');
    tdEmail.textContent = student.email;
    const tdPhone = document.createElement('td');
    tdPhone.textContent = student.phone;
    const tdAction = document.createElement('td');
    const btn = document.createElement('button');
    btn.setAttribute('class', 'detail');
    btn.textContent = 'Details';
    tdAction.appendChild(btn);
    tableRow.appendChild(tdId);
    tableRow.appendChild(tdUsernmae);
    tableRow.appendChild(tdEmail);
    tableRow.appendChild(tdPhone);
    tableRow.appendChild(tdAction);
    tbody.appendChild(tableRow);
}

function showStudentDetails(student) {


    let showCard = document.querySelector('.card');
    showCard.style.display = 'block';

    let tr = student.target.closest('tr');
    console.log(tr);

    let idCard = document.getElementById('cardId');
    let nameCard = document.getElementById('cardName');
    let emailCard = document.getElementById('cardEmail');
    let phoneCard = document.getElementById('cardPhone');


    idCard.textContent = tr.children[0].textContent;
    nameCard.textContent =tr.children[1].textContent ;
    emailCard.textContent =tr.children[2].textContent ;
    phoneCard.textContent = tr.children[3].textContent;


}

// Main
const tbody = document.getElementById('studentsTableBody');
const buttons = document.getElementsByClassName('detail');
for (let student of students) {
    createRow(student);
}
for (const button of buttons) {
    button.addEventListener('click', showStudentDetails);
}