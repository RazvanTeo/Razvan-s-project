var headers = Array.from(document.querySelectorAll('.accordion__item__header'));
var contents = Array.from(document.querySelectorAll('.accordion__item__content'));

headers.forEach(function(header, index) {
	header.addEventListener('click', function(event) {
		var content = contents[index];
		contents.forEach(function(c, cI) {
			if (cI !== index && c.classList.contains('show')) {
				c.classList.remove('show');
				event.currentTarget.querySelector('i').classList.add('fa-angle-up');
				event.currentTarget.querySelector('i').classList.remove('fa-angle-down');
			}
		});
		if (content.classList.contains('show')) {
			content.classList.remove('show');
			event.currentTarget.querySelector('i').classList.add('fa-angle-up');
			event.currentTarget.querySelector('i').classList.remove('fa-angle-down');
		} else {
			content.classList.add('show');
			event.currentTarget.querySelector('i').classList.add('fa-angle-down');
			event.currentTarget.querySelector('i').classList.remove('fa-angle-up');
		}
	});
});