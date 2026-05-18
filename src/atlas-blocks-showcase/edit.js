import { useState } from '@wordpress/element';

import {
	TextControl,
	TextareaControl,
	Button,
	ToggleControl,
	Dropdown,
	ColorPicker,
	ColorIndicator,
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
		leftBgColor = '#f3eadc',
		rightBgColor = '#0f172a',
	} = attributes;


	const previewStyle = {
		'--atlas-showcase-left-bg': leftBgColor,
		'--atlas-showcase-right-bg': rightBgColor,
	};

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

	const ColorControl = ( { label, value, onChange } ) => (
		<div className="atlas-blocks-showcase__color-control">

			<span className="atlas-blocks-showcase__color-label">
				{ label }
			</span>

			<Dropdown
				className="atlas-blocks-showcase__color-dropdown"
				contentClassName="atlas-blocks-showcase__color-popover"
				renderToggle={ ( { isOpen, onToggle } ) => (
					<Button
						className="atlas-blocks-showcase__color-button"
						onClick={ onToggle }
						aria-expanded={ isOpen }
					>
						<ColorIndicator colorValue={ value } />

						<span className="atlas-blocks-showcase__color-value">
							{ value }
						</span>
					</Button>
				) }
				renderContent={ () => (
					<ColorPicker
						color={ value }
						onChange={ onChange }
						enableAlpha={ false }
						defaultValue={ value }
					/>
				) }
			/>

		</div>
	);

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
					style={ previewStyle }
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

								<div className="atlas-blocks-showcase__control-row">

									<div className="atlas-blocks-showcase__control-item">

										<ToggleControl
											label="Image Fit"
											checked={ fitMode === 'contain' }
											onChange={ ( checked ) =>
												setAttributes( {
													fitMode: checked ? 'contain' : 'cover',
												} )
											}
											help={ fitMode === 'contain' ? 'Contain' : 'Cover' }
										/>

									</div>

									<div className="atlas-blocks-showcase__control-item">

										<ToggleControl
											label="Right Side Style"
											checked={ rightStyle === 'square' }
											onChange={ ( checked ) =>
												setAttributes( {
													rightStyle: checked ? 'square' : 'pill',
												} )
											}
											help={ rightStyle === 'square' ? 'Square' : 'Pill' }
										/>

									</div>

								</div>

								<div className="atlas-blocks-showcase__control-row">

									<div className="atlas-blocks-showcase__control-item">

										<ColorControl
											label="Left Side Color"
											value={ leftBgColor }
											onChange={ ( value ) =>
												setAttributes( {
													leftBgColor: value,
												} )
											}
										/>

									</div>

									<div className="atlas-blocks-showcase__control-item">

										<ColorControl
											label="Right Side Color"
											value={ rightBgColor }
											onChange={ ( value ) =>
												setAttributes( {
													rightBgColor: value,
												} )
											}
										/>

									</div>

								</div>

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