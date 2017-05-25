let subMenu = document.querySelectorAll('[data-role="sub-menu"]');
let listSubMenu = document.getElementsByClassName('list-sub-menu')
console.log(listSubMenu);
var ULitems = new Array();
var opened = null;	

function init() {
    ULitems = subMenu
    console.log(ULitems);
}
click = null;
itemToClose = document.getElementsByClassName('show')
let addHide = function() {
    
    if(click > 1) {
        for(var i = 0; i < itemToClose.length; i++) {
            console.log('questp',itemToClose.length);
            itemToClose[i].classList.remove('show')
        } 
        click = 1;
    }
    
}
let removeHide = function() {
    this.nextElementSibling.classList.add('show');
    ULitems.push(itemToClose)
    click++;
    console.log('primo', click);
    addHide(click);
    // click++;
console.log('click here', click);
}
subMenu.forEach(subMenu => subMenu.addEventListener('click', removeHide));
// subMenu.forEach(subMenu => subMenu.addEventListener('mouseout', addHide));