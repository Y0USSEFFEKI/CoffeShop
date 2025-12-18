import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import CardItem from '../molecules/CardItem';
import {CardItemListProps} from '../../interfaces/ICart';

/**
 * Organism: list of cart items.
 */
const CardItemList: React.FC<CardItemListProps> = ({
	items,
	onIncrease,
	onToggleFavorite,
	style,
}) => {
	return (
		<View style={style}>
			<FlatList
				data={items}
				showsVerticalScrollIndicator={false}
				ItemSeparatorComponent={() => <View style={styles.separator} />}
				keyExtractor={item => item.id}
				renderItem={({item}) => (
					<CardItem
						title={item.title}
						subtitle={item.subtitle}
						price={item.price}
						image={item.image}
						sizeLabel={item.sizeLabel}
						sugarLabel={item.sugarLabel}
						quantity={item.quantity}
						isFavorite={item.isFavorite}
						onIncrease={onIncrease ? () => onIncrease(item.id) : undefined}
						onToggleFavorite={
							onToggleFavorite ? () => onToggleFavorite(item.id) : undefined
						}
					/>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	separator: {
		height: 12,
	},
});

export default CardItemList;
