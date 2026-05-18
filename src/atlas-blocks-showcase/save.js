/** Front end view of the Atlas Blocks Showcase */

import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {

	const {
		title,
		description,
		images = [],
		fitMode = 'cover', // Default image fit mode
		rightStyle = 'pill', // Default right side style
		leftBgColor = '#f3eadc', // Default left background color
		rightBgColor = '#0f172a', // Default right background color
	} = attributes;


	//Pass saved color settings to the block styles as CSS variables.
	const previewStyle = {
		'--atlas-showcase-left-bg': leftBgColor,
		'--atlas-showcase-right-bg': rightBgColor,
	};

	// Apply the contain class only when the user chooses the contain image fit option.
	const imageClassName =
		fitMode === 'contain'
			? 'atlas-blocks-showcase__image atlas-blocks-showcase__image--contain'
			: 'atlas-blocks-showcase__image';

	const defaultDescription =
		'Display your custom Gutenberg blocks in a ' +
		'premium split-panel showcase layout.';

	const defaultTitle = 'Atlas Blocks Showcase';

	return (

		<div
			{
				...useBlockProps.save( {
					className: 'atlas-blocks-showcase',
				} )
			}
		>

			{/*
				Preview shell
				Holds the saved color variables and optional right-side shape class.
			*/}

			<div
				className={ `
					atlas-blocks-showcase__preview-shell
					${
						rightStyle === 'square'
							? 'atlas-blocks-showcase__preview-shell--square'
							: ''
					}
				` }
				style={ previewStyle }
			>

				<div className="atlas-blocks-showcase__preview-mode">

					{/*
						Left content panel
						Displays the block title and description.
					*/}
					<div className="atlas-blocks-showcase__content">

						<h2>
							{ title || defaultTitle }
						</h2>

						<p>
							{ description || defaultDescription }
						</p>

					</div>

					{/*
						Right carousel panel
						Uses data attributes so the front-end carousel script
						can find the carousel and its slides.
					*/}

					<div
						className="atlas-blocks-showcase__carousel"
						data-atlas-showcase-carousel
					>
						
						{/*
							Only show carousel buttons when there is more than one image.
						*/}
						{ images.length > 1 && (
							<button
								className="atlas-blocks-showcase__button atlas-blocks-showcase__button--prev"
								type="button"
								aria-label="Previous image"
							>
								<span>‹</span>
							</button>
						) }

						{/*
							Output each saved image as a carousel slide.
							The first image starts active by default.
						*/}

						{ images.map( ( image, index ) => (

							<img
								key={ image }
								className={ `
									${ imageClassName }
									${
										index === 0
											? 'is-active'
											: ''
									}
								` }
								src={ image }
								alt={
									title
										? `${ title } slide ${ index + 1 }`
										: `Showcase preview slide ${ index + 1 }`
								}
								style={ {
									objectFit: fitMode,
									objectPosition: 'center',
								} }
								data-atlas-showcase-slide
							/>

						) ) }

						{ images.length > 1 && (
							<button
								className="atlas-blocks-showcase__button atlas-blocks-showcase__button--next"
								type="button"
								aria-label="Next image"
							>
								<span>›</span>
							</button>
						) }

					</div>

				</div>

			</div>

		</div>

	);
}