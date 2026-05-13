<?php
/**
 * Plugin Name: Atlas Blocks Showcase
 * Description: A premium Gutenberg showcase block with split-panel layouts and interactive media displays.
 * Version: 0.1.0
 * Author: Evan Hatfield
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function atlas_blocks_showcase_init() {
	register_block_type( __DIR__ . '/build/atlas-blocks-showcase' );
}

add_action( 'init', 'atlas_blocks_showcase_init' );