import {TextInputProps, StyleProp, TextStyle} from 'react-native';

export interface IInputText extends Omit<TextInputProps, 'style' | 'onChangeText' | 'value'> {
	value: string;
	onChangeText: (text: string) => void;
	style?: StyleProp<TextStyle>;
}

