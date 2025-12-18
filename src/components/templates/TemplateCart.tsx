import React from 'react';
import {
	View,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import Texte from '../atoms/Texte';
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import Footer from '../molecules/Footer';
import CardItemList from '../organisms/CardItemList';
import {CartItem, PaymentMethod} from '../../interfaces/ICart';

const paymentIcons: Record<string, any> = {
	visa: require('../../../assets/Vector.png'),
	paypal: require('../../../assets/Vector (1).png'),
	mastercard: require('../../../assets/Vector (2).png'),
};

interface TemplateCartProps {
	items: CartItem[];
	subtotalLabel: string;
	discountLabel: string;
	totalLabel: string;
	paymentMethods: PaymentMethod[];
	onSelectPayment?: (id: string) => void;
	onIncreaseItem?: (id: string) => void;
	onToggleFavorite?: (id: string) => void;
	onCheckout?: () => void;
	activeTab?: 'home' | 'favorites' | 'cart' | 'profile';
	onPressHome?: () => void;
	onPressFavorites?: () => void;
	onPressCart?: () => void;
	onPressProfile?: () => void;
}

/**
 * Template de la page panier.
 */
const TemplateCart: React.FC<TemplateCartProps> = ({
	items,
	subtotalLabel,
	discountLabel,
	totalLabel,
	paymentMethods,
	onSelectPayment,
	onIncreaseItem,
	onToggleFavorite,
	onCheckout,
	activeTab = 'cart',
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
					<Texte style={styles.title}>Cart</Texte>

					<CardItemList
						items={items}
						onIncrease={onIncreaseItem}
						onToggleFavorite={onToggleFavorite}
						style={styles.cardList}
					/>

					<View style={styles.summary}>
						<View style={styles.summaryRow}>
							<Texte style={styles.summaryLabel}>Subtotal</Texte>
							<Texte style={styles.summaryValue}>{subtotalLabel}</Texte>
						</View>
						<View style={styles.summaryRow}>
							<Texte style={styles.summaryLabel}>Discount</Texte>
							<Texte style={styles.summaryValue}>{discountLabel}</Texte>
						</View>
						<View style={styles.summaryRow}>
							<Texte style={styles.totalLabel}>Total</Texte>
							<Texte style={styles.totalValue}>{totalLabel}</Texte>
						</View>
					</View>

					<Texte style={styles.paymentTitle}>Payment</Texte>
					<View style={styles.paymentRow}>
						{paymentMethods.map(method => {
							const isSelected = Boolean(method.selected);
							return (
								<TouchableOpacity
									key={method.id}
									activeOpacity={0.8}
									onPress={() => onSelectPayment?.(method.id)}
									style={[
										styles.paymentItem,
										isSelected ? styles.paymentItemActive : null,
									]}
								>
									<Image
										source={paymentIcons[method.id] ?? method.image}
										style={styles.paymentImage}
										resizeMode="contain"
										useBaseStyle={false}
									/>
								</TouchableOpacity>
							);
						})}
					</View>

					<Button
						title="Buy"
						color="#0F5B2F"
						size="large"
						onClick={onCheckout ?? (() => {})}
						uppercase={false}
						style={styles.checkoutButton}
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
		paddingTop: 24,
	},
	title: {
		fontSize: 23,
		fontWeight: '700',
		color: '#1A1A1A',
		marginBottom: 15,
	},
	cardList: {
		marginBottom: 20,
	},
	summary: {
		marginBottom: 20,
	},
	summaryRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 6,
	},
	summaryLabel: {
		fontSize: 15,
		color: '#8C8C8C',
	},
	summaryValue: {
		fontSize: 15,
		color: '#1A1A1A',
	},
	totalLabel: {
		fontSize: 15,
		fontWeight: '700',
		color: '#1A1A1A',
		marginTop: 24,
	},
	totalValue: {
		fontSize: 15,
		fontWeight: '700',
		color: '#1A1A1A',
		marginTop: 25,
		marginBottom: 24,
	},
	paymentTitle: {
		fontSize: 16,
		fontWeight: '700',
		color: '#1A1A1A',
		marginBottom: 10,
	},
	paymentRow: {
		flexDirection: 'row',
		gap: 12,
		marginBottom: 18,
	},
	paymentItem: {
		width: 48,
		height: 32,
		borderRadius: 6,
		backgroundColor: '#FFFFFF',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#E7E7E7',
	},
	paymentItemActive: {
		borderColor: '#0F5B2F',
	},
	paymentImage: {
		width: 36,
		height: 20,
	},
	checkoutButton: {
		width: '100%',
		borderRadius: 18,
		height: 38,
		paddingVertical: 0,
	},
});

export default TemplateCart;
