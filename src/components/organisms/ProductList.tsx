import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import Product from '../molecules/Product';
import {ProductListProps} from '../../interfaces/IProduct';

/**
 * Organism that renders a horizontal or grid list of products.
 */
const ProductList: React.FC<ProductListProps> = ({
	products,
	onAction,
	onPressProduct,
	style,
	listVariant = 'horizontal',
	actionVariant = 'add',
}) => {
	const isGrid = listVariant === 'grid';

	return (
		<View style={style}>
			<FlatList
				data={products}
				horizontal={!isGrid}
				numColumns={isGrid ? 2 : 1}
				scrollEnabled={!isGrid}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={[
					styles.listContent,
					isGrid ? styles.listContentGrid : styles.listContentHorizontal,
				]}
				columnWrapperStyle={isGrid ? styles.columnWrapper : undefined}
				ItemSeparatorComponent={isGrid ? undefined : () => <View style={styles.separator} />}
				keyExtractor={item => item.id}
				renderItem={({item}) => (
					<Product
						title={item.title}
						subtitle={item.subtitle}
						price={item.price}
						image={item.image}
						isFavorite={item.isFavorite}
						actionVariant={actionVariant}
						onAction={onAction ? () => onAction(item.id) : undefined}
						onPress={onPressProduct ? () => onPressProduct(item.id) : undefined}
						style={isGrid ? styles.cardGrid : styles.cardHorizontal}
					/>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	listContent: {
		paddingHorizontal: 4,
	},
	listContentHorizontal: {
		paddingVertical: 8,
	},
	listContentGrid: {
		paddingTop: 6,
		paddingBottom: 12,
	},
	separator: {
		width: 12,
	},
	columnWrapper: {
		justifyContent: 'space-between',
		paddingHorizontal: 4,
	},
	cardHorizontal: {
		width: 160,
	},
	cardGrid: {
		width: '48%',
		marginBottom: 16,
	},
});

export default ProductList;
