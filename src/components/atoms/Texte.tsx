import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TexteProps} from '../../interfaces/IText';

/**
 * Texte atom that forwards all React Native Text props.
 * Override base style with the `style` prop if needed.
 */
const Texte: React.FC<TexteProps> = ({children, style, ...rest}) => {
	return (
		<Text style={[styles.base, style]} {...rest}>
			{children}
		</Text>
	);
};

const styles = StyleSheet.create({
	base: {},
});

export default Texte;
