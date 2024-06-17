let menu_logo = document.querySelector('.mobile-bar');
let menu_bar = document.querySelector('header ul');
menu_logo.addEventListener('click',()=>{
    menu_bar.classList.toggle('showMenu')
});
document.body.scrollIntoView({behavior:'smooth'});

let add_btn = document.querySelectorAll('.item button')
add_btn.forEach((addbtn)=>{
    addbtn.addEventListener('click',()=>{
        alert('sucessfully Added')
    })
})
