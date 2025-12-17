import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Texte from '../atoms/Texte';
import Icon from '../atoms/Icone';
import {CategoryProps} from '../../interfaces/ICategory';

/**
 * Category pill (icon + label)
 */
const Category: React.FC<CategoryProps> = ({
	label,
	iconName,
	selected = false,
	onPress,
	style,
}) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			activeOpacity={0.85}
			style={[
				styles.container,
				selected ? styles.containerSelected : styles.containerDefault,
				style,
			]}
		>
			<View style={styles.content}>
				{iconName ? (
					<Icon
						name={iconName}
						size={14}
						color={selected ? '#FFFFFF' : '#0F5B2F'}
						style={styles.icon}
					/>
				) : null}
				<Texte style={[styles.label, selected ? styles.labelSelected : styles.labelDefault]}>
					{label}
				</Texte>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 34,
		borderRadius: 18,
		paddingHorizontal: 14,
		paddingVertical: 6,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 3},
		shadowOpacity: 0.08,
		shadowRadius: 5,
		elevation: 2,
	},
	containerSelected: {
		backgroundColor: '#0F5B2F',
		borderWidth: 1,
		borderColor: '#0F5B2F',
	},
	containerDefault: {
		backgroundColor: '#FFFFFF',
		borderWidth: 1,
		borderColor: '#E7E7E7',
	},
	content: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 6,
	},
	icon: {},
	label: {
		fontSize: 12,
		fontWeight: '600',
	},
	labelSelected: {
		color: '#FFFFFF',
	},
	labelDefault: {
		color: '#0F5B2F',
	},
});

export default Category;
