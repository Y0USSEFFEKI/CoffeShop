import React from 'react';
import {View, StyleSheet} from 'react-native';
import {PointsProps} from '../../interfaces/IPoints';

/**
 * Points atom for step indicators. Base style can be overridden via `style`.
 */
const Points: React.FC<PointsProps> = ({style, ...rest}) => {
	return <View style={[styles.base, style]} {...rest} />;
};

const styles = StyleSheet.create({
	base: {
		width: 44,
		height: 6,
		top: 644,
		left: 184,
		transform: [{rotate: '0deg'}],
		opacity: 1,
		position: 'absolute',
		backgroundColor: '#2D5016',
		borderRadius: 999,
	},
});

export default Points;
