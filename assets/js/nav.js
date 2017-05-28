let subMenu = document.querySelectorAll('[data-role="sub-menu"]');
let listSubMenu = document.getElementsByClassName('list-sub-menu')
console.log(listSubMenu);
var ULitems = new Array();
var opened = null;	

click = null;
itemToClose = document.getElementsByClassName('show')
let addHide = function() {
    if(click > 0) {
        for(var i = 0; i < itemToClose.length; i++) {
            itemToClose[i].classList.remove('show')
        } 
    click = 0;
    }    
}
let addShow = function() {
    ULitems.push(itemToClose)
    addHide(click);
    this.nextElementSibling.classList.add('show');
    click++;
    counter++;
    if (window.innerWidth < 767) {
        this.classList.add('margin-bottom')
    }
}
subMenu.forEach(subMenu => subMenu.addEventListener('click', addShow));
counter = null;

let autoClose = function(){
   targetParent = this.id;
   target = targetParent.slice('open').toLowerCase();
   temporaryChild = this.nextElementSibling
}