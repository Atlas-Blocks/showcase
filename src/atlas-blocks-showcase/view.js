document.addEventListener( 'DOMContentLoaded', () => {

	const carousels = document.querySelectorAll(
		'[data-atlas-showcase-carousel]'
	);

	carousels.forEach( ( carousel ) => {

		const slides = carousel.querySelectorAll(
			'[data-atlas-showcase-slide]'
		);

		const prevButton = carousel.querySelector(
			'.atlas-blocks-showcase__button--prev'
		);

		const nextButton = carousel.querySelector(
			'.atlas-blocks-showcase__button--next'
		);

		if ( slides.length <= 1 || ! prevButton || ! nextButton ) {
			return;
		}

		let currentSlide = 0;

		const showSlide = ( index ) => {

			currentSlide =
				( index + slides.length ) % slides.length;

			slides.forEach( ( slide, slideIndex ) => {

				slide.classList.toggle(
					'is-active',
					slideIndex === currentSlide
				);

			} );
		};

		prevButton.addEventListener( 'click', () => {
			showSlide( currentSlide - 1 );
		} );

		nextButton.addEventListener( 'click', () => {
			showSlide( currentSlide + 1 );
		} );

		showSlide( 0 );

	} );

} );