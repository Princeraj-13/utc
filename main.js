let list = document.querySelectorAll(".navigation li");

function activeLink() {
    list.forEach((item) => {
        item.classList.remove('active');
    });
    this.classList.add('active');
}

list.forEach(item => item.addEventListener("mouseover", activeLink))

// toggle menu

let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
 navigation.classList.toggle("active");
 main.classList.toggle("active");
};

//popup add question

const menubtn = document.querySelector('#menu-btn')
        const menu = document.querySelector('#add')
        menubtn.addEventListener('click', () => {
            menu.classList.toggle('hide')
        })
        document.addEventListener('click', e => {
           if(!menu.contains(e.target)&& e.target !== menubtn){
            menu.classList.add('hide')
           }
        })