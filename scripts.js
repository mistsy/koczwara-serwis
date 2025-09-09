'use strict';
const mobileMenuToggler = document.querySelector('#menu-toggle');
const mobileMenuWrapper = document.querySelector('#nav_wrapper');
const navigationElements = mobileMenuWrapper.querySelectorAll('a');

const mobileMenuHandler = (toggler) => {
	toggler.addEventListener('click', function () {
		if (mobileMenuToggler.classList.contains('active')) {
			mobileMenuToggler.classList.remove('active');
			mobileMenuWrapper.classList.remove('active');
		} else {
			mobileMenuToggler.classList.add('active');
			mobileMenuWrapper.classList.add('active');
		}
	});
};

mobileMenuToggler.addEventListener(
	'click',
	mobileMenuHandler(mobileMenuToggler),
);
navigationElements.forEach((element) =>
	element.addEventListener('click', mobileMenuHandler(element)),
);

const glideOptions = {
	type: 'carousel',
	perView: 1,
	autoplay: 4000
};

new Glide('.glide1', glideOptions).mount();
new Glide('.glide2', glideOptions).mount();