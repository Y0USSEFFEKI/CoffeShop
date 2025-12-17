import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import InputText from '../atoms/InputText';
import Icon from '../atoms/Icone';
import {IconName} from '../../interfaces/IIcon';

interface SearchBarProps {
	value: string;
	placeholder?: string;
	onChangeText: (text: string) => void;
	searchIconName?: IconName;
	filterIconName?: IconName;
	style?: object;
	onFilterPress?: () => void;
}

/**
 * SearchBar molecule: search icon + input + filter icon.
 */
const SearchBar: React.FC<SearchBarProps> = ({
	value,
	placeholder = 'Search Coffee ...',
	onChangeText,
	searchIconName = 'search',
	filterIconName = 'filter',
	style,
	onFilterPress,
}) => {
	return (
		<View style={[styles.container, style]}>
			<Icon name={searchIconName} size={18} color="#8FA29B" style={styles.searchIcon} />
			<InputText
				value={value}
				onChangeText={onChangeText}
				placeholder={placeholder}
				style={styles.input}
			/>
			<TouchableOpacity
				onPress={onFilterPress}
				activeOpacity={0.7}
				style={styles.filterButton}
			>
				<Icon name={filterIconName} size={18} color="#0F5B2F" style={styles.filterIcon} />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 52,
		borderRadius: 26,
		backgroundColor: '#F6F6F6',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 14,
	},
	searchIcon: {
		marginRight: 8,
	},
	input: {
		height: '100%',
		paddingHorizontal: 0,
	},
	filterButton: {
		width: 30,
		height: 30,
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFFFFF',
		marginLeft: 8,
	},
	filterIcon: {
		width: 18,
		height: 18,
	},
});

export default SearchBar;
