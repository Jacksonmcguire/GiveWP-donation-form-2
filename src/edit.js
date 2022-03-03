/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, CheckboxControl } from '@wordpress/components'
import { DonationForm } from './DonationForm';
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
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function EditComponent(props) {
		let settings = {
			anonymous: false,
			title: '',
			logo: ''
		}
		const form = (props) => {
		return <div className="givewp-form"><DonationForm props={props}/></div>
		}
	
		function updateAnonymous(e) {
			props.setAttributes({ anonymous: e.target.checked })
			settings.anonymous = e.target.checked
		}
	
		function updateTitle(e) {
			props.setAttributes({ title: e.target.value })
			settings.title = e.target.value
		}
	
		function updateLogo(e) {
			props.setAttributes({ logo: e.target.value })
			console.log("logo update")
			settings.logo = e.target.value
		}
	
		return (
			<div { ...useBlockProps() }>
				<InspectorControls>
					<Panel>
						<PanelBody title="Donation Form">
							<CheckboxControl
							label="Anonymous"
							help="An option to donate anonymously"
							onChange={(e) => updateAnonymous(e)}/>
						</PanelBody>
						<PanelBody>
							<label htmlFor="Logo">Paste the link to your Logo here:</label>
							<input onChange={e => updateLogo(e)} id="Logo" type="file"
							placeholder="https://cdn.pixabay.com/photo/2017/09/18/16/54/links-2762389_960_720.png"/>
							<label htmlFor="title">Form Title:</label>
							<input onChange={e => updateTitle(e)} id="title" 
							placeholder="Donate Today!"/>
						</PanelBody>
					</Panel>
				</InspectorControls>
			{form(settings)}
				 
			</div>
		)
	}
	

