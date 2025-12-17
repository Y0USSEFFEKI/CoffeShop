import React from 'react';
import {View, StyleSheet} from 'react-native';
import Texte from '../atoms/Texte';
import Icon from '../atoms/Icone';
import {IconName} from '../../interfaces/IIcon';

interface LocationProps {
	label: string;
	/** Icon key, ex: 'map-marker' */
	iconName?: IconName;
	style?: object;
}

/**
 * Molecule composée de deux atomes : une icône et un texte de localisation.
 */
const Location: React.FC<LocationProps> = ({label, iconName = 'map-marker', style}) => {
	return (
		<View style={[styles.container, style]}>
			<Icon name={iconName} size={14} color="#0F5B2F" style={styles.icon} />
			<Texte style={styles.text}>{label}</Texte>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 6,
	},
	icon: {},
	text: {
		fontSize: 14,
		fontWeight: '600',
		color: '#1A1A1A',
	},
});

export default Location;
