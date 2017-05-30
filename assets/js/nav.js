let subMenu = document.querySelectorAll('[data-role="sub-menu"]');
let listSubMenu = document.getElementsByClassName('list-sub-menu')
let itemToClose = document.getElementsByClassName('show')

let openTour = document.getElementById('openTour')
let openProject = document.getElementById('openProject')
let click = null;

let execute = function() {
    thisTarget.nextElementSibling.classList.remove('show')
    if (window.innerWidth < 767) {
        thisTarget.classList.remove('margin-bottom')
    }
}

let toggleMenu = function() {
    thisTarget = this;
    if ((click = 1) && (thisTarget.nextElementSibling.classList.contains('show'))) {
        setTimeout(execute, 2)
    }
}

let addHide = function() {
    if(click > 0) {
        for(var i = 0; i < itemToClose.length; i++) {
            itemToClose[i].classList.remove('show')
        }
    }
}
let addShow = function() {
    addHide();
    this.nextElementSibling.classList.add('show');
    click++;
    if (window.innerWidth < 767) {
        this.classList.add('margin-bottom')
    }
}
openProject.addEventListener('click', toggleMenu)
openTour.addEventListener('click', toggleMenu)
subMenu.forEach(subMenu => subMenu.addEventListener('click', addShow));
