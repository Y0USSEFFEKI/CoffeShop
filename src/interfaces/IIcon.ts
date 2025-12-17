import {StyleProp, ViewStyle} from 'react-native';

/**
 * Base icon interface for SVG icons.
 */
export type IconName =
	| 'back'
	| 'bell'
	| 'cart'
	| 'coffee'
	| 'filter'
	| 'heart'
	| 'home'
	| 'map-marker'
	| 'plus'
	| 'search'
	| 'star'
	| 'user';

export interface IIcon {
	/** Icon key (ex: 'map-marker', 'bell', 'home'). */
	name: IconName;
	/** Size in pixels */
	size?: number;
	/** Icon color */
	color?: string;
	/** Additional style */
	style?: StyleProp<ViewStyle>;
}
