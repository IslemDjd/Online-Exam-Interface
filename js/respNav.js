const toggleButton = document.getElementsByClassName('toggle')[0];
const closePNG = document.getElementById("close");
const nav_btn = document.getElementById("btn");
let isOpen = false;

toggleButton.addEventListener('click', () => {
    isOpen = true
    nav_btn.classList.toggle('active');
    nav_btn.classList.toggle('nav_btn');
    closePNG.style.display = "block";
    toggleButton.style.display = "none";

});

closePNG.addEventListener('click', () => {
    isOpen = false
    nav_btn.classList.toggle('active');
    nav_btn.classList.toggle('nav_btn');
    toggleButton.style.display = "block";
    closePNG.style.display = "none";

});


window.addEventListener('resize', () => {
    if (window.innerWidth < 590) {
        if(isOpen == true){
            toggleButton.style.display = "none";
            closePNG.style.display = "block";
        }
        else{
            toggleButton.style.display = "block";
            closePNG.style.display = "none";
        }
    } 
    else {
        isOpen = false;
        toggleButton.style.display = "none";
        closePNG.style.display = "none";
        nav_btn.classList.remove('active');
        nav_btn.classList.remove('nav_btn');
        nav_btn.classList.toggle('nav_btn');

    }
});
