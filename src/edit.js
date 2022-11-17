/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
import { Button, Dropdown, DropdownMenu, Panel, PanelBody, PanelRow, Placeholder, SelectControl, TextControl, Toolbar, ToolbarGroup, ToolbarDropdownMenu } from '@wordpress/components';
 
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
 * Internal dependencies
 */
 import metadata from './block.json';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
	const {
		attributes: { animationName, animationSpeed, animationRepeat, animationDelay },
		setAttributes,
		isSelected
	} = props;


	const baseClassName = 'animate__animated';

	const blockProps = useBlockProps( {
		className: `${baseClassName} animate__${ animationName }`,
	} );
console.log(blockProps);

	// const [ item, setItem ] = useState( '' );

 

	const onChangeAnimationName = ( newAnimation ) => {
		setAttributes( {
			animationName: newAnimation === undefined ? 'none' : newAnimation,
		} );
	};

	const onChangeAnimationDelay = ( newAnimation ) => {
		setAttributes( {
			animationDelay: newAnimation === undefined ? 'none' : newAnimation,
		} );
	};

	const onChangeAnimationSpeed = ( newAnimation ) => {
		setAttributes( {
			animationSpeed: newAnimation === undefined ? 'none' : newAnimation,
		} );
	};

	const onChangeAnimationRepeat = ( newAnimation ) => {
		setAttributes( {
			animationRepeat: newAnimation === undefined ? 'none' : newAnimation,
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
								label={ __( 'Animation name' ) }
								// value={ item }
								// onChange={ ( selection ) => { setItem( selection ) } }
								value={ animationName }
								onChange={ onChangeAnimationName }
								// __nextHasNoMarginBottom
							>
								<optgroup label="Attention seekers">
									<option value="bounce">bounce</option>
									<option value="flash">flash</option>
									<option value="pulse">pulse</option>
									<option value="rubberBand">rubberBand</option>
									<option value="shakeX">shakeX</option>
									<option value="shakeY">shakeY</option>
									<option value="headShake">headShake</option>
									<option value="swing">swing</option>
									<option value="tada">tada</option>
									<option value="wobble">wobble</option>
									<option value="jello">jello</option>
									<option value="jello">heartBeat</option>
								</optgroup>
								<optgroup label="Back entrances">
									<option value="backInDown">backInDown</option>
									<option value="backInLeft">backInLeft</option>
									<option value="backInRight">backInRight</option>
									<option value="backInUp">backInUp</option>
								</optgroup>
								<optgroup label="Back exits">
									<option value="backOutDown">backOutDown</option>
									<option value="backOutLeft">backOutLeft</option>
									<option value="backOutRight">backOutRight</option>
									<option value="backOutUp">backOutUp</option>
								</optgroup>
								<optgroup label="Bouncing entrances">
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
								</optgroup>
								<optgroup label="Bouncing exits">
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
								</optgroup>
								<optgroup label="Fading entrances">
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
								</optgroup>
								<optgroup label="Fading exits">
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
								</optgroup>
								<optgroup label="Flippers">
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
								</optgroup>
								<optgroup label="Lightspeed">
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
								</optgroup>
								<optgroup label="Rotating entrances">
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
								</optgroup>
								<optgroup label="Rotating exits">
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
								</optgroup>
								<optgroup label="Specials">
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
								</optgroup>
								<optgroup label="Zooming entrances">
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
								</optgroup>
								<optgroup label="Zooming exits">
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
								</optgroup>
								<optgroup label="Sliding entrances">
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
								</optgroup>
								<optgroup label="Sliding exits">
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
								</optgroup>
							</SelectControl>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label={ __( 'Delay' ) }
								// value={ item }
								options={ [
									{ value: '', label: 'Select a Delay', disabled: true },
									{ value: 'delay-2s', label: '2s' },
									{ value: 'delay-3s', label: '3s' },
									{ value: 'delay-4s', label: '4s' },
									{ value: 'delay-5s', label: '5s' },
								] }
								value={ animationName }
								onChange={ onChangeAnimationDelay }
								// __nextHasNoMarginBottom
							>
							</SelectControl>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label={ __( 'Speed' ) }
								value={ animationSpeed }
								options={ [
									{ value: '', label: 'Select the speed of the animation:', disabled: true },
									{ value: 'slow', label: '2s' },
									{ value: 'slower', label: '3s' },
									{ value: 'fast', label: '800ms' },
									{ value: 'faster', label: '500ms' },
								] }
								onChange={ onChangeAnimationSpeed }
								// __nextHasNoMarginBottom
							>
							</SelectControl>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label={ __( 'Repeat' ) }
								value={ animationRepeat }
								options={ [
									{ value: '', label: 'Select the iteration count of the animation:', disabled: true },
									{ value: 'repeat-1', label: '1' },
									{ value: 'repeat-2', label: '2' },
									{ value: 'repeat-3', label: '3' },
									{ value: 'infinite', label: 'infinite' },
								] }
								onChange={ onChangeAnimationRepeat }
								// __nextHasNoMarginBottom
							>
							</SelectControl>
						</PanelRow>
					</PanelBody>
				</Panel>		
			</InspectorControls>
			<div { ...blockProps }>
				{ animationName  && ! isSelected ? (
					
					<InnerBlocks />
				) : (
					<Placeholder
						label={ __( metadata.title ) }
						instructions={ __( metadata.description ) }
					>
						<InnerBlocks />
					</Placeholder>
				) }
			</div>
		</Fragment>
	);
}
