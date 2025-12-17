import React from 'react';
import {TextProps, StyleProp, TextStyle} from 'react-native';

export interface TexteProps extends Omit<TextProps, 'style' | 'children'> {
	children: React.ReactNode;
	style?: StyleProp<TextStyle>;
}

