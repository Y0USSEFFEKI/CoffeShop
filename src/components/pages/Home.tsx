import React, {useEffect, useState} from 'react';
import TemplateHome from '../templates/TemplateHome';
import {CategoryItem} from '../../interfaces/ICategory';
import {ProductItem} from '../../interfaces/IProduct';
import axios from 'axios';

const placeholderImage = require('../../../assets/logo.png');
const profileImage = {uri: 'https://i.pravatar.cc/100?img=12'};
const coffeeImages = [
	{uri: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80'},
	{uri: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80'},
	{uri: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=400&q=80'},
];

const fallbackCategories: CategoryItem[] = [
	{id: '1', label: 'Cappuccino', iconName: 'coffee', selected: true},
	{id: '2', label: 'Coffee', iconName: 'coffee', selected: false},
	{id: '3', label: 'Espresso', iconName: 'coffee', selected: false},
	{id: '4', label: 'Latte', iconName: 'coffee', selected: false},
];

const featuredProducts: ProductItem[] = [
	{
		id: '1',
		title: 'Cappuccino',
		subtitle: 'With Sugar',
		price: 'Rp 50.000',
		image: coffeeImages[0],
	},
	{
		id: '2',
		title: 'Coffee',
		subtitle: 'With Sugar',
		price: 'Rp 50.000',
		image: coffeeImages[1],
	},
	{
		id: '3',
		title: 'Cappuccino',
		subtitle: 'With Sugar',
		price: 'Rp 50.000',
		image: coffeeImages[2],
	},
];

const fallbackOffers: ProductItem[] = [
	{
		id: '4',
		title: 'Coffee',
		subtitle: 'With Sugar',
		price: 'Rp 50.000',
		image: coffeeImages[1],
		isFavorite: false,
	},
	{
		id: '5',
		title: 'Cappuccino',
		subtitle: 'With Sugar',
		price: 'Rp 50.000',
		image: coffeeImages[0],
		isFavorite: false,
	},
];

const Home: React.FC = () => {
	const [search, setSearch] = useState('');
	const [categories, setCategories] = useState<CategoryItem[]>(fallbackCategories);
	const [specialOffers, setSpecialOffers] = useState<ProductItem[]>(fallbackOffers);

	const handleSelectCategory = (id: string) => {
		setCategories(prev =>
			prev.map(cat => ({
				...cat,
				selected: cat.id === id,
			})),
		);
	};

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await axios.get('http://192.168.0.41:3000/categories');
				const categoriesData: CategoryItem[] = response.data.map(
					(cat: any, index: number) => ({
						id: cat.id.toString(),
						label: cat.nom || cat.label || 'Coffee',
						iconName: 'coffee',
						selected: index === 0,
					}),
				);
				if (categoriesData.length > 0) {
					setCategories(categoriesData);
				}
			} catch (error) {
				console.error('Failed to fetch categories:', error);
			}
		};

		const fetchProducts = async () => {
			try {
				const response = await axios.get('http://192.168.0.41:3000/cafes');
				const productsData: ProductItem[] = response.data.map((prod: any) => {
					const imageUrl = prod.image || prod.imageUrl || prod.photo;
					const priceValue =
						typeof prod.prix === 'number'
							? `Rp ${prod.prix.toLocaleString('id-ID')}`
							: prod.prix || 'Rp 50.000';

					return {
						id: prod.id.toString(),
						title: prod.nom || prod.title || 'Coffee',
						subtitle: prod.subtitle || prod.description || 'With Sugar',
						price: priceValue,
						image: imageUrl ? {uri: imageUrl} : placeholderImage,
						isFavorite: Boolean(prod.isFavorite),
					};
				});
				if (productsData.length > 0) {
					setSpecialOffers(productsData);
				}
			} catch (error) {
				console.error('Failed to fetch products:', error);
			}
		};

		fetchCategories();
		fetchProducts();
	}, []);

	const handleAddProduct = (id: string) => {
		console.log('Add product', id);
	};

	const handleToggleFavorite = (id: string) => {
		setSpecialOffers(prev =>
			prev.map(item =>
				item.id === id ? {...item, isFavorite: !item.isFavorite} : item,
			),
		);
	};

	return (
		<TemplateHome
			userName="Yudi"
			profileImage={profileImage}
			locationLabel="Jakarta, Indonesia"
			searchValue={search}
			onSearchChange={setSearch}
			onFilterPress={() => console.log('Filter pressed')}
			categories={categories}
			onSelectCategory={handleSelectCategory}
			featuredProducts={featuredProducts}
			onAddProduct={handleAddProduct}
			specialOffers={specialOffers}
			onToggleFavorite={handleToggleFavorite}
			onPressNotification={() => console.log('Notifications')}
			activeTab="home"
			onPressHome={() => console.log('Home')}
			onPressFavorites={() => console.log('Favorites')}
			onPressCart={() => console.log('Cart')}
			onPressProfile={() => console.log('Profile')}
		/>
	);
};

export default Home;
