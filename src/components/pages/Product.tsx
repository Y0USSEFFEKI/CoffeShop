import React, {useState} from 'react';
import TemplateProduct from '../templates/TemplateProduct';
import {CategoryItem} from '../../interfaces/ICategory';

const productImage = {
	uri: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
};

const Product: React.FC = () => {
	const [sizes, setSizes] = useState<CategoryItem[]>([
		{id: 'small', label: 'Small', selected: true},
		{id: 'medium', label: 'Medium', selected: false},
		{id: 'large', label: 'Large', selected: false},
	]);

	const [sugars, setSugars] = useState<CategoryItem[]>([
		{id: 'no-sugar', label: 'No Sugar', selected: true},
		{id: 'low', label: 'Low', selected: false},
		{id: 'medium', label: 'Medium', selected: false},
	]);

	const handleSelectSize = (id: string) => {
		setSizes(prev =>
			prev.map(item => ({
				...item,
				selected: item.id === id,
			})),
		);
	};

	const handleSelectSugar = (id: string) => {
		setSugars(prev =>
			prev.map(item => ({
				...item,
				selected: item.id === id,
			})),
		);
	};

	return (
		<TemplateProduct
			productImage={productImage}
			title="Cappuccino"
			subtitle="With Sugar"
			ratingLabel="4.8"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..."
			priceLabel="Rp 50.000"
			sizeOptions={sizes}
			sugarOptions={sugars}
			onSelectSize={handleSelectSize}
			onSelectSugar={handleSelectSugar}
			onPressBack={() => console.log('Back')}
			onToggleFavorite={() => console.log('Favorite')}
			onAddToCart={() => console.log('Add to cart')}
		/>
	);
};

export default Product;
