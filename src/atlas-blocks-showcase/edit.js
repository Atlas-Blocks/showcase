import { useState } from '@wordpress/element';

import {
	TextControl,
	TextareaControl,
	Button,
	SelectControl,
} from '@wordpress/components';

import {
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes } ) {

	const {
		title,
		description,
		images = [],
		fitMode = 'cover',
		rightStyle = 'pill',
	} = attributes;

	const [ isEditing, setIsEditing ] = useState( false );

	const blockProps = useBlockProps({
		className: 'atlas-blocks-showcase',
	});

	const showcaseImages = images;

	const [ currentSlide, setCurrentSlide ] = useState( 0 );

	const nextSlide = () => {

		if ( showcaseImages.length === 0 ) {
			return;
		}

		setCurrentSlide(
			( currentSlide + 1 ) % showcaseImages.length
		);
	};

	const prevSlide = () => {

		if ( showcaseImages.length === 0 ) {
			return;
		}

		setCurrentSlide(
			( currentSlide - 1 + showcaseImages.length ) %
			showcaseImages.length
		);
	};

	return (

		<div { ...blockProps }>

			{ ! isEditing ? (

				<div
					className={ `
						atlas-blocks-showcase__preview-shell
						${
							rightStyle === 'square'
								? 'atlas-blocks-showcase__preview-shell--square'
								: ''
						}
					` }
				>

					<div className="atlas-blocks-showcase__preview-mode">

						<div className="atlas-blocks-showcase__content">

							<div className="atlas-blocks-showcase__content-header">

								<button
									className="atlas-blocks-showcase__edit-button"
									onClick={ () => setIsEditing( true ) }
								>
									Edit
								</button>

							</div>

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

						<div className="atlas-blocks-showcase__carousel">

							{ showcaseImages.length > 0 && (

								<>

									<button
										className="atlas-blocks-showcase__button atlas-blocks-showcase__button--prev"
										onClick={ prevSlide }
									>
										<span>‹</span>
									</button>

									<img
										className={
											fitMode === 'contain'
												? 'atlas-blocks-showcase__image atlas-blocks-showcase__image--contain is-active'
												: 'atlas-blocks-showcase__image is-active'
										}
										src={ showcaseImages[ currentSlide ] }
										alt={ `Slide ${ currentSlide + 1 }` }
										style={ {
											objectFit: fitMode,
											objectPosition: 'center',
										} }
									/>

									<button
										className="atlas-blocks-showcase__button atlas-blocks-showcase__button--next"
										onClick={ nextSlide }
									>
										<span>›</span>
									</button>

								</>
							) }

						</div>

					</div>

				</div>

			) : (

				<div className="atlas-blocks-showcase__editor-mode">

					<div className="atlas-blocks-showcase__editor-header">

						<h3>Edit Showcase</h3>

						<button
							className="atlas-blocks-showcase__done-button"
							onClick={ () => setIsEditing( false ) }
						>
							Done
						</button>

					</div>

					<div className="atlas-blocks-showcase__editor-layout">

						<div className="atlas-blocks-showcase__editor-body">

							<div className="atlas-blocks-showcase__editor-fields">

								<TextControl
									label="Title"
									value={ title }
									onChange={ ( value ) =>
										setAttributes( {
											title: value,
										} )
									}
									maxLength={ 40 }
								/>

								<TextareaControl
									label="Description"
									value={ description }
									onChange={ ( value ) =>
										setAttributes( {
											description: value,
										} )
									}
									maxLength={ 220 }
								/>

								<SelectControl
									label="Image Fit"
									value={ fitMode }
									options={ [
										{ label: 'Cover', value: 'cover' },
										{ label: 'Contain', value: 'contain' },
									] }
									onChange={ ( value ) =>
										setAttributes( { fitMode: value } )
									}
								/>

								<SelectControl
									label="Right Side Style"
									value={ rightStyle }
									options={ [
										{ label: 'Pill', value: 'pill' },
										{ label: 'Square', value: 'square' },
									] }
									onChange={ ( value ) =>
										setAttributes( { rightStyle: value } )
									}
								/>

								<div className="atlas-blocks-showcase__image-upload">

									<p>Showcase Images</p>

									<MediaUploadCheck>

										<MediaUpload
											onSelect={ ( media ) => {

												setAttributes( {
													images: media.map(
														( img ) => img.url
													),
												} );

												setCurrentSlide( 0 );
											} }
											allowedTypes={ [ 'image' ] }
											multiple
											gallery
											value={ images }
											render={ ( { open } ) => (

												<Button
													variant="primary"
													onClick={ open }
												>
													Select Images
												</Button>

											) }
										/>

									</MediaUploadCheck>

								</div>

							</div>

						</div>

						<div className="atlas-blocks-showcase__editor-preview">

							{
								showcaseImages.length > 0 && (
									<>

										<div className="atlas-blocks-showcase__editor-preview-image">
											<img
												src={
													showcaseImages[
														currentSlide
													]
												}
												alt={ `Slide ${ currentSlide + 1 }` }
												style={ {
													objectFit: fitMode,
													objectPosition: 'center',
												} }
											/>
										</div>

										<button
											className="atlas-blocks-showcase__button atlas-blocks-showcase__button--prev"
											onClick={ prevSlide }
										>
											<span>‹</span>
										</button>

										<button
											className="atlas-blocks-showcase__button atlas-blocks-showcase__button--next"
											onClick={ nextSlide }
										>
											<span>›</span>
										</button>

									</>
								)
							}

						</div>

					</div>

				</div>

			) }

		</div>

	);
}