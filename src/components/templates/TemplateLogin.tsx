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

interface TemplateLoginProps {
	username: string;
	password: string;
	onChangeUsername: (text: string) => void;
	onChangePassword: (text: string) => void;
	onLogin: () => void;
	onSignUp?: () => void;
	backgroundSource?: ImageSourcePropType;
}

/**
 * Template de la page de connexion, cohérente avec l'écran d'accueil.
 */
const TemplateLogin: React.FC<TemplateLoginProps> = ({
	username,
	password,
	onChangeUsername,
	onChangePassword,
	onLogin,
	onSignUp,
	backgroundSource = require('../../../assets/background.png'),
}) => {
	return (
		<View style={styles.container}>
			<ImageBackground source={backgroundSource} style={styles.backgroundImage} resizeMode="cover">
				<SafeAreaView style={styles.safe}>
					<View style={styles.content}>
						<Texte style={styles.title}>Welcome Back</Texte>
						<Texte style={styles.subtitle}>Sign in to continue</Texte>

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

						<Button
							title="Login"
							color="#0F5B2F"
							size="large"
							onClick={onLogin}
								uppercase={false}
								style={styles.loginButton}
							/>

							<View style={styles.footerRow}>
								<Texte style={styles.footerText}>Don't have an account?</Texte>
								<TouchableOpacity onPress={onSignUp} activeOpacity={0.8}>
									<Texte style={styles.linkText}>Sign up</Texte>
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
										index === 2 ? styles.indicatorActive : styles.indicatorInactive,
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
		fontSize: 30,
		fontWeight: '700',
		color: '#FFFFFF',
		textAlign: 'center',
		marginBottom: 8,
	},
	subtitle: {
		fontSize: 18,
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
		height: 250
	},
	input: {
		backgroundColor: '#FFFFFF',
		borderRadius: 12,
		height: 51,
	},
	loginButton: {
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

export default TemplateLogin;
