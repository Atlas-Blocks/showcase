<?php
// This file is generated. Do not modify it manually.
return array(
	'atlas-blocks-showcase' => array(
		'apiVersion' => 3,
		'name' => 'atlas-blocks/showcase',
		'title' => 'Atlas Blocks Showcase',
		'category' => 'design',
		'icon' => 'slides',
		'description' => 'A premium showcase block.',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Atlas Blocks Showcase'
			),
			'description' => array(
				'type' => 'string',
				'default' => 'Display your custom Gutenberg blocks in a premium layout.'
			),
			'images' => array(
				'type' => 'array',
				'default' => array(
					
				)
			)
		),
		'supports' => array(
			'html' => false
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	)
);
