import React from 'react';
import {Image} from 'react-native';
import {SvgProps, SvgUri} from 'react-native-svg';
import {IIcon, IconName} from '../../interfaces/IIcon';

import BackIcon from '../../../assets/icons/arrow-left.svg';
import BellIcon from '../../../assets/icons/heroicons-outline_bell.svg';
import CartIcon from '../../../assets/icons/akar-icons_cart.svg';
import CoffeeIcon from '../../../assets/icons/gg_coffee.svg';
import FilterIcon from '../../../assets/icons/mi_filter.svg';
import HeartIcon from '../../../assets/icons/akar-icons_heart.svg';
import HomeIcon from '../../../assets/icons/fluent_home-16-filled.svg';
import LocationIcon from '../../../assets/icons/clarity_map-marker-solid.svg';
import PlusIcon from '../../../assets/icons/Vector.svg';
import SearchIcon from '../../../assets/icons/akar-icons_search.svg';
import StarIcon from '../../../assets/icons/ant-design_star-filled.svg';
import UserIcon from '../../../assets/icons/fa-regular_user.svg';

type SvgIconComponent = React.FC<SvgProps>;
type IconSource = SvgIconComponent | number;

const iconMap: Record<IconName, IconSource> = {
	back: BackIcon,
	bell: BellIcon,
	cart: CartIcon,
	coffee: CoffeeIcon,
	filter: FilterIcon,
	heart: HeartIcon,
	home: HomeIcon,
	'map-marker': LocationIcon,
	plus: PlusIcon,
	search: SearchIcon,
	star: StarIcon,
	user: UserIcon,
};

/**
 * Atome Icon qui encapsule les SVG.
 */
const Icone: React.FC<IIcon> = ({name, size = 20, color = '#0F5B2F', style}) => {
	const iconSource = iconMap[name];
	if (typeof iconSource === 'number') {
		const resolved = Image.resolveAssetSource(iconSource);
		if (!resolved?.uri) {
			return null;
		}

		return <SvgUri uri={resolved.uri} width={size} height={size} color={color} style={style} />;
	}

	const SvgIcon = iconSource;
	return <SvgIcon width={size} height={size} color={color} style={style} />;
};

export default Icone;
