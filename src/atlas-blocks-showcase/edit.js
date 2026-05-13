import { useState } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes } ) {

	const {
		title,
		description,
		images
	} = attributes;

	const [isEditing, setIsEditing] = useState(false);

	const blockProps = useBlockProps({
		className: 'atlas-blocks-showcase',
	});

	const demoImages = [
		'https://picsum.photos/900/700?1',
		'https://picsum.photos/900/700?2',
		'https://picsum.photos/900/700?3',
	];

	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide(
			(currentSlide + 1) % demoImages.length
		);
	};

	const prevSlide = () => {
		setCurrentSlide(
			(currentSlide - 1 + demoImages.length) % demoImages.length
		);
	};

	return (
		<div {...blockProps}>

			{!isEditing ? (

				<div className="atlas-blocks-showcase__preview-mode">


					<div className="atlas-blocks-showcase__content">

					<div className="atlas-blocks-showcase__content-header">

						<button
							className="atlas-blocks-showcase__edit-button"
							onClick={() => setIsEditing(true)}
						>
							Edit
						</button>

					</div>

					<h2>Atlas Blocks Showcase</h2>

						<p>
							Display your custom Gutenberg blocks
							in a premium split-panel showcase layout.
						</p>
					</div>

					<div className="atlas-blocks-showcase__carousel">

						<button
							className="atlas-blocks-showcase__button atlas-blocks-showcase__button--prev"
							onClick={prevSlide}
						>
							<span>‹</span>
						</button>

						<img
							src={demoImages[currentSlide]}
							alt=""
						/>

						<button
							className="atlas-blocks-showcase__button atlas-blocks-showcase__button--next"
							onClick={nextSlide}
						>
							<span>›</span>
						</button>

					</div>

				</div>

			) : (

				<div className="atlas-blocks-showcase__editor-mode">

					<div className="atlas-blocks-showcase__editor-header">

						<h3>Edit Showcase</h3>

						<button
							className="atlas-blocks-showcase__done-button"
							onClick={() => setIsEditing(false)}
						>
							Done
						</button>

					</div>

					<div className="atlas-blocks-showcase__editor-body">

						<p>
							Editor controls go here.
						</p>

					</div>

				</div>

			)}

		</div>
	);
}