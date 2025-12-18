import React, {useMemo, useState} from 'react';
import TemplateCart from '../templates/TemplateCart';
import {CartItem, PaymentMethod} from '../../interfaces/ICart';

const coffeeImages = [
	{uri: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80'},
	{uri: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80'},
];

const paymentVisa = require('../../../assets/Vector.png');
const paymentPaypal = require('../../../assets/Vector (1).png');
const paymentMastercard = require('../../../assets/Vector (2).png');

const initialItems: CartItem[] = [
	{
		id: '1',
		title: 'Coffee',
		subtitle: 'With Sugar',
		price: 50000,
		image: coffeeImages[0],
		sizeLabel: 'Small',
		sugarLabel: 'No Sugar',
		quantity: 2,
		isFavorite: false,
	},
	{
		id: '2',
		title: 'Cappuccino',
		subtitle: 'With Sugar',
		price: 50000,
		image: coffeeImages[1],
		sizeLabel: 'Small',
		sugarLabel: 'No Sugar',
		quantity: 1,
		isFavorite: true,
	},
];

const initialPayments: PaymentMethod[] = [
	{id: 'visa', image: paymentVisa, selected: true},
	{id: 'paypal', image: paymentPaypal, selected: false},
	{id: 'mastercard', image: paymentMastercard, selected: false},
];

const formatRupiah = (value: number) => `Rp ${value.toLocaleString('id-ID')}`;

const Cart: React.FC = () => {
	const [items, setItems] = useState<CartItem[]>(initialItems);
	const [payments, setPayments] = useState<PaymentMethod[]>(initialPayments);

	const subtotal = useMemo(
		() => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
		[items],
	);
	const discount = 25000;
	const total = Math.max(subtotal - discount, 0);

	const handleIncrease = (id: string) => {
		setItems(prev =>
			prev.map(item =>
				item.id === id ? {...item, quantity: item.quantity + 1} : item,
			),
		);
	};

	const handleToggleFavorite = (id: string) => {
		setItems(prev =>
			prev.map(item =>
				item.id === id ? {...item, isFavorite: !item.isFavorite} : item,
			),
		);
	};

	const handleSelectPayment = (id: string) => {
		setPayments(prev =>
			prev.map(method => ({
				...method,
				selected: method.id === id,
			})),
		);
	};

	return (
		<TemplateCart
			items={items}
			subtotalLabel={formatRupiah(subtotal)}
			discountLabel={formatRupiah(discount)}
			totalLabel={formatRupiah(total)}
			paymentMethods={payments}
			onSelectPayment={handleSelectPayment}
			onIncreaseItem={handleIncrease}
			onToggleFavorite={handleToggleFavorite}
			onCheckout={() => console.log('Checkout')}
			activeTab="cart"
			onPressHome={() => console.log('Home')}
			onPressFavorites={() => console.log('Favorites')}
			onPressCart={() => console.log('Cart')}
			onPressProfile={() => console.log('Profile')}
		/>
	);
};

export default Cart;
