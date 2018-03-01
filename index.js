var header = document.querySelector('.header');
var menu = document.querySelector('.navigation');
var sticky = menu.offsetTop;

window.onscroll = function() {
	if (window.pageYOffset >= sticky) {
		menu.classList.add("sticky");
	} else {
		menu.classList.remove("sticky");
	}
};

header.addEventListener('click', function(event) {
	if (event.target.className === 'fa fa-bars fa-3x') {
		if (menu.classList.contains('show-menu')) {
			return menu.classList.remove('show-menu');
		}

		menu.classList.add('show-menu')
	}
});