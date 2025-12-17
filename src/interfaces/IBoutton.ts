import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {IconName} from './IIcon';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'text' | 'icon' | 'split';

export interface IBoutton {
	title?: string;
	rightTitle?: string;
	color: string;
	size: ButtonSize;
	onClick: () => void;
	variant?: ButtonVariant;
	iconName?: IconName;
	iconColor?: string;
	iconSize?: number;
	uppercase?: boolean;
	style?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
}
