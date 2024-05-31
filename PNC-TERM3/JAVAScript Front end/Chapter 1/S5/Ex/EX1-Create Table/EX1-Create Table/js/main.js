function createRow(data) {
    // TODO:
    // create tr element 
    let tr =document.createElement('tr');
    let tdId= document.createElement('td');
    let tdName=document.createElement('td');
    let tdEmail=document.createElement('td');
    let tdPhone=document.createElement('td');
    let tdAction=document.createElement('td');
    let btn=document.createElement('button');
    // create tdId, tdName, tdEmail, tdPhone, tdAction and btn element following the format in html file
    tdId.textContent=data.id
    tdName.textContent=data.name
    tdEmail.textContent=data.email
    tdPhone.textContent=data.phone
    btn.textContent="Delete"
    btn.classList.add('btn')
    tr.appendChild(tdId)
    tr.appendChild(tdName)
    tr.appendChild(tdEmail)
    tr.appendChild(tdPhone)
    tr.appendChild(tdAction)
    tdAction.appendChild(btn)
    // add text content to tdId, ;, tdPhone, tdName, and add btn to tdAction
    let body=document.querySelector('tbody');
    body.appendChild(tr)
    // append tdId, tdName, tdEmail, tdPhone, tdAction to tr
    // append tr to tbody 

};


// main
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
]

const tbody = document.querySelector('tbody');
for (let student of students) {
    createRow(student)
}