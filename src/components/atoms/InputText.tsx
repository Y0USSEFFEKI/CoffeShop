import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {IInputText} from '../../interfaces/IInputText';

/**
 * InputText atom wrapping React Native TextInput with base styling.
 */
const InputText: React.FC<IInputText> = ({value, onChangeText, style, ...rest}) => {
	return (
		<TextInput
			style={[styles.input, style]}
			value={value}
			onChangeText={onChangeText}
			placeholderTextColor="#8FA29B"
			{...rest}
		/>
	);
};

const styles = StyleSheet.create({
	input: {
		flex: 1,
		height: 51,
		paddingHorizontal: 12,
		color: '#1A1A1A',
		fontSize: 14,
	},
});

export default InputText;
