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
    if(click > 0) {
        for(var i = 0; i < itemToClose.length; i++) {
            console.log('questp',itemToClose.length);
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
    console.log('primo', click);
    // click++;
console.log('click here', click);
}
subMenu.forEach(subMenu => subMenu.addEventListener('click', addShow));
target = null;
subMenu.forEach(subMenu => subMenu.addEventListener('click', function autoClose(){
   
}))
// subMenu.forEach(subMenu => subMenu.addEventListener('mouseout', addHide));