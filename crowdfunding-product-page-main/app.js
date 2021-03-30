/*Hamburger Bar Menu*/
const togglebtn = document.querySelector('.toggle');
const mobileNav = document.querySelector('.nav-elements');

function showNav() {
	togglebtn.addEventListener('click', () => {
		mobileNav.classList.toggle('nav-active')
	})
}
showNav();