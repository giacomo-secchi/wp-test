import { Icon } from '@wordpress/components';

export const MyIcon = () => (
	<Icon
		icon={ () => (
			<svg>
				<path d="M5 4v3h5.5v12h3V7H19V4z" />
			</svg>
		) }
	/>
);