let closeBtn = document.getElementById('clo-btn');

let hamMenu = document.querySelector('.hamburger');

let sideBar = document.querySelector('.side-bar');

hamMenu.addEventListener('click',function(){
    sideBar.classList.add('show-side-bar');
});

closeBtn.addEventListener('click',function(){
    sideBar.classList.remove('show-side-bar');
});