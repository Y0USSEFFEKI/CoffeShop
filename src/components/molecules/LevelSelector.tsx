import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Texte from '../atoms/Texte';
import {CategoryItem} from '../../interfaces/ICategory';

interface LevelSelectorProps {
	options: CategoryItem[];
	onSelect: (id: string) => void;
	style?: object;
	itemStyle?: object;
}

/**
 * Molecule: three text pills with a green selected state.
 */
const LevelSelector: React.FC<LevelSelectorProps> = ({
	options,
	onSelect,
	style,
	itemStyle,
}) => {
	return (
		<View style={[styles.container, style]}>
			{options.map(option => {
				const isSelected = Boolean(option.selected);
				return (
					<TouchableOpacity
						key={option.id}
						onPress={() => onSelect(option.id)}
						activeOpacity={0.85}
						style={[
							styles.item,
							isSelected ? styles.itemSelected : styles.itemDefault,
							itemStyle,
						]}
					>
						<Texte style={[styles.label, isSelected ? styles.labelSelected : styles.labelDefault]}>
							{option.label}
						</Texte>
					</TouchableOpacity>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 348,
		height: 32,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	item: {
		width: 103,
		height: 32,
		borderRadius: 30,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 0,
	},
	itemSelected: {
		backgroundColor: '#0F5B2F',
		borderColor: '#0F5B2F',
	},
	itemDefault: {
		backgroundColor: '#FFFFFF',
		borderColor: '#E7E7E7',
	},
	label: {
		fontSize: 12,
		fontWeight: '600',
	},
	labelSelected: {
		color: '#FFFFFF',
	},
	labelDefault: {
		color: '#1A1A1A',
	},
});

export default LevelSelector;
