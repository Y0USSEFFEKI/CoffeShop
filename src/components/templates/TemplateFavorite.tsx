import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Texte from '../atoms/Texte';
import ProductList from '../organisms/ProductList';
import {ProductItem} from '../../interfaces/IProduct';
import Footer from '../molecules/Footer';

interface TemplateFavoriteProps {
	products: ProductItem[];
	onToggleFavorite?: (id: string) => void;
	activeTab?: 'home' | 'favorites' | 'cart' | 'profile';
	onPressHome?: () => void;
	onPressFavorites?: () => void;
	onPressCart?: () => void;
	onPressProfile?: () => void;
}

/**
 * Template de la page des favoris.
 */
const TemplateFavorite: React.FC<TemplateFavoriteProps> = ({
	products,
	onToggleFavorite,
	activeTab = 'favorites',
	onPressHome,
	onPressFavorites,
	onPressCart,
	onPressProfile,
}) => {
	return (
		<View style={styles.root}>
			<SafeAreaView style={styles.safeArea}>
				<ScrollView
					style={styles.scroll}
					contentContainerStyle={styles.scrollContent}
					showsVerticalScrollIndicator={false}
				>
					<Texte style={styles.title}>Favorite</Texte>
					<ProductList
						products={products}
						onAction={onToggleFavorite}
						listVariant="grid"
						actionVariant="favorite"
						style={styles.productList}
					/>
				</ScrollView>
			</SafeAreaView>
			<Footer
				activeTab={activeTab}
				onPressHome={onPressHome}
				onPressFavorites={onPressFavorites}
				onPressCart={onPressCart}
				onPressProfile={onPressProfile}
			/>
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
	scroll: {
		flex: 1,
	},
	scrollContent: {
		paddingHorizontal: 20,
		paddingTop: 25,
		paddingBottom: 140,
	},
	title: {
		fontSize: 20,
		fontWeight: '700',
		color: '#1A1A1A',
		marginBottom: 16,
	},
	productList: {
		marginBottom: 24,
	},
});

export default TemplateFavorite;
