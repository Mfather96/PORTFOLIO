let burgerbtn = document.querySelector('.burg-icon-container');

burgerbtn.addEventListener('click', openMenu);


function openMenu(){
	document.querySelector('.burger').classList.toggle('open-menu')
}