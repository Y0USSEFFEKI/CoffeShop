import React, {useState} from 'react';
import TemplateFavorite from '../templates/TemplateFavorite';
import {ProductItem} from '../../interfaces/IProduct';

const coffeeImages = [
	{uri: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80'},
	{uri: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80'},
];

const initialFavorites: ProductItem[] = [
	{
		id: '1',
		title: 'Coffee',
		subtitle: 'With Sugar',
		price: 'Rp 50.000',
		image: coffeeImages[0],
		isFavorite: true,
	},
	{
		id: '2',
		title: 'Cappuccino',
		subtitle: 'With Sugar',
		price: 'Rp 50.000',
		image: coffeeImages[1],
		isFavorite: true,
	},
	{
		id: '3',
		title: 'Coffee',
		subtitle: 'With Sugar',
		price: 'Rp 50.000',
		image: coffeeImages[0],
		isFavorite: true,
	},
	{
		id: '4',
		title: 'Cappuccino',
		subtitle: 'With Sugar',
		price: 'Rp 50.000',
		image: coffeeImages[1],
		isFavorite: true,
	},
	{
		id: '5',
		title: 'Coffee',
		subtitle: 'With Sugar',
		price: 'Rp 50.000',
		image: coffeeImages[0],
		isFavorite: true,
	},
	{
		id: '6',
		title: 'Cappuccino',
		subtitle: 'With Sugar',
		price: 'Rp 50.000',
		image: coffeeImages[1],
		isFavorite: true,
	},
];

const Favorite: React.FC = () => {
	const [products, setProducts] = useState<ProductItem[]>(initialFavorites);

	const handleToggleFavorite = (id: string) => {
		setProducts(prev =>
			prev.map(item =>
				item.id === id ? {...item, isFavorite: !item.isFavorite} : item,
			),
		);
	};

	return (
		<TemplateFavorite
			products={products}
			onToggleFavorite={handleToggleFavorite}
			activeTab="favorites"
			onPressHome={() => console.log('Home')}
			onPressFavorites={() => console.log('Favorites')}
			onPressCart={() => console.log('Cart')}
			onPressProfile={() => console.log('Profile')}
		/>
	);
};

export default Favorite;
