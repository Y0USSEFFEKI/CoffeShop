import React from 'react';
import {
	View,
	ImageBackground,
	StyleSheet,
	Dimensions,
	ImageSourcePropType,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native';
import Texte from '../atoms/Texte';
import InputText from '../atoms/InputText';
import Button from '../atoms/Button';
import Points from '../atoms/Points';

const {width, height} = Dimensions.get('window');

interface TemplateSignupProps {
	username: string;
	password: string;
	country: string;
	town: string;
	onChangeUsername: (text: string) => void;
	onChangePassword: (text: string) => void;
	onChangeCountry: (text: string) => void;
	onChangeTown: (text: string) => void;
	onSubmit: () => void;
	onGoToLogin?: () => void;
	backgroundSource?: ImageSourcePropType;
}

/**
 * Template d'inscription, cohérent avec l'interface de login/accueil.
 */
const TemplateSignup: React.FC<TemplateSignupProps> = ({
	username,
	password,
	country,
	town,
	onChangeUsername,
	onChangePassword,
	onChangeCountry,
	onChangeTown,
	onSubmit,
	onGoToLogin,
	backgroundSource = require('../../../assets/background.png'),
}) => {
	return (
		<View style={styles.container}>
			<ImageBackground source={backgroundSource} style={styles.backgroundImage} resizeMode="cover">
				<SafeAreaView style={styles.safe}>
					<View style={styles.content}>
						<Texte style={styles.title}>Create Account</Texte>
						<Texte style={styles.subtitle}>Sign up to get started</Texte>

						<View style={styles.form}>
							<InputText
								value={username}
								onChangeText={onChangeUsername}
								placeholder="Username"
								style={styles.input}
							/>
							<InputText
								value={password}
								onChangeText={onChangePassword}
								placeholder="Password"
								secureTextEntry
								style={styles.input}
							/>
							<InputText
								value={country}
								onChangeText={onChangeCountry}
								placeholder="Country"
								style={styles.input}
							/>
							<InputText
								value={town}
								onChangeText={onChangeTown}
								placeholder="Town"
								style={styles.input}
							/>

							<Button
								title="Sign Up"
								color="#0F5B2F"
								size="large"
								onClick={onSubmit}
								uppercase={false}
								style={styles.submitButton}
							/>

							<View style={styles.footerRow}>
								<Texte style={styles.footerText}>Already have an account?</Texte>
								<TouchableOpacity onPress={onGoToLogin} activeOpacity={0.8}>
									<Texte style={styles.linkText}>Login</Texte>
								</TouchableOpacity>
							</View>
						</View>

						<View style={styles.indicatorsContainer}>
							{[1, 2, 3].map(index => (
								<Points
									key={index}
									pageIndex={index as 1 | 2 | 3}
									style={[
										styles.indicator,
										index === 3 ? styles.indicatorActive : styles.indicatorInactive,
									]}
								/>
							))}
						</View>
					</View>
				</SafeAreaView>
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
		width,
		height,
	},
	safe: {
		flex: 1,
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 24,
	},
	title: {
		fontSize: 28,
		fontWeight: '700',
		color: '#FFFFFF',
		textAlign: 'center',
		marginBottom: 8,
	},
	subtitle: {
		fontSize: 16,
		color: '#FFFFFF',
		textAlign: 'center',
		marginBottom: 24,
	},
	form: {
		width: '100%',
		backgroundColor: 'rgba(255,255,255,0.9)',
		borderRadius: 20,
		padding: 20,
		gap: 12,
		height: 350
	},
	input: {
		backgroundColor: '#FFFFFF',
		borderRadius: 12,
		height: 51,
	},
	submitButton: {
		width: '100%',
		borderRadius: 16,
	},
	footerRow: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 6,
		marginTop: 4,
	},
	footerText: {
		color: '#4F4F4F',
		fontSize: 13,
	},
	linkText: {
		color: '#0F5B2F',
		fontSize: 13,
		fontWeight: '700',
	},
	indicatorsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 18,
		gap: 12,
	},
	indicator: {
		position: 'relative',
		top: 0,
		left: 0,
		width: 18,
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
});

export default TemplateSignup;
