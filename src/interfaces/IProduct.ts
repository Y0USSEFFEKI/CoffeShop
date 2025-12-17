import {ImageSourcePropType} from 'react-native';

export interface ProductItem {
	id: string;
	title: string;
	subtitle?: string;
	price: string;
	image: ImageSourcePropType;
	isFavorite?: boolean;
}

export type ProductActionVariant = 'add' | 'favorite' | 'none';
export type ProductListVariant = 'horizontal' | 'grid';

export interface ProductProps extends Omit<ProductItem, 'id'> {
	onAction?: () => void;
	actionVariant?: ProductActionVariant;
	style?: object;
}

export interface ProductListProps {
	products: ProductItem[];
	onAction?: (id: string) => void;
	style?: object;
	listVariant?: ProductListVariant;
	actionVariant?: ProductActionVariant;
}
