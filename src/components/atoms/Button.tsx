import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {IBoutton} from '../../interfaces/IBoutton';
import Icon from './Icone';

export const Button: React.FC<IBoutton> = ({
	title,
	rightTitle,
	color,
	size,
	onClick,
	variant = 'text',
	iconName,
	iconColor = '#0F5B2F',
	iconSize,
	uppercase = true,
	style,
	textStyle,
}) => {
	const getSizeStyles = () => {
		switch (size) {
			case 'small':
				return {paddingVertical: 8, paddingHorizontal: 16, minWidth: 100};
			case 'medium':
				return {paddingVertical: 12, paddingHorizontal: 24, minWidth: 120};
			case 'large':
				return {paddingVertical: 16, paddingHorizontal: 32, minWidth: 150};
			default:
				return {paddingVertical: 12, paddingHorizontal: 24, minWidth: 120};
		}
	};

	const getTextSize = () => {
		switch (size) {
			case 'small':
				return 14;
			case 'medium':
				return 16;
			case 'large':
				return 18;
			default:
				return 16;
		}
	};

	const getIconButtonSize = () => {
		switch (size) {
			case 'small':
				return 34;
			case 'medium':
				return 40;
			case 'large':
				return 46;
			default:
				return 40;
		}
	};

	const iconButtonSize = getIconButtonSize();
	const isIcon = variant === 'icon';
	const isSplit = variant === 'split';
	const label = title ?? '';
	const priceLabel = rightTitle ?? '';

	return (
		<TouchableOpacity
			onPress={onClick}
			style={[
				styles.button,
				{backgroundColor: color},
				isIcon ? styles.iconButton : null,
				isSplit ? styles.splitButton : null,
				isIcon ? {width: iconButtonSize, height: iconButtonSize, borderRadius: iconButtonSize / 2} : null,
				!isIcon && !isSplit ? getSizeStyles() : null,
				style,
			]}
			activeOpacity={0.8}
		>
			{isIcon ? (
				iconName ? <Icon name={iconName} size={iconSize ?? 18} color={iconColor} /> : null
			) : isSplit ? (
				<View style={styles.splitContent}>
					<Text
						style={[
							styles.splitText,
							uppercase ? styles.textUppercase : styles.textNormal,
							textStyle,
						]}
					>
						{label}
					</Text>
					<View style={styles.splitDivider} />
					<Text style={[styles.splitPrice, textStyle]}>{priceLabel}</Text>
				</View>
			) : (
				<Text
					style={[
						styles.buttonText,
						{fontSize: getTextSize()},
						uppercase ? styles.textUppercase : styles.textNormal,
						textStyle,
					]}
				>
					{label}
				</Text>
			)}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 2,
	},
	buttonText: {
		color: '#ffffff',
		fontWeight: '600',
	},
	textUppercase: {
		textTransform: 'uppercase',
		letterSpacing: 0.5,
	},
	textNormal: {
		textTransform: 'none',
		letterSpacing: 0,
	},
	iconButton: {
		paddingVertical: 0,
		paddingHorizontal: 0,
	},
	splitButton: {
		paddingVertical: 16,
		paddingHorizontal: 20,
		borderRadius: 18,
	},
	splitContent: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	splitText: {
		color: '#FFFFFF',
		fontSize: 16,
		fontWeight: '600',
	},
	splitPrice: {
		color: '#FFFFFF',
		fontSize: 16,
		fontWeight: '700',
	},
	splitDivider: {
		width: 1,
		height: 20,
		marginHorizontal: 12,
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
	},
});

export default Button;
