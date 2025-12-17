import {ViewProps, StyleProp, ViewStyle} from 'react-native';

export interface PointsProps extends Omit<ViewProps, 'style'> {
	style?: StyleProp<ViewStyle>;
	/**
	 * Page index indicator (e.g., 1, 2, 3).
	 */
	pageIndex?: 1 | 2 | 3;
}

