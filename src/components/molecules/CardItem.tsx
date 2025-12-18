import React from 'react';
import {View, StyleSheet} from 'react-native';
import Image from '../atoms/Image';
import Texte from '../atoms/Texte';
import Button from '../atoms/Button';
import {CardItemProps} from '../../interfaces/ICart';

const formatRupiah = (value: number) => `Rp ${value.toLocaleString('id-ID')}`;

/**
 * Molecule: card item for cart.
 */
const CardItem: React.FC<CardItemProps> = ({
	title,
	subtitle,
	price,
	image,
	sizeLabel,
	sugarLabel,
	quantity,
	isFavorite = false,
	onIncrease,
	onToggleFavorite,
	style,
}) => {
	return (
		<View style={[styles.container, style]}>
			<View style={styles.leftColumn}>
				<Image source={image} style={styles.image} resizeMode="cover" useBaseStyle={false} />
				<View style={styles.metaBlock}>
					<Texte style={styles.metaText}>
						Cup Size: <Texte style={styles.metaValue}>{sizeLabel}</Texte>
					</Texte>
					<Texte style={styles.metaText}>
						Level Sugar: <Texte style={styles.metaValue}>{sugarLabel}</Texte>
					</Texte>
				</View>
			</View>

			<View style={styles.content}>
				<View style={styles.headerRow}>
					<View>
						<Texte style={styles.title}>{title}</Texte>
						{subtitle ? <Texte style={styles.subtitle}>{subtitle}</Texte> : null}
						<Texte style={styles.price}>{formatRupiah(price)}</Texte>
					</View>
					<Button
						variant="icon"
						iconName="heart"
						color="transparent"
						iconColor={isFavorite ? '#FF4848' : '#C9C9C9'}
						size="small"
						onClick={onToggleFavorite ?? (() => {})}
						style={styles.favoriteButton}
					/>
				</View>

				<View style={styles.quantityRow}>
					<Texte style={styles.quantity}>{quantity}</Texte>
					<Button
						variant="icon"
						iconName="plus"
						color="#FFFFFFFF"
						iconColor="#0F5B2F"
						iconSize={30}
						size="small"
						onClick={onIncrease ?? (() => {})}
						style={styles.addButton}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		backgroundColor: '#FFFFFF',
		borderRadius: 16,
		padding: 12,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.08,
		shadowRadius: 6,
		elevation: 2,
		height: 176,
		marginBottom: 2,
		marginTop: 2,
		marginLeft: 1,
		marginRight: 1,
	},
	image: {
		width: 144,
		height: 105,
		borderRadius: 12,
	},
	leftColumn: {
		width: 144,
	},
	metaBlock: {
		marginTop: 8,
	},
	content: {
		flex: 1,
		marginLeft: 12,
		justifyContent: 'space-between',
	},
	headerRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	title: {
		fontSize: 20,
		fontWeight: '700',
		color: '#1A1A1A',
	},
	subtitle: {
		fontSize: 13,
		color: '#8C8C8C',
		marginTop: 2,
	},
	price: {
		fontSize: 20,
		fontWeight: '700',
		color: '#1A1A1A',
		marginTop: 4,
	},
	favoriteButton: {
		shadowOpacity: 0,
		elevation: 0,
	},
	metaText: {
		fontSize: 13,
		color: '#8C8C8C',
	},
	metaValue: {
		fontWeight: '700',
		color: '#1A1A1A',
	},
	quantityRow: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
		alignSelf: 'flex-end',
	},
	quantity: {
		fontSize: 28,
		fontWeight: '700',
		color: '#1A1A1A',
		top: 45,
	},
	addButton: {
		width: 28,
		height: 28,
		borderRadius: 14,
		top: 45,
	},
});

export default CardItem;
