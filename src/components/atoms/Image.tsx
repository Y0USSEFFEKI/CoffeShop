import React from 'react';
import {
	Image as RNImage,
	ImageProps as RNImageProps,
	ImageSourcePropType,
	StyleProp,
	ImageStyle,
	StyleSheet,
} from 'react-native';
import { ImageProps } from '../../interfaces/IImage';


/**
 * Image atom that accepts any React Native Image props.
 * You can override the base style via the `style` prop.
 */
const Image: React.FC<ImageProps> = ({
	source,
	style,
	useBaseStyle = true,
	...rest
}) => {
	return (
		<RNImage
			source={source}
			style={[useBaseStyle ? styles.base : null, style]}
			{...rest}
		/>
	);
};

const styles = StyleSheet.create({
	base: {
		width: 453,
		height: 302,
		top: 141,
		left: -21,
		transform: [{rotate: '0deg'}],
		opacity: 1,
		position: 'absolute',
	},
});

export default Image;
