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

import { Fragment } from '@wordpress/element';

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
export default function Edit() {
	const blockProps = useBlockProps();
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
								label={ __( 'Select some users:' ) }
								value={ "size" }
								options={ [
									{ label: 'Big', value: '100%' },
									{ label: 'Medium', value: '50%' },
									{ label: 'Small', value: '25%' },
								] }
								// onChange={ ( newSize ) => setSize( newSize ) }
								// __nextHasNoMarginBottom
							/>
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
