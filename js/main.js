document.addEventListener('DOMContentLoaded', () => {

	/* ===============================
	   NAVEGACIÓN ACTIVA
	================================ */

	const navLinks = document.querySelectorAll('.nav-links a');
	const currentPage = window.location.pathname.split('/').pop() || 'index.html';

	navLinks.forEach(link => {
		const href = link.getAttribute('href');
		if (href === currentPage || (currentPage === '' && href === 'index.html')) {
			link.classList.add('active');
		}
	});

	/* ===============================
	   ANIMACIÓN DE ENTRADA (SECCIONES)
	================================ */

	const observeElements = document.querySelectorAll('.about-card, .skill-card, .contact-info, .contact-form');

	const observer = new IntersectionObserver(entries => {
		entries.forEach((entry, index) => {
			if (entry.isIntersecting) {
				setTimeout(() => {
					entry.target.style.opacity = '1';
					entry.target.style.transform = 'translateY(0)';
				}, index * 100);
			}
		});
	}, {
		threshold: 0.1
	});

	observeElements.forEach(element => {
		element.style.opacity = '0';
		element.style.transform = 'translateY(30px)';
		element.style.transition = 'all 0.6s ease';
		observer.observe(element);
	});

	/* ===============================
	   FORMULARIO DE CONTACTO (UI)
	================================ */

	const contactForm = document.querySelector('.contact-form');

	if (contactForm) {
		contactForm.addEventListener('submit', e => {
			e.preventDefault();

			const button = contactForm.querySelector('button');
			const originalText = button.textContent;
			
			button.textContent = '✓ Mensaje enviado';
			button.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';

			setTimeout(() => {
				button.textContent = originalText;
				button.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
				contactForm.reset();
			}, 2500);
		});
	}

	/* ===============================
	   SCROLL SUAVE
	================================ */

	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', e => {
			e.preventDefault();
			const target = document.querySelector(anchor.getAttribute('href'));
			if (target) {
				target.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		});
	});

	/* ===============================
	   EFECTO PARALLAX EN HERO
	================================ */

	const hero = document.querySelector('.hero');
	
	if (hero) {
		window.addEventListener('scroll', () => {
			const scrolled = window.pageYOffset;
			const heroContent = hero.querySelector('.hero-content');
			if (heroContent && scrolled < window.innerHeight) {
				heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
				heroContent.style.opacity = 1 - (scrolled / 500);
			}
		});
	}

	/* ===============================
	   DEBUG
	================================ */

	console.info('✓ Portafolio cargado correctamente');
	console.info('📱 Responsive: 375px - 1920px');
	console.info('🎨 Diseño moderno con gradientes');

});
