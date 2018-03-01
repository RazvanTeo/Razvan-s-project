var carousel = document.querySelector('.carousel'),
	carouselList = document.querySelector('.carousel-viewport ul')
carouselItems = document.querySelectorAll('.carousel-viewport ul li'),
	carouselLength = carouselItems.length,
	paginationList = document.querySelector('.carousel-pagination ul'),
	carouselPrevious = document.querySelector('.carousel .carousel-previous'),
	carouselNext = document.querySelector('.carousel .carousel-next'),
	currentPage = 0,
	fps = 60 / 1000;
var maxWidth = 1610;

function getWidth(windowWidth) {
	return (windowWidth > maxWidth ? maxWidth : windowWidth);
}

function sizeCarouselElements() {
	var windowWidth = window.innerWidth;
	carouselList.style.width = getWidth(windowWidth) * carouselLength + 'px';
	carouselItems.forEach(function(item) {
		item.style.width  = getWidth(windowWidth) + 'px';
	});
}

function generateCarouselPagination() {
	for (var i = 0; i < carouselLength; i++) {
		var paginationItem = document.createElement('li');
		paginationList.appendChild(paginationItem);
	}
	paginationList.firstChild.className = 'active';
}

function updateCarouselPagination() {
	var paginationChildren = paginationList.childNodes;
	for (var i = 0; i < paginationChildren.length; i++) paginationChildren[i].className = '';
	paginationChildren[currentPage].className = 'active';
}

function handleCarouselPreviousClicked() {
	if (currentPage <= 0) return;
	currentPage--;
	animateViewToCurrentPage();
	updateCarouselPagination();
}

function handleCarouselNextClicked() {
	if (currentPage >= carouselLength - 1) return;
	currentPage++;
	animateViewToCurrentPage();
	updateCarouselPagination();
}

function setViewToCurrentPage() {
	carouselList.className = '';
	carouselList.style.left = -(getWidth(window.innerWidth) * currentPage) + 'px';
}

function animateViewToCurrentPage() {
	carouselList.className = 'animate';
	carouselList.style.left = -(getWidth(window.innerWidth) * currentPage) + 'px';
}

sizeCarouselElements();
generateCarouselPagination();
window.addEventListener('resize', sizeCarouselElements);
window.addEventListener('resize', setViewToCurrentPage);
carouselPrevious.addEventListener('click', handleCarouselPreviousClicked);
carouselNext.addEventListener('click', handleCarouselNextClicked);