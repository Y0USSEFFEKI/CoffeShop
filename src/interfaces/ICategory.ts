import {IconName} from './IIcon';

export interface CategoryItem {
	id: string;
	label: string;
	/** Icon key, ex: 'coffee' */
	iconName?: IconName;
	selected?: boolean;
}

export interface CategoryProps extends Omit<CategoryItem, 'id'> {
	onPress?: () => void;
	style?: object;
}

export interface CategoryListProps {
	categories: CategoryItem[];
	onSelect: (id: string) => void;
	style?: object;
}
