/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
import { Button, Dropdown, DropdownMenu, Panel, PanelBody, PanelRow, SelectControl, TextControl, Toolbar, ToolbarGroup, ToolbarDropdownMenu } from '@wordpress/components';
 
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { BlockControls, InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';

import { useState, Fragment } from '@wordpress/element';

import { paragraph, formatBold, formatItalic, link, table } from '@wordpress/icons';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();

	const [ item, setItem ] = useState( '' );

 

	const onChangeAnimation = ( newAnimation ) => {
		setAttributes( {
			alignment: newAlignment === undefined ? 'none' : newAlignment,
		} );
	};

	return (
		<Fragment>
			<BlockControls>
				<Toolbar label="Options">
					<ToolbarGroup>
						<ToolbarDropdownMenu
							icon={ table }
							// toggleProps={ toolbarItemHTMLProps }
							label="ssss"
							controls={ [] }
						/>
					</ToolbarGroup>
				</Toolbar>
			</BlockControls>
			<InspectorControls>
				<Panel>
					<PanelBody title={ __( 'Animation' ) } initialOpen={ true }>
						<PanelRow>
							<SelectControl
								label={ __( 'Select an animation:' ) }
								value={ item }
								onChange={ ( selection ) => { setItem( selection ) } }
								__nextHasNoMarginBottom
							>
							<optgroup label="Attention seekers">
								<option value="bounce">bounce</option>
								<option value="flash">flash</option>
								<option value="pulse">pulse</option>
							</optgroup>
							<optgroup label="Sauropods">
								<option value="Diplodocus">Diplodocus</option>
								<option value="Saltasaurus">Saltasaurus</option>
								<option value="Apatosaurus">Apatosaurus</option>
							</optgroup>
							</SelectControl>
						</PanelRow>
					</PanelBody>
				</Panel>		
			</InspectorControls>
			<div { ...blockProps }>
				<InnerBlocks />
			</div>
		</Fragment>
	);
}
