import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {

	const {
		title,
		description,
		images = [],
		fitMode = 'cover',
		rightStyle = 'pill',
	} = attributes;

	const imageSrc =
		images.length > 0
			? images[ 0 ]
			: 'https://picsum.photos/900/700';

	return (

		<div
			{
				...useBlockProps.save({
					className: `
						atlas-blocks-showcase
						${
							rightStyle === 'square'
								? 'atlas-blocks-showcase--square'
								: ''
						}
					`,
				})
			}
		>

			<div className="atlas-blocks-showcase__content">

				<h2>{ title }</h2>

				<p>{ description }</p>

			</div>

			<div className="atlas-blocks-showcase__carousel">

				<img
					className={
						fitMode === 'contain'
							? 'atlas-blocks-showcase__image atlas-blocks-showcase__image--contain'
							: 'atlas-blocks-showcase__image'
					}
					src={ imageSrc }
					alt={ title || 'Showcase preview' }
					style={{
						objectFit: fitMode,
						objectPosition: 'center',
					}}
				/>

			</div>

		</div>

	);
}