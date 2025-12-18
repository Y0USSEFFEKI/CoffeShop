import React from 'react';
import {
	View,
	ImageBackground,
	StyleSheet,
	Dimensions,
	ImageSourcePropType,
} from 'react-native';
import Button from '../atoms/Button';
import Texte from '../atoms/Texte';
import Image from '../atoms/Image';
import Points from '../atoms/Points';

const {width, height} = Dimensions.get('window');

interface TemplateAccueilProps {
	headline: string;
	subheadline: string;
	onGetStarted: () => void;
	activePage?: 1 | 2 | 3;
	backgroundSource?: ImageSourcePropType;
	logoSource?: ImageSourcePropType;
	heroSource?: ImageSourcePropType;
}

/**
 * Template d'accueil composant tous les atomes (Image, Texte, Points, Button).
 */
const TemplateAccueil: React.FC<TemplateAccueilProps> = ({
	headline,
	subheadline,
	onGetStarted,
	activePage = 1,
	backgroundSource = require('../../../assets/background.png'),
	logoSource = require('../../../assets/logo.png'),
	heroSource,
}) => {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={backgroundSource}
				style={styles.backgroundImage}
				resizeMode="cover"
			>
				<View style={styles.content}>
					<View style={styles.logoContainer}>
						<Image
							source={logoSource}
							style={styles.logo}
							resizeMode="contain"
						/>
					</View>

					{heroSource && (
						<Image source={heroSource} style={styles.heroImage} resizeMode="contain" />
					)}

					<View style={styles.textContainer}>
						<Texte style={styles.headline}>{headline}</Texte>
						<Texte style={styles.subheadline}>{subheadline}</Texte>
					</View>

					<View style={styles.indicatorsContainer}>
						{[1, 2, 3].map(index => (
							<Points
								key={index}
								pageIndex={index as 1 | 2 | 3}
								style={[
									styles.indicator,
									index === activePage
										? styles.indicatorActive
										: styles.indicatorInactive,
								]}
							/>
						))}
					</View>

					<View style={styles.buttonContainer}>
						<Button title="Get started" color="#2D5016" size="large" onClick={onGetStarted} />
					</View>
				</View>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#D7A870',
	},
	backgroundImage: {
		flex: 1,
		width: width,
		height: height,
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 40,
	},
	logoContainer: {
		width: 300,
		height: 200,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 12,
	},
	logo: {
		width: '100%',
		height: '100%',
		position: 'relative',
		top: 0,
		left: 0,
	},
	heroImage: {
		width: width * 0.8,
		height: height * 0.3,
		position: 'relative',
		top: 0,
		left: 0,
		marginBottom: 16,
	},
	textContainer: {
		alignItems: 'center',
		marginBottom: 24,
		paddingHorizontal: 20,
		width: 278,
	},
	headline: {
		fontSize: 32,
		fontWeight: '700',
		color: '#FFFFFF',
		textAlign: 'center',
		marginBottom: 12,
		lineHeight: 40,
	},
	subheadline: {
		fontSize: 18,
		fontWeight: '400',
		color: '#FFFFFF',
		textAlign: 'center',
		lineHeight: 24,
	},
	indicatorsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 32,
		gap: 12,
	},
	indicator: {
		position: 'relative',
		top: 0,
		left: 0,
		width: 44,
		height: 6,
		borderRadius: 999,
		opacity: 1,
	},
	indicatorActive: {
		backgroundColor: '#00512C',
		width: 18,
	},
	indicatorInactive: {
		backgroundColor: '#FFFFFF',
		width: 6,
	},
	buttonContainer: {
		width: '100%',
		alignItems: 'center',
		paddingHorizontal: 20,
	},
});

export default TemplateAccueil;
