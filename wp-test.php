<?php
/**
 * Plugin Name:       Test Block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wp-test
 *
 * @package           write-poetry
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function write_poetry_wp_test_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'write_poetry_wp_test_block_init' );


function write_poetry_wp_test_enqueue_common_assets() {
	// wp_enqueue_style(
	// 	'gutenberg-boilerplate-es5-step02',
	// 	plugins_url( 'animate.min.css', __FILE__ ),
	// 	array( 'wp-blocks' ),
	// 	filemtime( plugin_dir_path( __FILE__ ) . 'animate.min.css' )
	// );

	//TODO: load animate.min.css from node_modules folder
	//https://developer.wordpress.org/block-editor/how-to-guides/javascript/extending-the-block-editor/
	wp_enqueue_style( 'myguten-style', plugins_url( 'animate.min.css', __FILE__ ) );

 

}
add_action( 'enqueue_block_assets', 'write_poetry_wp_test_enqueue_common_assets' );

 
 