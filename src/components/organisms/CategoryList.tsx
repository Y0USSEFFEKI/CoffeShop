import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import Category from '../molecules/Category';
import {CategoryListProps} from '../../interfaces/ICategory';

/**
 * Organisme qui affiche une liste horizontale de catégories.
 */
const CategoryList: React.FC<CategoryListProps> = ({
	categories,
	onSelect,
	style,
	itemStyle,
	contentContainerStyle,
}) => {
	return (
		<View style={style}>
			<FlatList
				data={categories}
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={[styles.listContent, contentContainerStyle]}
				ItemSeparatorComponent={() => <View style={styles.separator} />}
				keyExtractor={item => item.id}
				renderItem={({item}) => (
					<Category
						label={item.label}
						iconName={item.iconName}
						selected={item.selected}
						onPress={() => onSelect(item.id)}
						style={itemStyle}
					/>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	listContent: {
		paddingHorizontal: 4,
		paddingVertical: 4,
	},
	separator: {
		width: 12,
	},
});

export default CategoryList;
