import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from '../atoms/Icone';
import {IconName} from '../../interfaces/IIcon';

interface FooterProps {
	homeIconName?: IconName;
	favoritesIconName?: IconName;
	cartIconName?: IconName;
	profileIconName?: IconName;
	activeTab?: 'home' | 'favorites' | 'cart' | 'profile';
	onPressHome?: () => void;
	onPressFavorites?: () => void;
	onPressCart?: () => void;
	onPressProfile?: () => void;
	style?: object;
}

/**
 * Footer navigation molecule: 4 icon buttons (home, favorites, cart, profile).
 */
const Footer: React.FC<FooterProps> = ({
	homeIconName = 'home',
	favoritesIconName = 'heart',
	cartIconName = 'cart',
	profileIconName = 'user',
	activeTab = 'home',
	onPressHome,
	onPressFavorites,
	onPressCart,
	onPressProfile,
	style,
}) => {
	return (
		<View style={[styles.container, style]}>
			<TouchableOpacity
				style={styles.item}
				onPress={onPressHome}
				activeOpacity={0.8}
			>
				<Icon
					name={homeIconName}
					size={24}
					color={activeTab === 'home' ? '#0F5B2F' : '#8FA29B'}
				/>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.item}
				onPress={onPressFavorites}
				activeOpacity={0.8}
			>
				<Icon
					name={favoritesIconName}
					size={24}
					color={activeTab === 'favorites' ? '#0F5B2F' : '#8FA29B'}
				/>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.item}
				onPress={onPressCart}
				activeOpacity={0.8}
			>
				<Icon
					name={cartIconName}
					size={24}
					color={activeTab === 'cart' ? '#0F5B2F' : '#8FA29B'}
				/>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.item}
				onPress={onPressProfile}
				activeOpacity={0.8}
			>
				<Icon
					name={profileIconName}
					size={24}
					color={activeTab === 'profile' ? '#0F5B2F' : '#8FA29B'}
				/>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		height: 80,
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: -3},
		shadowOpacity: 0.08,
		shadowRadius: 6,
		elevation: 6,
	},
	item: {
		paddingVertical: 6,
		paddingHorizontal: 18,
	},
	icon: {},
});

export default Footer;
