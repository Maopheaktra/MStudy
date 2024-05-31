
// const viewImage = (event) => {
//     let parentPosters = event.target.closest('.poster');
    
// }


// Main 
const posters = document.querySelectorAll('.poster');
const right = document.querySelector('.right');
const view = document.querySelector('.view');

const Image = document.createElement('img');
const title = document.createElement('h1');
const p = document.createElement('p');


for (const  poster of posters) {
    poster.onclick = ()=>{
        Image.src = poster.firstElementChild.firstElementChild.src;
        title.textContent = poster.lastElementChild.firstElementChild.textContent;
        p.textContent = poster.lastElementChild.lastElementChild.textContent;
        view.appendChild(Image);
        view.appendChild(title);
        view.appendChild(p);
    }
}