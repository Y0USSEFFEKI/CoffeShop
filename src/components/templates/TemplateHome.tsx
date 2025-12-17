import React from 'react';
import {
	View,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	ImageSourcePropType,
	TouchableOpacity,
} from 'react-native';
import Texte from '../atoms/Texte';
import Image from '../atoms/Image';
import Location from '../molecules/Location';
import SearchBar from '../molecules/SearchBar';
import CategoryList from '../organisms/CategoryList';
import ProductList from '../organisms/ProductList';
import Footer from '../molecules/Footer';
import Icon from '../atoms/Icone';
import {CategoryItem} from '../../interfaces/ICategory';
import {ProductItem} from '../../interfaces/IProduct';

interface TemplateHomeProps {
	userName: string;
	profileImage: ImageSourcePropType;
	locationLabel: string;
	searchValue: string;
	onSearchChange: (text: string) => void;
	onFilterPress?: () => void;
	categories: CategoryItem[];
	onSelectCategory: (id: string) => void;
	featuredProducts: ProductItem[];
	onAddProduct: (id: string) => void;
	specialOffers: ProductItem[];
	onToggleFavorite?: (id: string) => void;
	activeTab?: 'home' | 'favorites' | 'cart' | 'profile';
	onPressNotification?: () => void;
	onPressHome?: () => void;
	onPressFavorites?: () => void;
	onPressCart?: () => void;
	onPressProfile?: () => void;
}

/**
 * Template de la page d'accueil principale (2ème page) composée
 * de tous les atomes / molécules / organismes créés.
 */
const TemplateHome: React.FC<TemplateHomeProps> = props => {
	const {
		userName,
		profileImage,
		locationLabel,
		searchValue,
		onSearchChange,
		onFilterPress,
		categories,
		onSelectCategory,
		featuredProducts,
		onAddProduct,
		specialOffers,
		onToggleFavorite,
		activeTab = 'home',
		onPressNotification,
		onPressHome,
		onPressFavorites,
		onPressCart,
		onPressProfile,
	} = props;

	return (
		<View style={styles.root}>
			<SafeAreaView style={styles.safeArea}>
				<ScrollView
					style={styles.scroll}
					contentContainerStyle={styles.scrollContent}
					showsVerticalScrollIndicator={false}
				>
					{/* Header: profil + localisation + notification */}
					<View style={styles.headerRow}>
						<Image
							source={profileImage}
							style={styles.profileImage}
							useBaseStyle={false}
							resizeMode="cover"
						/>

						<View style={styles.locationWrapper}>
							<Location label={locationLabel} />
						</View>

						<TouchableOpacity
							style={styles.notificationButton}
							activeOpacity={0.7}
							onPress={onPressNotification}
							disabled={!onPressNotification}
						>
							<Icon name="bell" size={20} color="#0F5B2F" />
						</TouchableOpacity>
					</View>

					{/* Texte de bienvenue */}
					<View style={styles.greetingContainer}>
						<Texte style={styles.greetingTitle}>Good morning, {userName}</Texte>
					</View>

					{/* Barre de recherche */}
					<View style={styles.searchContainer}>
						<SearchBar
							value={searchValue}
							onChangeText={onSearchChange}
							onFilterPress={onFilterPress}
							style={styles.searchBar}
						/>
					</View>

					{/* Section Categories */}
					<View style={styles.sectionHeader}>
						<Texte style={styles.sectionTitle}>Categories</Texte>
					</View>
					<CategoryList
						categories={categories}
						onSelect={onSelectCategory}
						style={styles.categoryList}
					/>

					{/* Liste principale */}
					<ProductList
						products={featuredProducts}
						onAction={onAddProduct}
						listVariant="horizontal"
						actionVariant="add"
						style={styles.featuredList}
					/>

					{/* Section Special Offer */}
					<View style={styles.sectionHeader}>
						<Texte style={styles.sectionTitle}>Special Offer</Texte>
					</View>
					<ProductList
						products={specialOffers}
						onAction={onToggleFavorite}
						listVariant="grid"
						actionVariant="favorite"
						style={styles.offerList}
					/>
				</ScrollView>
			</SafeAreaView>

			{/* Footer de navigation */}
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
		paddingTop: 18,
		paddingBottom: 140, // leave space for the footer
	},
	headerRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 26,
		top: 10,
	},
	profileImage: {
		width: 38,
		height: 38,
		borderRadius: 19,
	},
	locationWrapper: {
		flex: 1,
		alignItems: 'center',
	},
	notificationButton: {
		padding: 6,
		borderRadius: 16,
	},
	greetingContainer: {
		marginBottom: 18,
	},
	greetingTitle: {
		fontSize: 20,
		fontWeight: '700',
		color: '#1A1A1A',
	},
	searchContainer: {
		marginBottom: 20,
	},
	searchBar: {
		width: '100%',
	},
	sectionHeader: {
		marginBottom: 10,
	},
	sectionTitle: {
		fontSize: 16,
		fontWeight: '700',
		color: '#1A1A1A',
	},
	categoryList: {
		marginBottom: 16,
	},
	featuredList: {
		marginBottom: 18,
	},
	offerList: {
		marginBottom: 24,
	},
});

export default TemplateHome;
