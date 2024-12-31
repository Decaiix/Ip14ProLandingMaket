const bar = document.querySelector('.mobile-menu-svg')
const dropMenu = document.querySelector('.mobile-list')
const mobileClose = document.querySelector('.mobile-close')

bar.onclick = function (){
    dropMenu.classList.toggle('open')
}
mobileClose.onclick = function (){
    dropMenu.classList.toggle('open')
}
