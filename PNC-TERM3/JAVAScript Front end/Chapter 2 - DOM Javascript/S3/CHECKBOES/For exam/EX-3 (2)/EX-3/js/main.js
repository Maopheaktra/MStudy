const removePoster = (event) => {
    let parentPoster = event.target.closest('.poster');
    let isconfirm = confirm("Are you sure to remove?")
    if (isconfirm) {
        parentPoster.remove();
    }
}


//Main 
// let posters = document.querySelectorAll('.poster-footer');
let posters = document.querySelectorAll('button');
for (let poster of posters) {
    poster.addEventListener("click", removePoster)
}