import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Image from '../atoms/Image';
import Texte from '../atoms/Texte';
import Icon from '../atoms/Icone';
import {ProductProps} from '../../interfaces/IProduct';

/**
 * Product card molecule: image + texts + add button.
 */
const Product: React.FC<ProductProps> = ({
	title,
	subtitle,
	price,
	image,
	isFavorite,
	onAction,
	actionVariant = 'add',
	style,
}) => {
	const showAction = actionVariant !== 'none';
	const actionIconName = actionVariant === 'favorite' ? 'heart' : 'plus';
	const actionIconColor =
		actionVariant === 'favorite'
			? isFavorite
				? '#E66767'
				: '#C9C9C9'
			: '#0F5B2F';
	const actionIconSize = actionVariant === 'add' ? 28 : 16;
	const actionButtonStyle =
		actionVariant === 'favorite' ? styles.favoriteButton : styles.addButton;

	return (
		<View style={[styles.container, style]}>
			<Image source={image} style={styles.image} resizeMode="cover" useBaseStyle={false} />

			<View style={styles.textBlock}>
				<Texte style={styles.title}>{title}</Texte>
				{subtitle ? <Texte style={styles.subtitle}>{subtitle}</Texte> : null}
			</View>

			<View style={styles.footer}>
				<Texte style={styles.price}>{price}</Texte>
				{showAction ? (
					<TouchableOpacity
						style={[styles.actionButton, actionButtonStyle]}
						activeOpacity={0.8}
						onPress={onAction}
						disabled={!onAction}
					>
						<Icon name={actionIconName} size={actionIconSize} color={actionIconColor} />
					</TouchableOpacity>
				) : null}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		borderRadius: 18,
		backgroundColor: '#FFFFFF',
		padding: 8,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 3},
		shadowOpacity: 0.1,
		shadowRadius: 6,
		elevation: 3,
	},
	image: {
		width: '100%',
		height: 110,
		borderRadius: 14,
	},
	textBlock: {
		marginTop: 8,
		gap: 2,
	},
	title: {
		fontSize: 14,
		fontWeight: '700',
		color: '#0F0F0F',
	},
	subtitle: {
		fontSize: 12,
		fontWeight: '400',
		color: '#8C8C8C',
	},
	footer: {
		marginTop: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	price: {
		fontSize: 14,
		fontWeight: '700',
		color: '#1A1A1A',
	},
	actionButton: {
		width: 32,
		height: 32,
		borderRadius: 16,
		alignItems: 'center',
		justifyContent: 'center',
	},
	addButton: {
		backgroundColor: 'transparent',
	},
	favoriteButton: {
		backgroundColor: 'transparent',
	},
});

export default Product;
