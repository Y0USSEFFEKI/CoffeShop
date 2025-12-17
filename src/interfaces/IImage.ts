import {
	Image as RNImage,
	ImageProps as RNImageProps,
	ImageSourcePropType,
	StyleProp,
	ImageStyle,
	StyleSheet,
} from 'react-native';


export interface ImageProps extends Omit<RNImageProps, 'source' | 'style'> {
	source: ImageSourcePropType;
	style?: StyleProp<ImageStyle>;
	/**
	 * Apply the default base style defined in the atom. Set to false when you
	 * need a neutral image (e.g., small icons).
	 */
	useBaseStyle?: boolean;
}
