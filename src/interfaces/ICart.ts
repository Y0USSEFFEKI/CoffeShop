import {ImageSourcePropType} from 'react-native';

export interface CartItem {
	id: string;
	title: string;
	subtitle?: string;
	price: number;
	image: ImageSourcePropType;
	sizeLabel: string;
	sugarLabel: string;
	quantity: number;
	isFavorite?: boolean;
}

export interface PaymentMethod {
	id: string;
	image: ImageSourcePropType;
	selected?: boolean;
}

export interface CardItemProps extends CartItem {
	onIncrease?: () => void;
	onToggleFavorite?: () => void;
	style?: object;
}

export interface CardItemListProps {
	items: CartItem[];
	onIncrease?: (id: string) => void;
	onToggleFavorite?: (id: string) => void;
	style?: object;
}
