import React from 'react';
import {
	View,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	ImageSourcePropType,
} from 'react-native';
import Button from '../atoms/Button';
import Image from '../atoms/Image';
import Texte from '../atoms/Texte';
import Category from '../molecules/Category';
import LevelSelector from '../molecules/LevelSelector';
import {CategoryItem} from '../../interfaces/ICategory';

export interface TemplateProductProps {
	productImage: ImageSourcePropType;
	title: string;
	subtitle?: string;
	ratingLabel: string;
	description: string;
	priceLabel: string;
	sizeOptions: CategoryItem[];
	sugarOptions: CategoryItem[];
	onSelectSize: (id: string) => void;
	onSelectSugar: (id: string) => void;
	onPressBack?: () => void;
	onToggleFavorite?: () => void;
	isFavorite?: boolean;
	onAddToCart: () => void;
}

/**
 * Template detail produit en architecture atomique.
 */
const TemplateProduct: React.FC<TemplateProductProps> = ({
	productImage,
	title,
	subtitle,
	ratingLabel,
	description,
	priceLabel,
	sizeOptions,
	sugarOptions,
	onSelectSize,
	onSelectSugar,
	onPressBack,
	onToggleFavorite,
	isFavorite = false,
	onAddToCart,
}) => {
	return (
		<View style={styles.root}>
			<SafeAreaView style={styles.safeArea}>
				<ScrollView
					showsVerticalScrollIndicator={false}
					contentContainerStyle={styles.scrollContent}
				>
					<View style={styles.hero}>
						<Image
							source={productImage}
							style={styles.heroImage}
							resizeMode="cover"
							useBaseStyle={false}
						/>

						<View style={styles.heroOverlay}>
							<View style={styles.topButtons}>
								<Button
									variant="icon"
									iconName="back"
									color="#FFFFFF"
									iconColor="#0F5B2F"
									size="small"
									onClick={onPressBack ?? (() => {})}
									style={styles.iconButton}
								/>
								<Button
									variant="icon"
									iconName="heart"
									color="#FFFFFF"
									iconColor={isFavorite ? '#FF4848' : '#0F5B2F'}
									size="small"
									onClick={onToggleFavorite ?? (() => {})}
									style={styles.iconButton}
								/>
							</View>

							<View style={styles.heroInfo}>
								<View>
									<Texte style={styles.title}>{title}</Texte>
									{subtitle ? <Texte style={styles.subtitle}>{subtitle}</Texte> : null}
								</View>
								<Category
									label={ratingLabel}
									iconName="star"
									selected
									style={styles.ratingBadge}
								/>
							</View>
						</View>
					</View>

					<View style={styles.card}>
						<Texte style={styles.sectionTitle}>Cup Size</Texte>
						<LevelSelector
							options={sizeOptions}
							onSelect={onSelectSize}
							style={styles.selector}
						/>

						<Texte style={styles.sectionTitle}>Level Sugar</Texte>
						<LevelSelector
							options={sugarOptions}
							onSelect={onSelectSugar}
							style={styles.selector}
						/>

						<Texte style={styles.sectionTitle}>About</Texte>
						<Texte style={styles.aboutText}>
							{description}
							<Texte style={styles.readMore}> Read More</Texte>
						</Texte>
					</View>
				</ScrollView>
			</SafeAreaView>

			<View style={styles.bottomBar}>
				<Button
					variant="split"
					title="Add to cart"
					rightTitle={priceLabel}
					color="#0F5B2F"
					size="large"
					uppercase={false}
					onClick={onAddToCart}
					style={styles.addButton}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	safeArea: {
		flex: 1,
	},
	scrollContent: {
		paddingBottom: 140,
	},
	hero: {
		height: 320,
	},
	heroImage: {
		width: '100%',
		height: '110%',
	},
	heroOverlay: {
		...StyleSheet.absoluteFillObject,
		paddingHorizontal: 20,
		paddingTop: 16,
		paddingBottom: 24,
		justifyContent: 'space-between',
	},
	topButtons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	iconButton: {
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.1,
		shadowRadius: 6,
		elevation: 3,
	},
	heroInfo: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		marginBottom: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: '600',
		color: '#FFFFFF',
		fontFamily: 'Montserrat',
	},
	subtitle: {
		marginTop: 4,
		fontSize: 13,
		color: '#E7E7E7',
	},
	ratingBadge: {
		backgroundColor: '#C79B6D',
		borderColor: '#C79B6D',
		height: 28,
		paddingHorizontal: 10,
		paddingVertical: 4,
		borderRadius: 14,
		shadowOpacity: 0,
		elevation: 0,
	},
	card: {
		backgroundColor: '#FFFFFF',
		borderTopLeftRadius:30,
		borderTopRightRadius: 30,
		marginTop: -24,
		paddingTop: 24,
		paddingHorizontal: 20,
		paddingBottom: 24,

	},
	sectionTitle: {
		fontSize: 16,
		fontWeight: '700',
		color: '#1A1A1A',
		marginBottom: 12,
	},
	selector: {
		marginBottom: 18,
	},
	aboutText: {
		fontSize: 12,
		lineHeight: 18,
		color: '#6F6F6F',
	},
	readMore: {
		fontSize: 12,
		fontWeight: '700',
		color: '#0F5B2F',
	},
	bottomBar: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		paddingHorizontal: 20,
		paddingBottom: 20,
		backgroundColor: '#FFFFFF',
	},
	addButton: {
		width: '100%',
	},
});

export default TemplateProduct;
