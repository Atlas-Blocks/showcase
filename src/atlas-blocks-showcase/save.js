import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {

	const {
		title,
		description,
		images = [],
		fitMode = 'cover',
		rightStyle = 'pill',
		leftBgColor = '#f3eadc',
		rightBgColor = '#0f172a',
	} = attributes;

	const previewStyle = {
		'--atlas-showcase-left-bg': leftBgColor,
		'--atlas-showcase-right-bg': rightBgColor,
	};

	const imageClassName =
		fitMode === 'contain'
			? 'atlas-blocks-showcase__image atlas-blocks-showcase__image--contain'
			: 'atlas-blocks-showcase__image';

	return (

		<div
			{
				...useBlockProps.save( {
					className: 'atlas-blocks-showcase',
				} )
			}
		>

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

					<div className="atlas-blocks-showcase__content">

						<h2>
							{ title || 'Atlas Blocks Showcase' }
						</h2>

						<p>
							{
								description ||
								'Display your custom Gutenberg blocks in a premium split-panel showcase layout.'
							}
						</p>

					</div>

					<div
						className="atlas-blocks-showcase__carousel"
						data-atlas-showcase-carousel
					>

						{ images.length > 1 && (
							<button
								className="atlas-blocks-showcase__button atlas-blocks-showcase__button--prev"
								type="button"
								aria-label="Previous image"
							>
								<span>‹</span>
							</button>
						) }

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